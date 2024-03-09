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

### TODO:
- Observability (OpenTelemetry)
- Analytics (useReportWebVitals / Vercel Analytics / Google Analytics)
- Add Sentry to server actions

