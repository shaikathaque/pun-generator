import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header>
      <div className="flex flex-row">
        {/* Top left branding */}
        <div>
          <h1>Pun Generator</h1>
        </div>

        {/* Top right user nav */}
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
