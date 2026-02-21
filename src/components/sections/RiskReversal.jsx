'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Container from '@/components/layout/Container';
import { riskReversalItems } from '@/data/risk-reversal';

export default function RiskReversal() {
  return (
    <section className="py-16 md:py-24 bg-primary-50 border-y border-primary-100">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 text-center"
        >
          Zero risk to get started.
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {riskReversalItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-white border border-primary-100 p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-snug">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
