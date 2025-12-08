'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MenuSidebar from '@/components/MenuSidebar';
import CartSidebar from '@/components/CartSidebar';
import GridOverlay from '@/components/GridOverlay';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesSection from '@/components/ServicesSection';
import VideoLightboxSection from '@/components/VideoLightboxSection';
import SignatureWorkSection from '@/components/SignatureWorkSection';
import JournalSection from '@/components/JournalSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NavigationFooter from '@/components/NavigationFooter';
import MainFooter from '@/components/MainFooter';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="relative">
      <GridOverlay />
      <Header onMenuToggle={() => setIsMenuOpen(true)} onCartToggle={() => setIsCartOpen(true)} />
      <MenuSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <VideoLightboxSection />
      <SignatureWorkSection />
      <JournalSection />
      <TestimonialsCarousel />
      <NavigationFooter />
      <MainFooter />
      <BackToTop />
    </main>
  );
}
