import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function EmotionDetector() {
  const [audioFile, setAudioFile] = useState(null);
  const [emotion, setEmotion]   = useState('');
  const [loading, setLoading]   = useState(false);

  const handleFileChange = (e) => setAudioFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!audioFile) return;
    setLoading(true);
    const form = new FormData();
    form.append('file', audioFile);

    try {
      const res  = await fetch('/predict', { method: 'POST', body: form });
      const data = await res.json();
      setEmotion(data.emotion || 'Error');
    } catch (err) {
      console.error(err);
      setEmotion('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Emotion Detection</h1>
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4">
        <input type="file" accept=".wav,.mp3,audio/*" onChange={handleFileChange} />
          <Button onClick={handleUpload} disabled={!audioFile || loading}>
            {loading ? 'Detecting…' : 'Detect Emotion'}
          </Button>
          {emotion && (
            <p className="mt-4 text-center text-lg">
              Detected Emotion: <strong>{emotion}</strong>
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
