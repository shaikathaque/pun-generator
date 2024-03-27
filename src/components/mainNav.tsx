import Link from 'next/link';
import { ThemeToggle } from './themeToggle';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { User } from '@clerk/nextjs/server';

type Props = {
  user?: User;
};
export default async function MainNav({ user }: Props) {
  return (
    <div className="ml-auto hidden flex-row items-center space-x-6 md:flex">
      {user && (
        <Link
          href={`/user/${user.username}/puns`}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <p>My Puns</p>
        </Link>
      )}

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
