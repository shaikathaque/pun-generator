This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses the new App Router.


## Local Quickstart

Install dependencies

```bash
npm install
```

Start up local database (requires docker)

```bash
docker-compose up
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.


## Deployment

Changes in the main branch are automatically deployred to Vercel at https://pun-generator-mu.vercel.app/


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

### TODO:
- Observability (OpenTelemetry)
- Analytics (useReportWebVitals / Vercel Analytics / Google Analytics)
- Add Sentry to server actions

