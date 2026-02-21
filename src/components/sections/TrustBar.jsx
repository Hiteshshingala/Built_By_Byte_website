'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { clientLogos, trustBarCopy } from '@/data/client-logos';

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-neutral-200">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-neutral-600 mb-8"
        >
          {trustBarCopy}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70"
        >
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-8 text-neutral-500 font-semibold text-lg"
            >
              <span>{client.name}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
