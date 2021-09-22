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
  redirects: [
    { 
      "source": "/platzi",
      "destination": "https://platzi.com/l/GH49zIgS/", 
      "permanent": true
    }
  ]
});