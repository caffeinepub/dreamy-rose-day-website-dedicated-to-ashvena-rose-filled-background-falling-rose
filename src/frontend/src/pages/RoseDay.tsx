import { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import FallingRoses from '@/components/FallingRoses';
import SparklesLayer from '@/components/SparklesLayer';
import InteractiveRosesSection from '@/components/InteractiveRosesSection';
import BackgroundMusicToggle from '@/components/BackgroundMusicToggle';

export default function RoseDay() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Rose garden background with soft pastel glow overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/rose-garden-background.dim_1920x1080.png)' }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-rose-pastel-light/80 via-rose-pastel-medium/70 to-rose-pastel-accent/80 backdrop-blur-[2px]" />
      
      {/* Decorative layers - non-interactive */}
      <FallingRoses />
      <FloatingHearts />
      <SparklesLayer />

      {/* Background music toggle */}
      <BackgroundMusicToggle />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-5xl w-full text-center space-y-12 animate-fade-in pt-8 pb-16">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cursive text-rose-dark leading-tight animate-float-gentle drop-shadow-glow px-4">
            🌹 Happy Rose Day, My Love Ashvena 🌹
          </h1>

          {/* Special Love Message Box */}
          <div className="max-w-3xl mx-auto px-4 animate-slide-up">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-rose-primary/30 hover:border-rose-primary/50 transition-all duration-500 hover:shadow-rose-glow">
              <p className="text-xl sm:text-2xl md:text-3xl font-cursive text-rose-dark leading-relaxed">
                Ashvena, just like roses, my love for you grows more beautiful every day. Happy Rose Day, my Jnu ❤️
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Roses Section */}
        <InteractiveRosesSection />

        {/* Final Closing Section */}
        <div className="max-w-4xl w-full text-center py-16 px-4 animate-fade-in">
          <div className="bg-gradient-to-r from-rose-primary/20 via-rose-accent/20 to-rose-primary/20 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-xl border border-rose-primary/40">
            <p className="text-2xl sm:text-3xl md:text-4xl font-cursive text-rose-dark leading-relaxed animate-pulse-gentle">
              This garden of roses is only for you, Ashvena 🌹
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-sm text-rose-dark/60">
          © 2026. Built with <span className="text-rose-primary">❤️</span> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-rose-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
