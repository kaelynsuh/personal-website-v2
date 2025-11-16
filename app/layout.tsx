import type { Metadata } from 'next';
import { Indie_Flower, Libre_Baskerville, Raleway } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-serif',
  display: 'swap',
});

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwritten',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kaelyn Suh | Software Engineer',
  description:
    'Software engineer portfolio highlighting experience, projects, and ways to get in touch with Kaelyn Suh.',
  metadataBase: new URL('https://kaelyn.dev'),
  openGraph: {
    title: 'Kaelyn Suh | Software Engineer',
    description:
      'Explore Kaelyn Suh’s experience, selected projects, and contact information.',
    url: 'https://kaelyn.dev',
    siteName: 'Kaelyn Suh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaelyn Suh | Software Engineer',
    description:
      'Explore Kaelyn Suh’s experience, selected projects, and contact information.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${raleway.variable} ${libreBaskerville.variable} ${indieFlower.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
