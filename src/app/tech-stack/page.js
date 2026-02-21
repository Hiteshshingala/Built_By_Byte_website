import Hero from '@/components/sections/Hero';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import CTABlock from '@/components/sections/CTABlock';
import { techStack } from '@/data/tech-stack';

export const metadata = {
  title: 'Tech Stack',
  description:
    'BuiltByByte builds with React, Next.js, Node.js, NestJS, and modern cloud tools. See our full technology stack.',
};

export default function TechStackPage() {
  return (
    <>
      <Hero
        headline="Modern stack. Production-proven."
        subheadline="We build with the tools US and European startups already use — React, Next.js, Node, Stripe, AWS, Vercel."
        primaryCta="Discuss Your Stack"
        primaryCtaHref="/contact"
        secondaryCta="See Case Studies"
        secondaryCtaHref="/case-studies"
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-12">
            {techStack.categories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {category.name}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {category.technologies.map((tech) => (
                    <Card key={tech.name} className="flex flex-col">
                      <h3 className="font-semibold text-neutral-900">{tech.name}</h3>
                      <p className="mt-1 text-sm text-primary font-medium">
                        {tech.proficiency}
                      </p>
                      <p className="mt-2 text-sm text-neutral-600 leading-snug">
                        {tech.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTABlock
        headline="Need help choosing a tech stack?"
        ctaText="Get a Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
