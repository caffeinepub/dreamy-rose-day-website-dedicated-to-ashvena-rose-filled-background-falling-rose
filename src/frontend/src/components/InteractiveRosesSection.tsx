import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Rose {
  id: number;
  image: string;
  message: string;
  revealed: boolean;
}

const loveMessages = [
  "I love you Jnu ❤️",
  "You are my favorite rose 🌹",
  "Forever yours, Ashvena",
  "My heart blooms for you",
  "Every rose reminds me of you",
  "You are my always",
  "One rose, endless love",
  "You make my world beautiful",
  "My love grows like roses",
  "You are my garden of joy",
  "Forever blooming for you",
  "My heart's sweetest rose"
];

const roseImages = [
  '/assets/generated/rose-red-icon.dim_256x256.png',
  '/assets/generated/rose-pink-icon.dim_256x256.png',
  '/assets/generated/rose-white-icon.dim_256x256.png'
];

export default function InteractiveRosesSection() {
  const [roses, setRoses] = useState<Rose[]>(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      image: roseImages[i % roseImages.length],
      message: loveMessages[i % loveMessages.length],
      revealed: false
    }))
  );

  const handleRoseClick = (id: number) => {
    setRoses(prev =>
      prev.map(rose =>
        rose.id === id ? { ...rose, revealed: !rose.revealed } : rose
      )
    );
  };

  return (
    <div className="max-w-6xl w-full px-4 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cursive text-rose-dark text-center mb-12 animate-fade-in drop-shadow-glow">
        Click the roses to reveal my love 💕
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {roses.map((rose, index) => (
          <div
            key={rose.id}
            className="animate-bounce-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => handleRoseClick(rose.id)}
              className="relative w-full aspect-square group focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-primary/50 rounded-2xl transition-all duration-300"
              aria-label={`Rose ${rose.id + 1}`}
            >
              {/* Rose Image */}
              <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-primary/20 to-rose-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={rose.image}
                  alt=""
                  className="relative w-full h-full object-contain drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-rose-glow"
                />
              </div>

              {/* Message Card */}
              {rose.revealed && (
                <Card className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full w-[200%] max-w-[280px] z-20 animate-scale-in shadow-2xl border-2 border-rose-primary/40">
                  <CardContent className="p-4 bg-white/95 backdrop-blur-sm rounded-lg">
                    <p className="text-sm sm:text-base font-cursive text-rose-dark text-center leading-relaxed">
                      {rose.message}
                    </p>
                  </CardContent>
                </Card>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
