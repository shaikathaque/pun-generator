'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { User } from '@clerk/nextjs/server';
import { ThemeToggle } from './themeToggle';

type Props = {
  username?: User['username'];
};
export default function MobileNav({ username }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-auto md:ml-0">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="mt-10 flex flex-col items-center gap-10">
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ThemeToggle />

            {username && (
              <Link
                href={`/user/${username}/puns`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <p>My Puns</p>
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
