/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/media',
              outputPath: 'static/media',
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      });
    }

    return config;
  },
};

module.exports = nextConfig;
