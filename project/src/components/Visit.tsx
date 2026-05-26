import { Clock, MapPin, Mail, Phone, Instagram } from 'lucide-react';

export function Visit() {
  const hours = [
    { day: 'Monday - Friday', time: '6:30am - 7:00pm' },
    { day: 'Saturday', time: '7:00am - 8:00pm' },
    { day: 'Sunday', time: '7:30am - 6:00pm' },
  ];

  return (
    <section id="visit" className="section-padding bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-cafe-green/60">
            Come Find Us
          </span>
          <h2 className="heading-section text-cafe-charcoal mt-4">Visit</h2>
          <div className="art-nouveau-divider max-w-xs mx-auto">
            <span className="text-cafe-green/30 text-xs">&#10047;</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-cafe-green/60" />
                <h3 className="font-display text-xl text-cafe-charcoal">Location</h3>
              </div>
              <div className="pl-8 space-y-1">
                <p className="font-body text-cafe-charcoal/70">127 Rue Belle</p>
                <p className="font-body text-cafe-charcoal/50 text-sm">Portland, OR 97205</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-cafe-green/60" />
                <h3 className="font-display text-xl text-cafe-charcoal">Hours</h3>
              </div>
              <div className="pl-8 space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between max-w-xs">
                    <span className="font-body text-cafe-charcoal/70">{h.day}</span>
                    <span className="font-body text-cafe-charcoal/50">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail size={20} className="text-cafe-green/60" />
                <h3 className="font-display text-xl text-cafe-charcoal">Contact</h3>
              </div>
              <div className="pl-8 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-cafe-charcoal/30" />
                  <span className="font-body text-cafe-charcoal/70">(503) 555-0147</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-cafe-charcoal/30" />
                  <span className="font-body text-cafe-charcoal/70">hello@cafelavie.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram size={14} className="text-cafe-charcoal/30" />
                  <span className="font-body text-cafe-charcoal/70">@cafelavie</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2909065/pexels-photo-2909065.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cafe La Vie storefront"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl glass-green -z-10 opacity-40" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-powder-blue-200/30 -z-10" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
              <p className="font-display text-lg text-cafe-charcoal leading-snug">
                &ldquo;A room where the light is gentle, the coffee is serious, and nobody rushes you.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
