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

# Software Packaging

## Packaging Overview

This project uses the Node.js/npm ecosystem with Next.js. Software packaging and dependency management are managed using `package.json` and `package-lock.json`.

The application was packaged and verified as a production-ready Next.js standalone application.

## 1. Dependency Management

Project dependencies are defined in `package.json`, while `package-lock.json` records the dependency tree for reproducible installations.

Dependencies were installed using:

    npm ci

Dependencies were reviewed and updated using:

    npm outdated
    npm update

The application was successfully rebuilt after the dependency updates.

## 2. Semantic Versioning

The project was initially versioned as `0.1.0`.

The version was updated to:

    1.0.0

The project follows Semantic Versioning (SemVer):

    MAJOR.MINOR.PATCH

- MAJOR - incompatible or breaking changes
- MINOR - new backward-compatible functionality
- PATCH - backward-compatible bug fixes

Version `1.0.0` represents the first stable release of the packaged application.

The version is recorded in both `package.json` and `package-lock.json`.

## 3. Environment Configuration

Environment-specific configuration is kept outside the source code.

The application uses the following environment variables:

    NEXT_PUBLIC_SALES_EMAIL=
    RESEND_API_KEY=
    RESEND_API_KEY_CHIDIEBEREUZOMADEV=

A `.env.example` template is included in the repository to document the required variables without exposing secret values.

The actual `.env.local` file remains excluded from Git using:

    .env*

This prevents sensitive credentials such as API keys from being committed to the repository.

## 4. Production Packaging

Next.js standalone output is enabled in `next.config.ts`:

    output: 'standalone'

The production package was generated using:

    npm run build

The build completed successfully using Next.js 16.3.5, including TypeScript validation and generation of all application pages.

The resulting standalone production package is located in:

    .next/standalone/

The production server is:

    .next/standalone/server.js

Static assets required by the standalone application were copied into the package using:

    cp -r public .next/standalone/
    cp -r .next/static .next/standalone/.next/

## 5. Verification of the Packaged Application

The standalone production server was started independently of the development server using:

    cd .next/standalone
    PORT=3001 node server.js

The application successfully started at:

    http://localhost:3001

The packaged application was opened and verified using Firefox in the Ubuntu VirtualBox environment.

This confirmed that the standalone production artifact could be executed successfully.

## 6. Security Audit

A dependency security audit was performed using:

    npm audit

The initial audit identified one high-severity vulnerability in Nodemailer.

Investigation showed that Nodemailer was not used anywhere in the application source code. The application had switched to Resend for email functionality.

The unused packages were removed using:

    npm uninstall nodemailer @types/nodemailer

The security audit was then repeated:

    npm audit

Final result:

    found 0 vulnerabilities

A final clean dependency installation was also performed:

    npm ci

The final installation completed successfully with zero vulnerabilities.

The application was rebuilt after the security cleanup, and the production build completed successfully.

## 7. Build Verification

The final production build was executed using:

    npm run build

The build completed successfully with Next.js 16.3.5.

The application successfully generated its routes, including:

    /
    /cart
    /checkout
    /contact
    /menu
    /api/contact
    /api/sendEmail

The build also successfully generated the application's sitemap using `next-sitemap`.

## 8. Artifact Distribution

The application is also distributed as a Docker container artifact.

Container images have been published to:

- Docker Hub: `tegajunior/ruebys-cuisine:latest`
- GitHub Container Registry: `ghcr.io/tegajunior/ruebys-cuisine:latest`

The containerized application has also been deployed to an AWS EC2 instance.

These container registries provide centralized storage and distribution of the packaged application artifact.

## 9. Packaging Workflow

The completed packaging workflow is:

    Source Code
         |
         v
    package.json + package-lock.json
         |
         v
    npm ci
         |
         v
    npm update
         |
         v
    npm audit
         |
         v
    npm run build
         |
         v
    .next/standalone/
         |
         v
    Production Verification
         |
         v
    Docker Image
         |
         +------------------+
         |                  |
         v                  v
    Docker Hub            GHCR
         |                  |
         +---------+--------+
                   |
                   v
                AWS EC2

## 10. Evidence and Verification Logs

### Dependency Installation

Command:

    npm ci

Final result:

    found 0 vulnerabilities

### Production Build

Command:

    npm run build

Result:

    Next.js 16.3.5
    Compiled successfully
    Finished TypeScript
    Generating static pages (9/9)

### Security Audit

Command:

    npm audit

Final result:

    found 0 vulnerabilities

### Packaged Application

The standalone production application was launched using:

    PORT=3001 node server.js

The application was successfully verified in Firefox at:

    http://localhost:3001

### Version

    1.0.0

### Environment Configuration

`.env.example` documents the required environment variables while `.env.local` remains excluded from version control.

## 11. Conclusion

The Ruebys Cuisine application successfully demonstrates software packaging using the Node.js/npm ecosystem.

The project includes dependency management, reproducible installation, semantic versioning, environment configuration, production artifact generation, security auditing, application verification, and container artifact distribution.

The final security audit reported zero vulnerabilities, and the production standalone application was successfully executed and verified in the Ubuntu VirtualBox environment.
