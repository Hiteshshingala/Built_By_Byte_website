import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <Container>
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-neutral-900">
            Page not found
          </h2>
          <p className="mt-4 text-neutral-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as={Link} href="/">
              Go home
            </Button>
            <Button as={Link} href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
