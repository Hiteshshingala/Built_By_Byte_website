import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProblemSection from '@/components/sections/ProblemSection';
import ServiceCards from '@/components/sections/ServiceCards';
import ProcessSteps from '@/components/sections/ProcessSteps';
import RiskReversal from '@/components/sections/RiskReversal';
import CaseStudyCards from '@/components/sections/CaseStudyCards';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTABlock from '@/components/sections/CTABlock';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServiceCards
        title="How we solve it"
        subtitle="Seven ways we help startup founders ship faster."
      />
      <ProcessSteps />
      <RiskReversal />
      <CaseStudyCards featuredOnly />
      <Testimonials />
      <FAQ variant="homepage" />
      <CTABlock />
    </>
  );
}
