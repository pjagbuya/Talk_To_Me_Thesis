"use client";

import { useState } from 'react';
import { createClient } from '../../util/supabase/client';

export default function VideoUploader() {
  const supabase = createClient();
  const [videoUrl, setVideoUrl] = useState('');
  const [filePath, setFilePath] = useState('');
  const [transcript, setTranscript] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transcribing, setTranscribing] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}_${file.name}`;
    const filePath = `videos/${fileName}`;

    const { error } = await supabase.storage.from('videos').upload(filePath, file);

    if (error) {
      alert('Upload failed: ' + error.message);
    } else {
      const { data } = supabase.storage.from('videos').getPublicUrl(filePath);
      setVideoUrl(data.publicUrl);
      setFilePath(filePath);
    }

    setUploading(false);
  };

  const handleTranscribe = async () => {
    setTranscribing(true);
    const res = await fetch('/api/transcribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filePath }),
    });

    const json = await res.json();
    if (json.transcript) setTranscript(json.transcript);
    else{
        alert('Transcription failed: ' + json.error);
        console.log(json.details);
    }
    setTranscribing(false);
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {videoUrl && (
        <>
          <video controls src={videoUrl} width="400" style={{ marginTop: '1rem' }} />
          <button onClick={handleTranscribe} disabled={transcribing} style={{ display: 'block', marginTop: '1rem' }}>
            {transcribing ? 'Transcribing...' : 'Transcribe Video'}
          </button>
        </>
      )}
      {transcript && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
          <h3>Transcript:</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
}
