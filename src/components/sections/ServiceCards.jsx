'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Cloud,
  Layout,
  ShoppingCart,
  Compass,
  Users,
  Rocket,
} from 'lucide-react';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';

const iconMap = {
  Globe,
  Cloud,
  Layout,
  ShoppingCart,
  Compass,
  Users,
  Rocket,
};

export default function ServiceCards({ maxItems, title = 'How we solve it', subtitle }) {
  const items = maxItems ? services.slice(0, maxItems) : services;

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {title && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
            )}
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card hover className="h-full flex flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-snug">
                    {service.headline}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="mt-4 text-primary font-semibold hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    Learn more →
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {!maxItems && (
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-primary font-semibold hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              View all services →
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
