import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { getCurrentUser } from '@/app/actions';
import { ThemeToggle } from './themeToggle';
import { Button } from './ui/button';
import MainNav from './mainNav';
import MobileNav from './mobileNav';

export default async function Header() {
  const user = await getCurrentUser();
  return (
    <nav className="flex h-16 items-center border-b-2 px-5">
      {/* Top left branding */}
      <Link href="/" className="flex flex-row items-center gap-3">
        <Image alt="app logo" src={'/app_logo.png'} width={40} height={40} />
        <h1 className="font-semibold">Pun Generator</h1>
      </Link>

      {/* Top right user nav */}
      <MainNav user={user} />
      <MobileNav username={user?.username} />
    </nav>
  );
}
