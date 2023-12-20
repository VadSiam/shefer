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
    ],
  },
}

module.exports = nextConfig
