import Link from 'next/link';
import { ThemeToggle } from './themeToggle';
import { getCurrentUsername } from '@/app/actions';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export default async function MainNav() {
  const username = await getCurrentUsername();
  return (
    <div className="ml-auto flex-row items-center space-x-6 hidden md:flex">
      <Link
        href={`/user/${username}/puns`}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <p>My Puns</p>
      </Link>
      <ThemeToggle />
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
