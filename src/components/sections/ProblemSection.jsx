'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { problemHeadline, problemPoints } from '@/data/problem-section';

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 text-center max-w-3xl mx-auto"
        >
          {problemHeadline}
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-white border border-neutral-200 p-6 shadow-sm"
            >
              <p className="font-medium text-neutral-800 leading-snug">{point}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
