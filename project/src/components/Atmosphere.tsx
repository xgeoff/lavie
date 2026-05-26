import { Sofa, Sun, Leaf, Palette } from 'lucide-react';

export function Atmosphere() {
  return (
    <section id="atmosphere" className="section-padding bg-cafe-warm relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full text-powder-blue-200 opacity-[0.06]" viewBox="0 0 800 600">
          <path d="M-50,300 Q150,200 300,280 Q450,360 600,250 Q750,140 850,220" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M-50,350 Q150,250 300,330 Q450,410 600,300 Q750,190 850,270" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M-50,250 Q150,180 300,230 Q450,280 600,200 Q750,120 850,170" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-cafe-green/60">The Space</span>
          <h2 className="heading-section text-cafe-charcoal mt-4">The Vibe</h2>
          <div className="art-nouveau-divider max-w-xs mx-auto">
            <span className="text-cafe-green/30 text-xs">&#10047;</span>
          </div>
          <p className="font-body text-cafe-charcoal/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Bright, living, comfortable. A space that feels curated but never precious &mdash; where Art Nouveau elegance meets bohemian ease.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="aspect-square rounded-xl overflow-hidden col-span-2 row-span-2">
            <img
              src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Bright cafe interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Latte art"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5857523/pexels-photo-5857523.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Fresh pastries"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6207804/pexels-photo-6207804.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Coffee beans"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Cozy corner"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white/70 border border-powder-blue-100/50">
            <Sun size={24} className="text-powder-blue-400 mb-4" />
            <h3 className="font-display text-lg text-cafe-charcoal mb-2">Flooded with Light</h3>
            <p className="font-body text-sm text-cafe-charcoal/50 leading-relaxed">
              Floor-to-ceiling windows, white walls, and powder blue accents that make the whole room glow.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 border border-cafe-green/10">
            <Sofa size={24} className="text-cafe-green/70 mb-4" />
            <h3 className="font-display text-lg text-cafe-charcoal mb-2">Deeply Comfortable</h3>
            <p className="font-body text-sm text-cafe-charcoal/50 leading-relaxed">
              Velvet couches, worn leather chairs, layered textiles. Places to sink into and stay a while.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 border border-cafe-green/10">
            <Leaf size={24} className="text-cafe-green/70 mb-4" />
            <h3 className="font-display text-lg text-cafe-charcoal mb-2">Living &amp; Breathing</h3>
            <p className="font-body text-sm text-cafe-charcoal/50 leading-relaxed">
              Hanging vines, potted ferns, green glass accents. Nature woven through the architecture.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 border border-powder-blue-100/50">
            <Palette size={24} className="text-powder-blue-400 mb-4" />
            <h3 className="font-display text-lg text-cafe-charcoal mb-2">Art Nouveau Soul</h3>
            <p className="font-body text-sm text-cafe-charcoal/50 leading-relaxed">
              Whiplash curves, stained glass touches, organic ornament. The Belle Epoque, made approachable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
