'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import Container from '@/components/layout/Container';
import { processSteps, processCommitment } from '@/data/process-steps';

const iconMap = { Search, PenTool, Code, Rocket };

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            From idea to launch in 4 steps
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{processCommitment}</p>
        </div>
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          {/* <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" /> */}
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Code;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: i * 0.08,
                  }}
                  className="relative md:flex md:gap-12 md:items-start md:odd:flex-row md:even:flex-row"
                >
                  <div className="flex items-start gap-4 md:w-1/3 md:flex-col md:gap-2">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">
                        Step {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-neutral-900">{step.name}</h3>
                      <p className="text-sm text-neutral-500">{step.duration}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:w-2/3 md:pl-4">
                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                    <ul className="mt-4 space-y-1 text-sm text-neutral-600">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="text-primary">✓</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
