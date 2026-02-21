import Link from 'next/link';
import { footer } from '@/data/navigation';
import { siteMetadata } from '@/data/site-metadata';
import Container from './Container';
import { Linkedin, Github, Twitter } from 'lucide-react';

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">
              BuiltByByte
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              {footer.codeOwnership}
            </p>
            <p className="mt-2 text-sm text-neutral-400">{footer.timezone}</p>
            <p className="mt-1 text-sm text-neutral-400">{footer.responseTime}</p>
            <div className="mt-4 flex gap-3">
              {Object.entries(footer.socialLinks).map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon || !url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-neutral-400 hover:text-primary hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={key}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">{footer.bottomBar.copyright}</p>
          <div className="flex gap-6">
            {footer.bottomBar.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
