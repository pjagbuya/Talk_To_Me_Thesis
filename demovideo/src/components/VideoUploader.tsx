'use client';

import { useState } from 'react';
import { createClient } from '../../util/supabase/client'; // Your existing client
import type { ChangeEvent } from 'react';

export default function VideoUploader() {
  const supabase = createClient();
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `videos/${fileName}`;

    const { error } = await supabase.storage
      .from('videos')
      .upload(filePath, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      alert('Upload failed: ' + error.message);
    } else {
      const { data } = supabase.storage.from('videos').getPublicUrl(filePath);
      setVideoUrl(data.publicUrl);
      alert('Upload Successful!');
    }

    setUploading(false);
  };

  return (
    <div>
      <label
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {uploading ? 'Uploading...' : 'Upload Video'}
        <input type="file" accept="video/*" onChange={handleUpload} hidden />
      </label>

      {videoUrl && (
        <video controls width="500" style={{ marginTop: '20px' }}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  );
}
