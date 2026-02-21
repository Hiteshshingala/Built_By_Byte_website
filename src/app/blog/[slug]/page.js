import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <Link
          href="/blog"
          className="text-sm text-primary hover:text-primary-dark font-medium"
        >
          ← Back to blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-neutral-900">
          {post.title}
        </h1>
        <p className="mt-4 text-neutral-500">
          {post.author} · {post.date} · {post.readTime}
        </p>
        <div className="mt-10 prose prose-neutral max-w-none">
          {post.body ? (
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          ) : (
            <p className="text-neutral-600">
              This article is coming soon. In the meantime, get in touch to
              discuss your project.
            </p>
          )}
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Button as={Link} href={post.cta.href}>
            {post.cta.label}
          </Button>
        </div>
      </Container>
    </article>
  );
}
