# backend/whisper.py
import sys
from faster_whisper import WhisperModel
import ffmpeg
import os

ffmpeg_path = "G:/ffmpeg-7.1.1-full_build/bin/ffmpeg.exe"

def extract_audio(video_path, audio_path="temp_audio.wav"):
    ffmpeg.input(video_path).output(audio_path, ac=1, ar='16k').run(cmd=ffmpeg_path, overwrite_output=True)
    return audio_path

def transcribe(video_path):
    model = WhisperModel("base", compute_type="auto", device="cpu")
    audio_path = extract_audio(video_path)

    segments, _ = model.transcribe(audio_path, beam_size=5, language="en")

    full_text = " ".join([s.text for s in segments])
    os.remove(audio_path)
    return full_text.strip()

if __name__ == "__main__":
    path = sys.argv[1]
    print(transcribe(path))
