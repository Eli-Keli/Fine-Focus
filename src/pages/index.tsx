import React from 'react';

// Components
import Navbar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;