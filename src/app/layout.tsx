import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

import { cn } from '@/lib/utils';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/themeProvider';

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen w-screen bg-background font-sans antialiased',
            inter.variable,
          )}
        >
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
