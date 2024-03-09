'use client'; // Error components must be Client Components

/**
 * Referenced from: https://nextjs.org/docs/app/building-your-application/routing/error-handling
 * global-error.tsx is only enabled in production. In development, our error overlay will show instead.
 */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Global Error Page</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
