/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
   typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'igwithrichard3.wistia.com',
      },
    ],
  },
  productionBrowserSourceMaps: false,
}

export default nextConfig
