import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate random hearts
    const generatedHearts: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 8,
      size: 24 + Math.random() * 32,
      delay: Math.random() * 6
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[3]">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up opacity-50"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
