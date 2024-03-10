import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex h-16 items-center border-b-2 px-5">
      {/* Top left branding */}
      <div>
        <Link href="/">
          <h1>Pun Generator</h1>
        </Link>
      </div>

      {/* Top right user nav */}
      <div className="ml-auto items-center">
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
