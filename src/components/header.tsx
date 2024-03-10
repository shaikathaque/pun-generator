import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="flex h-16 items-center border-b-2 px-5">
      {/* Top left branding */}
      <Link href="/" className="flex flex-row items-center gap-3">
        <Image alt="app logo" src={'/app_logo.jpg'} width={40} height={40} />
        <h1 className="font-semibold">Pun Generator</h1>
      </Link>

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
