
import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Financing from '@/components/Financing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Lazy load the map component for better performance
const MapSection = lazy(() => import('@/components/MapSection'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full">
        <Hero />
        <Services />
        <About />
        <Financing />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando mapa...</div>}>
          <MapSection />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
