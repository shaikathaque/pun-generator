'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service like Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h2>Pun Error Page</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
