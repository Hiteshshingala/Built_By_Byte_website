'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

export default function Testimonials({ maxItems = 3 }) {
  const items = testimonials.filter((t) => t.featured).slice(0, maxItems);

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What founders say about us
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real people, real outcomes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full flex flex-col">
                <p className="text-neutral-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{t.flagEmoji}</span>
                  <div>
                    <p className="font-semibold text-neutral-900">{t.author}</p>
                    <p className="text-sm text-neutral-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
