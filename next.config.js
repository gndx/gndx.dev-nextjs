const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['arepa.s3.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/platzi',
        destination: 'https://platzi.com/aniversario/?utm_source=partnerships&utm_medium=organic&utm_campaign=afiliados_vip_gndx',
        permanent: true,
      },
    ]
  },
});
