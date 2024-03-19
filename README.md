## Pun Generator
Pun Generator is a web app built using React, Next.js, TypeScript, and PostgreSQL, hosted on Vercel. It uses the Next.js App Router.

The latest changes from the main branch are auto deployed to https://pungeneratorapp.com

It is still in development, so features may be incomplete. Head over to the [Roadmap](#roadmap) section to check out upcoming features.

## Running Locally

### Pre-requisites
Before running the app locally, you will need the following set up:
1. Install Docker on your machine to run docker-compose.
1. Set up a `.env` file. See `.env.sample` to see what environment variables are required.
1. Add your Postgres url to the `.env` file.
1. Set up a `clerk` development instance and add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` to the `.env` file to set up authentication. Instructions to set up clerk authentication: https://clerk.com/docs/quickstarts/setup-clerk

### Run Development Server
Install dependencies

```bash
npm install
```

Start up local PostgreSQL database (requires docker)

```bash
docker-compose up
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.


## Prisma

When a schema change is made, the following must be done:

1. Generate new prisma client in draft mode to preview the migration
```bash
npx prisma migrate dev --name name-of-migration --create-only
```

2. Save and apply the migration. This will also generate an updated prisma client
```bash
npx prisma migrate dev
```

In production, the `vercel-build` script takes care of the above steps.
`"vercel-build": "prisma generate && prisma migrate deploy && next build"`

To evolve schema without downtime, use the expand and contract pattern:
https://www.prisma.io/docs/orm/prisma-migrate/workflows/customizing-migrations#example-use-the-expand-and-contract-pattern-to-evolve-the-schema-without-downtime

## Roadmap:

### Priority
- Allow users to delete their own puns.
- Sorting and filtering by: random, top, newest.
- Pagination
- Profanity Filter
- Refactor components to optimize dynamic and static builds.
- Finish writing playwright tests.
- Finish writing Unit tests.

### Nice to have
- Observability (OpenTelemetry)
- Analytics (useReportWebVitals / Vercel Analytics / Google Analytics)
- Add Sentry to server actions

