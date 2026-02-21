'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function Hero({
  headline = "Your startup idea, production-ready in weeks.",
  subheadline = "Clean code you own. Transparent pricing. No surprises.",
  primaryCta = "Book a Free 20-Min Intro Call",
  primaryCtaHref = "/contact",
  secondaryCta = "See Our Latest Case Study",
  secondaryCtaHref = "/case-studies",
  subtext = "No pitch deck required. Just tell us what you're building.",
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-hero-gradient)] py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary-200),transparent)] opacity-60" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button as={Link} href={primaryCtaHref} size="lg">
              {primaryCta}
            </Button>
            <Button as={Link} href={secondaryCtaHref} variant="secondary" size="lg">
              {secondaryCta}
            </Button>
          </div>
          <p className="mt-4 text-sm text-neutral-500">{subtext}</p>
        </motion.div>
      </Container>
    </section>
  );
}
