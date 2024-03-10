import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

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
          'min-h-screen w-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
