import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/Menu';
import { Roastery } from './components/Roastery';
import { Atmosphere } from './components/Atmosphere';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cafe-cream font-body">
      <Navigation />
      <Hero />
      <About />
      <MenuSection />
      <Roastery />
      <Atmosphere />
      <Visit />
      <Footer />
    </div>
  );
}

export default App;
