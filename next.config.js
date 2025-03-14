/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-s3-bucket',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
