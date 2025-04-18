/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['instagram.com', 'facebook.com'], // Добавьте домены для изображений
    unoptimized: true,
  },
}

module.exports = nextConfig 