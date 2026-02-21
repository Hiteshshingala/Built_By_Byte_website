'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudyCards({ featuredOnly = true }) {
  const items = featuredOnly ? caseStudies.filter((c) => c.featured) : caseStudies;

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Founders like you who shipped and scaled
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real projects, real metrics, real outcomes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card hover className="h-full flex flex-col">
                <span className="text-2xl" aria-hidden>{study.flagEmoji}</span>
                <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                  {study.title}
                </h3>
                <p className="text-sm text-neutral-500">{study.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.results.slice(0, 3).map((r) => (
                    <div key={r.label} className="text-sm">
                      <span className="font-semibold text-primary">{r.metric}</span>
                      <span className="text-neutral-500"> {r.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1">
                  {study.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies#${study.id}`}
                  className="mt-4 text-primary font-semibold hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Read case study →
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="text-primary font-semibold hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            View all case studies →
          </Link>
        </div>
      </Container>
    </section>
  );
}
