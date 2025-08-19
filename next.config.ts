import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com',
        pathname: '/**',
      },
      // add any other S3 buckets or CDNs here
    ],
  },
}

export default nextConfig
