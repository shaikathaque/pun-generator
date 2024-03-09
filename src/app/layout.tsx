import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import Header from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Pun Generator',
  description: "The Internet's Favorite Puns!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
