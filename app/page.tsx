'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MenuSidebar from '@/components/MenuSidebar';
import CartSidebar from '@/components/CartSidebar';
import GridOverlay from '@/components/GridOverlay';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import VideoLightboxSection from '@/components/VideoLightboxSection';
import SignatureWorkSection from '@/components/SignatureWorkSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQSection from '@/components/FAQSection';
import JournalSection from '@/components/JournalSection';
import NewsletterSection from '@/components/NewsletterSection';
import CTASection from '@/components/CTASection';
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
      <ProcessSection />
      <VideoLightboxSection />
      <SignatureWorkSection />
      <TestimonialsCarousel />
      <FAQSection />
      <JournalSection />
      <NewsletterSection />
      <CTASection />
      <NavigationFooter />
      <MainFooter />
      <BackToTop />
    </main>
  );
}
