'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function CTABlock({
  headline = "Ready to ship your product? Let's start with a conversation.",
  ctaText = 'Book a Free 20-Min Intro Call',
  ctaHref = '/contact',
  subtext = 'No pitch deck required. Just tell us what you\'re building.',
}) {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {headline}
          </h2>
          <Button
            as={Link}
            href={ctaHref}
            variant="secondary"
            size="lg"
            className="mt-8 bg-white text-primary hover:bg-neutral-100 border-0"
          >
            {ctaText}
          </Button>
          <p className="mt-4 text-primary-100 text-sm">{subtext}</p>
        </motion.div>
      </Container>
    </section>
  );
}
