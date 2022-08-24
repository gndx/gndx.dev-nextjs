const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['arepa.s3.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/platzi',
        destination: 'https://platzi.com/conoceme/gndx/precios?utm_campaign=afiliados2022_teacher',
        permanent: true,
      },
      {
        source: '/programacion',
        destination: 'https://platzi.com/conoceme/gndx/programacion?utm_campaign=afiliados2022_teacher',
        permanent: true,
      },
      {
        source: '/platzi-programacion',
        destination: 'https://platzi.com/conoceme/gndx/programacion?utm_campaign=afiliados2022_teacher',
        permanent: true,
      },
    ]
  },
});
