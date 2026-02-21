import Hero from '@/components/sections/Hero';
import ServiceCards from '@/components/sections/ServiceCards';
import FAQ from '@/components/sections/FAQ';
import CTABlock from '@/components/sections/CTABlock';
import Container from '@/components/layout/Container';

export const metadata = {
  title: 'Software Development Services for Startups',
  description:
    'From MVPs to SaaS platforms — BuiltByByte builds software for startups at agency quality and startup-friendly speed. See our services.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="Software development services that ship."
        subheadline="From custom websites to full SaaS products — we help startup founders go from idea to production."
        primaryCta="Get a Project Estimate"
        primaryCtaHref="/contact"
        secondaryCta="See Case Studies"
        secondaryCtaHref="/case-studies"
        subtext="We'll respond within 24 hours."
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <p className="text-center text-lg text-neutral-600 max-w-2xl mx-auto">
            Each service is designed around founder needs: clear scope, transparent pricing, and code you own from day one.
          </p>
        </Container>
      </section>
      <ServiceCards title={null} subtitle={null} />
      <FAQ variant="services" />
      <CTABlock
        headline="Ready to get a project estimate?"
        ctaText="Get a Project Estimate"
        ctaHref="/contact"
        subtext="Tell us your timeline and budget. We'll respond within 24 hours."
      />
    </>
  );
}
