import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteMetadata } from '@/data/site-metadata';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteMetadata.domain),
  title: {
    default: `BuiltByByte | Software Development Partner for Startups`,
    template: `%s | BuiltByByte`,
  },
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.domain,
    siteName: siteMetadata.companyName,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMetadata.companyName,
    alternateName: siteMetadata.companyNameAlt,
    url: siteMetadata.domain,
    email: siteMetadata.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteMetadata.email,
      contactType: 'customer service',
      areaServed: ['US', 'GB', 'DE', 'NL', 'FR'],
    },
  };

  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={plusJakarta.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
