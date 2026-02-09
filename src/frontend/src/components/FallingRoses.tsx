import { useEffect, useState } from 'react';

interface FallingRose {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  image: string;
  size: number;
  rotation: number;
}

export default function FallingRoses() {
  const [roses, setRoses] = useState<FallingRose[]>([]);

  const roseImages = [
    '/assets/generated/rose-red-icon.dim_256x256.png',
    '/assets/generated/rose-pink-icon.dim_256x256.png',
    '/assets/generated/rose-white-icon.dim_256x256.png'
  ];

  useEffect(() => {
    // Generate random falling roses
    const generatedRoses: FallingRose[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 12 + Math.random() * 10,
      delay: Math.random() * 8,
      image: roseImages[Math.floor(Math.random() * roseImages.length)],
      size: 30 + Math.random() * 40,
      rotation: Math.random() * 360
    }));
    setRoses(generatedRoses);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="absolute -top-20 animate-fall-gentle opacity-70"
          style={{
            left: `${rose.left}%`,
            animationDuration: `${rose.animationDuration}s`,
            animationDelay: `${rose.delay}s`,
            width: `${rose.size}px`,
            height: `${rose.size}px`
          }}
        >
          <img
            src={rose.image}
            alt=""
            className="w-full h-full object-contain"
            style={{
              transform: `rotate(${rose.rotation}deg)`,
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))'
            }}
          />
        </div>
      ))}
    </div>
  );
}
