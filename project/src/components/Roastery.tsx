import { Mountain, RotateCcw, Flame } from 'lucide-react';

const currentBeans = [
  {
    name: 'Ethiopia Yirgacheffe',
    origin: 'Kochere, Ethiopia',
    tasting: 'Jasmine, bergamot, raw honey',
    process: 'Washed',
    roast: 'Medium-Light',
  },
  {
    name: 'Colombia Huila',
    origin: 'San Agustin, Colombia',
    tasting: 'Red plum, caramel, toasted walnut',
    process: 'Washed',
    roast: 'Medium',
  },
  {
    name: 'Guatemala Antigua',
    origin: 'Antigua Valley, Guatemala',
    tasting: 'Dark chocolate, spice, dried fig',
    process: 'Washed',
    roast: 'Medium',
  },
  {
    name: 'Kenya AA Nyeri',
    origin: 'Nyeri, Kenya',
    tasting: 'Blackcurrant, grapefruit, brown sugar',
    process: 'Washed',
    roast: 'Medium',
  },
];

export function Roastery() {
  return (
    <section id="roastery" className="section-padding bg-cafe-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="roast-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#roast-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-cafe-green-light/60">
            Our Sister Brand
          </span>
          <h2 className="heading-section text-white/95 mt-4">Skyview Roastery</h2>
          <div className="art-nouveau-divider max-w-xs mx-auto">
            <span className="text-cafe-green-light/30 text-xs">&#10047;</span>
          </div>
          <p className="font-body text-white/50 mt-4 max-w-lg mx-auto leading-relaxed">
            Small batch. Single origin. Rotating selection. Roasted in-house with the kind of attention most people reserve for their children.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl border border-white/10 bg-white/[0.03]">
            <Mountain size={28} className="mx-auto text-cafe-green-light/70 mb-4" />
            <h3 className="font-display text-xl text-white/80 mb-3">Single Origin</h3>
            <p className="font-body text-sm text-white/40 leading-relaxed">
              Every bag tells the story of one place. One farm, one altitude, one season. We don&apos;t blend &mdash; we curate.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl border border-white/10 bg-white/[0.03]">
            <RotateCcw size={28} className="mx-auto text-cafe-green-light/70 mb-4" />
            <h3 className="font-display text-xl text-white/80 mb-3">Rotating Selection</h3>
            <p className="font-body text-sm text-white/40 leading-relaxed">
              Our menu moves with the harvest. When a crop peaks, we bring it in. When it fades, we let it go.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl border border-white/10 bg-white/[0.03]">
            <Flame size={28} className="mx-auto text-cafe-green-light/70 mb-4" />
            <h3 className="font-display text-xl text-white/80 mb-3">Medium Roast Focus</h3>
            <p className="font-body text-sm text-white/40 leading-relaxed">
              We believe medium roasting honors the bean. Enough development for sweetness, enough restraint for origin character.
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-cafe-green-light/40">
            Currently Roasting
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentBeans.map((bean) => (
            <div
              key={bean.name}
              className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cafe-green-light/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-cafe-green-light/60" />
                <span className="font-economica text-xs text-cafe-green-light/50 uppercase tracking-wider">
                  {bean.roast}
                </span>
              </div>
              <h3 className="font-display text-lg text-white/80 group-hover:text-white transition-colors">
                {bean.name}
              </h3>
              <p className="font-body text-xs text-white/30 mt-1">{bean.origin}</p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="font-body text-sm text-white/40 leading-relaxed">{bean.tasting}</p>
                <p className="font-body text-xs text-white/20 mt-2">Process: {bean.process}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-sm text-white/30">
            Available by the bag at our counter &bull; Whole or ground to your preferred method
          </p>
        </div>
      </div>
    </section>
  );
}
