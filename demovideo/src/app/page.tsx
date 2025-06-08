import VideoUploader from '@/components/VideoUploader';

export default function HomePage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Upload Your Video</h1>
      <VideoUploader />
    </main>
  );
}
