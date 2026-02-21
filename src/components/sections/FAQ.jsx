'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Accordion from '@/components/ui/Accordion';
import { faq } from '@/data/faq';

export default function FAQ({ variant = 'homepage' }) {
  const items = faq[variant] || faq.homepage;

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Everything you need to know before we start.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
