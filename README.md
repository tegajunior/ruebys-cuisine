# Rueby's Cuisine

A Next.js application for Rueby's Cuisine.

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file with the values required by the email API routes:

```env
RESEND_API_KEY=re_your_api_key
NEXT_PUBLIC_SALES_EMAIL=your-email@example.com
```

Keep `.env.local` private. It is excluded from Git and Docker build contexts.

## Docker

Build the production image:

```bash
docker build -t rubys-cuisine .
```

Run the container with the environment variables:

```bash
docker run --name rubys-cuisine \
	--env-file .env.local \
	-p 3000:3000 \
	rubys-cuisine
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Stop and remove the container:

```bash
docker stop rubys-cuisine
docker rm rubys-cuisine
```

The Dockerfile uses a multi-stage build and runs the optimized Next.js standalone server on port `3000`.

## Production Build Without Docker

```bash
npm run build
npm start
```

## Useful Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm start         # Start the production server
npm run lint      # Run linting
```
