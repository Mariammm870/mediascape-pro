import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';

const Index = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onBookDemo={() => setCalendlyOpen(true)} />
      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
      
      <HeroSection onBookDemo={() => setCalendlyOpen(true)} />
      <ProblemSolutionSection />
      <FeaturesSection />
      <UseCasesSection />
      <CTASection onBookDemo={() => setCalendlyOpen(true)} />
      <Footer />
    </div>
  );
};

export default Index;
