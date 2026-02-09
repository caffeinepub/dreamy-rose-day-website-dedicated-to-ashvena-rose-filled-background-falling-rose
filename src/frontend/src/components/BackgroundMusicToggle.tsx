import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.src = 'https://cdn.pixabay.com/audio/2022/03/10/audio_4a8f1d6e8e.mp3';
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <Button
      onClick={toggleMusic}
      size="icon"
      className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white hover:shadow-rose-glow transition-all duration-300 hover:scale-110 border-2 border-rose-primary/30"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-rose-primary" />
      ) : (
        <VolumeX className="w-6 h-6 text-rose-primary" />
      )}
    </Button>
  );
}
