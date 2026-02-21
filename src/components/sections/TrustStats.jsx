'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { trustStats } from '@/data/trust-stats';

export default function TrustStats() {
  return (
    <section className="py-12 bg-neutral-100 border-y border-neutral-200">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
