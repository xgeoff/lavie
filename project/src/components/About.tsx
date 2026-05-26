import { Leaf, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-cafe-green/60">
            Our Story
          </span>
          <h2 className="heading-section text-cafe-charcoal mt-4">
            A Certain Way of Living
          </h2>
          <div className="art-nouveau-divider max-w-xs mx-auto">
            <span className="text-cafe-green/30 text-xs">&#10047;</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-powder-blue-100 to-cafe-warm shadow-lg">
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cafe La Vie interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white shadow-xl rounded-xl p-6 max-w-[200px]">
              <p className="font-display text-2xl text-cafe-charcoal font-light">La Vie</p>
              <p className="font-body text-xs text-cafe-charcoal/50 mt-1 leading-relaxed">
                The life, the way, the feeling
              </p>
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full glass-green opacity-60" />
          </div>

          <div className="space-y-6">
            <p className="font-body text-lg text-cafe-charcoal/80 leading-relaxed">
              <span className="font-display text-3xl text-cafe-charcoal/30 float-left mr-2 mt-1">C</span>
              afe La Vie was born from a simple belief: that a coffee shop can be both beautiful and comfortable. That you can walk into a room flooded with natural light, adorned with Art Nouveau curves and living greenery, and still feel like you&apos;ve come home.
            </p>
            <p className="font-body text-base text-cafe-charcoal/70 leading-relaxed">
              Our espresso is pulled with precision, our pastries are baked fresh each morning, and our beans are roasted just steps away under the watchful eye of our sister brand, Skyview Roastery.
            </p>
            <p className="font-body text-base text-cafe-charcoal/70 leading-relaxed">
              We drew inspiration from the grand cafes of Paris &mdash; not their formality, but their generosity of spirit. The feeling that the space exists for you, not the other way around.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-cafe-cream/60">
                <Leaf size={20} className="mx-auto text-cafe-green/60 mb-2" />
                <p className="font-display text-xs tracking-wider uppercase text-cafe-charcoal/50">Fresh Daily</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cafe-cream/60">
                <Heart size={20} className="mx-auto text-cafe-green/60 mb-2" />
                <p className="font-display text-xs tracking-wider uppercase text-cafe-charcoal/50">Made with Care</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cafe-cream/60">
                <Sparkles size={20} className="mx-auto text-cafe-green/60 mb-2" />
                <p className="font-display text-xs tracking-wider uppercase text-cafe-charcoal/50">Artfully Crafted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
