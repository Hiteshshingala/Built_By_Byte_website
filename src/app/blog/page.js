import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { blogPosts } from '@/data/blog-posts';

export const metadata = {
  title: 'Startup Development Insights',
  description:
    'BuiltByByte blog: how to build MVPs, SaaS development cost, hiring vs outsourcing for startup founders.',
};

export default function BlogPage() {
  return (
    <>
      <Hero
        headline="Startup development insights"
        subheadline="Practical guides for founders: MVP timelines, hiring vs outsourcing, and real cost breakdowns."
        primaryCta="Book a Free Intro Call"
        primaryCtaHref="/contact"
        secondaryCta="See Case Studies"
        secondaryCtaHref="/case-studies"
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} hover className="flex flex-col">
                <span className="text-sm font-medium text-primary">
                  {post.category}
                </span>
                <h2 className="mt-2 text-xl font-bold text-neutral-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-neutral-600 text-sm leading-snug">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-neutral-500">
                  {post.date} · {post.readTime}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-primary font-semibold hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Read article →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
