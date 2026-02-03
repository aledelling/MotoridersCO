import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FeaturedProducts from './components/FeaturedProducts';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-base font-sans text-white selection:bg-green-accent selection:text-black-base">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* Replaced ImageEditor with Gallery */}
        <Gallery />
        <FeaturedProducts />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;