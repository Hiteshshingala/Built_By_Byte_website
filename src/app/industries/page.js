import {
  Truck,
  Ship,
  Plane,
  Shield,
  ShoppingCart,
  Heart,
  GraduationCap,
  Lock,
} from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import CTABlock from '@/components/sections/CTABlock';
import { industries } from '@/data/industries';

const iconMap = {
  Truck,
  Ship,
  Plane,
  Shield,
  ShoppingCart,
  Heart,
  GraduationCap,
  Lock,
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        headline="We've built software across 8 industries."
        subheadline="From automotive and maritime to fintech and healthcare — we understand your domain."
        primaryCta="Discuss Your Industry"
        primaryCtaHref="/contact"
        secondaryCta="See Case Studies"
        secondaryCtaHref="/case-studies"
        subtext="Tell us your vertical. We'll share relevant experience."
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Shield;
              return (
                <Card key={ind.id} hover className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-neutral-900">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    {ind.description}
                  </p>
                  <p className="mt-4 text-sm text-primary font-medium">
                    Example: {ind.exampleProject}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
      <CTABlock
        headline="Building in one of these industries?"
        ctaText="Book a Free Intro Call"
        ctaHref="/contact"
      />
    </>
  );
}
