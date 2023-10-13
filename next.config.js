/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['robohash.org'], // Add your domain here
      },
      async rewrites() {
        return [
          {
            source: "/:path*",
            destination: "http://localhost:4000/:path*",
          }
        ]
      }
};

module.exports = nextConfig
