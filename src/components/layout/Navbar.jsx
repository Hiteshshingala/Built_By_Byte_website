'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import Container from './Container';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-18">
          <Link
            href="/"
            className="text-xl font-bold text-neutral-900 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label="BuiltByByte home"
          >
            BuiltByByte
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <Button as={Link} href={navigation.ctaButton.href} size="sm">
              {navigation.ctaButton.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden border-t border-neutral-200 bg-white ${open ? 'block' : 'hidden'}`}
      >
        <Container className="py-4 space-y-1">
          {navigation.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary-50 rounded-lg px-3 -mx-3 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button as={Link} href={navigation.ctaButton.href} className="w-full justify-center" onClick={() => setOpen(false)}>
              {navigation.ctaButton.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
