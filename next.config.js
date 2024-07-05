/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wiesbdispmispsuqfjne.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/products_images/public/**',
      },
      {
        protocol: 'http',
        hostname: '178.128.30.157',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
