import Hero from '@/components/sections/Hero';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import CTABlock from '@/components/sections/CTABlock';
import TrustStats from '@/components/sections/TrustStats';
import { aboutContent } from '@/data/about';
import {
  Zap,
  Key,
  MessageSquare,
  Puzzle,
  Eye,
  Linkedin,
  Github,
} from 'lucide-react';

const valueIcons = {
  Zap,
  Key,
  MessageSquare,
  Puzzle,
  Eye,
};

export const metadata = {
  title: 'About BuiltByByte',
  description:
    'BuiltByByte is your startup development partner. 8+ years building production software. Meet the team.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline={aboutContent.headline}
        subheadline={aboutContent.subheadline}
        primaryCta="Book a Free Intro Call"
        primaryCtaHref="/contact"
        secondaryCta="See Our Work"
        secondaryCtaHref="/case-studies"
      />
      <TrustStats />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-neutral-900">Our story</h2>
            {aboutContent.story.map((para, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed">
                {para}
              </p>
            ))}
            <p className="text-xl font-semibold text-neutral-900">
              {aboutContent.mission}
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24 bg-neutral-100">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Our values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((v) => {
              const Icon = valueIcons[v.icon] || Eye;
              return (
                <Card key={v.title} className="flex flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-neutral-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 text-sm leading-snug">
                    {v.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Founder</h2>
            <div className="mt-8 flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-3xl font-bold text-primary">
                {aboutContent.founder.name.charAt(0)}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                {aboutContent.founder.name}
              </h3>
              <p className="text-primary font-medium">
                {aboutContent.founder.role}
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {aboutContent.founder.bio}
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href={aboutContent.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={aboutContent.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24 bg-neutral-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              How we communicate
            </h2>
            <p className="mt-4 text-neutral-600">
              {aboutContent.englishStatement}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {aboutContent.communicationTools.map((tool) => (
                <span
                  key={tool.name}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTABlock />
    </>
  );
}
