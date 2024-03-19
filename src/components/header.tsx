import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { getCurrentUsername } from '@/app/actions';
import { ThemeToggle } from './themeToggle';

export default async function Header() {
  const username = await getCurrentUsername();
  return (
    <nav className="flex h-16 items-center border-b-2 px-5">
      {/* Top left branding */}
      <Link href="/" className="flex flex-row items-center gap-3">
        <Image alt="app logo" src={'/app_logo.jpg'} width={40} height={40} />
        <h1 className="font-semibold">Pun Generator</h1>
      </Link>

      {/* Top right user nav */}
      <div className="ml-auto flex flex-row items-center lg:space-x-6">
        <Link
          href={`/user/${username}/puns`}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <p>My Puns</p>
        </Link>
        <ThemeToggle />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
