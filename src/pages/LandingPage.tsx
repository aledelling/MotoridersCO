// src/pages/LandingPage.tsx
/**
 * CAPA: Presentation / Pages
 * USO: Página principal (Landing Page). Contiene las secciones públicas de marketing.
 * NOTA: Este era el antiguo App.tsx.
 */

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import FeaturedProducts from '../components/FeaturedProducts';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-base font-sans text-white selection:bg-green-accent selection:text-black-base">
      <Header />
      <main>
        <Hero />
        <Services />
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

export default LandingPage;