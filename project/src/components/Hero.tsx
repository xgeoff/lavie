import { Logo } from './Logo';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cafe-cream">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-10 -left-10 w-80 h-80 text-powder-blue-200 opacity-40" viewBox="0 0 200 200">
          <path d="M20,100 Q60,20 100,60 Q140,100 100,140 Q60,180 20,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M40,80 Q80,30 120,70" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="60" r="3" fill="currentColor" opacity="0.3" />
        </svg>
        <svg className="absolute -bottom-10 -right-10 w-80 h-80 text-powder-blue-200 opacity-40" viewBox="0 0 200 200">
          <path d="M180,100 Q140,180 100,140 Q60,100 100,60 Q140,20 180,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M160,120 Q120,170 80,130" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="140" r="3" fill="currentColor" opacity="0.3" />
        </svg>
        <svg className="absolute top-1/4 left-0 w-full h-1/2 text-cafe-green opacity-[0.04]" viewBox="0 0 800 400">
          <path d="M0,200 Q100,150 200,180 Q300,210 400,170 Q500,130 600,160 Q700,190 800,150" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0,220 Q100,180 200,200 Q300,220 400,190 Q500,160 600,180 Q700,200 800,170" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-cafe-green/10 animate-float" />
        <div className="absolute top-[40%] left-[8%] w-2 h-2 rounded-full bg-powder-blue-300/15 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[30%] right-[10%] w-4 h-4 rounded-full bg-cafe-green/8 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8">
          <Logo size={180} className="mx-auto" />
        </div>
        <div className="art-nouveau-divider max-w-xs mx-auto">
          <span className="text-cafe-green/40 text-xs">&#10047;</span>
        </div>
        <p className="font-display text-xl md:text-2xl text-cafe-charcoal/70 tracking-widest uppercase mt-6">
          Coffee &amp; P&#226;tisserie
        </p>
        <p className="font-body text-base md:text-lg text-cafe-charcoal/50 mt-4 max-w-md mx-auto leading-relaxed">
          Where the art of espresso meets the warmth of homemade pastries
        </p>
        <div className="mt-6">
          <span className="inline-block font-display text-sm tracking-[0.3em] uppercase text-cafe-green/60 border border-cafe-green/20 px-6 py-2 rounded-full">
            Est. 2024
          </span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cafe-charcoal/30 hover:text-cafe-green/50 transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
