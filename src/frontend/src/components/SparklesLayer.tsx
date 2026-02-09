import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function SparklesLayer() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate random sparkles
    const generatedSparkles: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 20 + Math.random() * 30,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[4]">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        >
          <img
            src="/assets/generated/sparkle-particle.dim_64x64.png"
            alt=""
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      ))}
    </div>
  );
}
