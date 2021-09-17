const path = require('path');
const compose = require('next-compose')
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = compose([
  [withBundleAnalyzer, {
    images: {
      domains: ['arepa.s3.amazonaws.com'],
    },
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    },
    experimental: { esmExternals: true },
  }],
  [withPWA, {
    pwa: {
      dest: 'public',
      runtimeCaching
    },
    webpack: (config) => {
      config.resolve.modules.push(path.resolve('./'));
      return config;
    }
  }],
  {
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      })

      config.resolve.modules.push(path.resolve('./'));

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }
      return config
    },
  }
]);