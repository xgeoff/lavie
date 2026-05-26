import { Coffee, Croissant } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Espresso Bar',
    icon: <Coffee size={20} className="text-cafe-green/70" />,
    items: [
      { name: 'Espresso', description: 'Double pulled, full-bodied and rich', price: '3.50' },
      { name: 'Americano', description: 'Smooth, with a crema that lingers', price: '4.00' },
      { name: 'Cappuccino', description: 'Velvety microfoam, perfectly balanced', price: '5.00' },
      { name: 'Latte', description: 'Creamy and comforting, our signature pour', price: '5.50' },
      { name: 'Flat White', description: 'Bold espresso, silky milk, no shortcuts', price: '5.00' },
      { name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: '4.50' },
      { name: 'Mocha', description: 'Espresso meets Belgian chocolate', price: '6.00' },
      { name: 'Macchiato', description: 'Espresso kissed with foam', price: '4.00' },
    ],
  },
  {
    title: 'Patisserie',
    icon: <Croissant size={20} className="text-cafe-green/70" />,
    items: [
      { name: 'Butter Croissant', description: 'Flaky, golden, impossibly layered', price: '4.50' },
      { name: 'Pain au Chocolat', description: 'Dark chocolate, buttery folds', price: '5.00' },
      { name: 'Almond Croissant', description: 'Twice-baked, frangipane-filled, powdered sugar', price: '5.50' },
      { name: 'Scone du Jour', description: 'Seasonal fruit or classic Earl Grey', price: '4.00' },
      { name: 'Tarte au Citron', description: 'Bright lemon curd, shortbread base', price: '6.00' },
      { name: 'Eclair Vanille', description: 'Madagascar vanilla cream, dark glaze', price: '5.50' },
      { name: 'Kouign-Amann', description: 'Caramelized Breton butter cake', price: '5.00' },
      { name: 'Madeleine', description: 'Shell-shaped, lightly lemon, perfect with tea', price: '3.50' },
    ],
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-cafe-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-cafe-green/60">
            On Our Counter
          </span>
          <h2 className="heading-section text-cafe-charcoal mt-4">The Menu</h2>
          <div className="art-nouveau-divider max-w-xs mx-auto">
            <span className="text-cafe-green/30 text-xs">&#10047;</span>
          </div>
          <p className="font-body text-cafe-charcoal/60 mt-4 max-w-lg mx-auto">
            Every cup and every pastry, crafted with intention. Fresh daily, never compromised.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {menuCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <h3 className="font-display text-2xl text-cafe-charcoal font-light tracking-wide">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-powder-blue-200/60" />
              </div>
              <div className="space-y-5">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-display text-lg text-cafe-charcoal group-hover:text-cafe-green-dark transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-economica text-cafe-charcoal/50 text-sm flex-shrink-0">
                        ${item.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 border-b border-dotted border-cafe-sand/60" />
                    </div>
                    <p className="font-body text-sm text-cafe-charcoal/50 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block glass-green rounded-full px-8 py-3">
            <p className="font-body text-sm text-cafe-charcoal/60">
              All espresso drinks feature Skyview Roastery single-origin beans &bull; Oat &amp; almond milk available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
