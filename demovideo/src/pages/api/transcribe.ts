// pages/api/transcribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '../../../util/supabase/client';
import { tmpdir } from 'os';
import { writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filePath } = req.body;

  if (!filePath) return res.status(400).json({ error: 'Missing filePath' });

  const supabase = createClient();
  const { data, error } = await supabase.storage.from('videos').download(filePath);

  if (error || !data) return res.status(500).json({ error: error?.message });

  const tempFile = join(tmpdir(), 'input-video.mp4');
  const buffer = await data.arrayBuffer();
  writeFileSync(tempFile, Buffer.from(buffer));

  try {
    const output = execSync(`python src/backend/whisper.py ${tempFile}`, { encoding: 'utf-8' });
    unlinkSync(tempFile);
    return res.status(200).json({ transcript: output.trim() });
  } catch (err) {
    unlinkSync(tempFile);
    return res.status(500).json({ error: 'Transcription failed', details: String(err) });
  }
}
