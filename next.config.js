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
        destination: 'https://unete.platzi.com/afiliados-expert/?utm_source=partnerships&utm_medium=organic&utm_campaign=referidos2021_oscar_barajas/',
        permanent: true,
      },
    ]
  },
});
