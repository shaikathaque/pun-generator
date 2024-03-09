'use client'; // Error components must be Client Components

import { useEffect } from 'react';

// References from: https://nextjs.org/docs/app/building-your-application/routing/error-handling

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service like Sentry
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Pun Error Page</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
