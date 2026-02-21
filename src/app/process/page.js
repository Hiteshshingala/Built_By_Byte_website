import Hero from '@/components/sections/Hero';
import ProcessSteps from '@/components/sections/ProcessSteps';
import FAQ from '@/components/sections/FAQ';
import CTABlock from '@/components/sections/CTABlock';

export const metadata = {
  title: 'Our Development Process',
  description:
    'Transparent, agile, founder-friendly. See exactly how BuiltByByte builds software — from discovery to launch in 4 steps.',
};

export default function ProcessPage() {
  return (
    <>
      <Hero
        headline="Transparent process. No surprises."
        subheadline="From discovery to launch in 4 clear steps. Weekly demos, shared project board, milestone billing."
        primaryCta="Let's Get Started"
        primaryCtaHref="/contact"
        secondaryCta="Book a Free Intro Call"
        secondaryCtaHref="/contact"
        subtext="We'll walk you through next steps."
      />
      <ProcessSteps />
      <FAQ variant="process" />
      <CTABlock
        headline="Ready to start your project?"
        ctaText="Let's Get Started"
        ctaHref="/contact"
      />
    </>
  );
}
