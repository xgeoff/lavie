import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-cafe-black text-white/60 relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-cafe-green-light/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <Logo size={60} />
            <p className="font-body text-sm text-white/30 leading-relaxed max-w-xs">
              Coffee &amp; patisserie. Bright rooms, serious espresso, and the kind of comfort that doesn&apos;t ask you to leave.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-widest uppercase text-white/40">Navigate</h4>
            <div className="space-y-2">
              {[
                { label: 'Our Story', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Skyview Roastery', href: '#roastery' },
                { label: 'The Vibe', href: '#atmosphere' },
                { label: 'Visit', href: '#visit' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-white/40 hover:text-cafe-green-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-widest uppercase text-white/40">Find Us</h4>
            <div className="space-y-2 font-body text-sm text-white/30">
              <p>127 Rue Belle</p>
              <p>Portland, OR 97205</p>
              <p>hello@cafelavie.com</p>
              <p>(503) 555-0147</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            &copy; 2024 Cafe La Vie. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-widest text-white/15">
            Skyview Roastery is a registered trademark of Cafe La Vie LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
