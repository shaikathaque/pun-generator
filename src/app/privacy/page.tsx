import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pun Generator app',
  description:
    'Privacy policy for the Pun Generator mobile app for iOS and Android.',
};

const CONTACT_EMAIL = 'support@hawkapps.io';
const EFFECTIVE_DATE = '15 November 2026';

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 px-6 py-12 leading-7">
      <h1 className="text-3xl font-bold">Privacy Policy: Pun Generator app</h1>
      <p className="text-muted-foreground">Effective {EFFECTIVE_DATE}</p>

      <p>
        This policy covers the Pun Generator mobile app for iPhone and Android
        (&quot;the app&quot;), published by HawkApps, LLC (&quot;we&quot;).
      </p>

      <h2 className="text-xl font-semibold">What we collect</h2>
      <p>
        Nothing. The app has no accounts, no ads, no analytics and no tracking.
        Every pun is built into the app, and nothing you do in the app is sent
        to us or to anyone else.
      </p>

      <h2 className="text-xl font-semibold">
        What the app uses on your device
      </h2>
      <p>
        The app plays a short sound when you reveal an answer. It does not use
        your location, contacts, photos, camera or microphone.
      </p>

      <h2 className="text-xl font-semibold">App updates</h2>
      <p>
        To receive small updates (for example new puns), the app downloads them
        from Expo, our update provider. Like any web request, this exposes your
        device&apos;s IP address and basic device details (operating system and
        app version) to Expo while it serves the download. We do not use these
        to identify you.
      </p>

      <h2 className="text-xl font-semibold">Children</h2>
      <p>
        The app collects no personal information from anyone, including
        children.
      </p>

      <h2 className="text-xl font-semibold">Changes</h2>
      <p>
        If this policy changes, we will update this page and its effective date.
      </p>

      <h2 className="text-xl font-semibold">Contact</h2>
      <p>
        Questions:{' '}
        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </main>
  );
}
