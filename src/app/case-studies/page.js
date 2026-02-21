import Hero from '@/components/sections/Hero';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import CTABlock from '@/components/sections/CTABlock';
import { caseStudies } from '@/data/case-studies';

export const metadata = {
  title: 'Startup Development Success Stories',
  description:
    'See how startup founders shipped and scaled with BuiltByByte. Real projects, real metrics, real outcomes.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        headline="Real projects. Real outcomes."
        subheadline="See how we've helped founders ship products from idea to production."
        primaryCta="Start a Similar Project"
        primaryCtaHref="/contact"
        secondaryCta="View All Case Studies"
        secondaryCtaHref="#case-studies"
        subtext="Tell us your timeline and budget."
      />
      <section id="case-studies" className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-20">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                id={study.id}
                className="scroll-mt-24"
              >
                <Card className="overflow-hidden">
                  <div className="border-b border-neutral-200 p-6 md:p-8">
                    <span className="text-3xl" aria-hidden>{study.flagEmoji}</span>
                    <h2 className="mt-3 text-3xl font-bold text-neutral-900">
                      {study.title}
                    </h2>
                    <p className="text-lg text-neutral-500">{study.subtitle}</p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {study.industry} · {study.timeline}
                    </p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Challenge
                      </h3>
                      <p className="mt-2 text-neutral-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Approach
                      </h3>
                      <p className="mt-2 text-neutral-600 leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        Implementation
                      </h3>
                      <p className="mt-2 text-neutral-600 leading-relaxed">
                        {study.implementation}
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {study.results.map((r) => (
                        <div
                          key={r.label}
                          className="rounded-lg bg-neutral-50 p-4 text-center"
                        >
                          <p className="text-2xl font-bold text-primary">
                            {r.metric}
                          </p>
                          <p className="text-sm text-neutral-600">{r.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg bg-primary-50 p-6">
                      <p className="text-neutral-700 italic">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <p className="mt-3 font-semibold text-neutral-900">
                        — {study.testimonial.author}, {study.testimonial.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTABlock
        headline="Want results like these?"
        ctaText="Start a Similar Project"
        ctaHref="/contact"
      />
    </>
  );
}
