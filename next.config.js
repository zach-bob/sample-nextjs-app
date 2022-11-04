/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // for Stylelint
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },

}

module.exports = nextConfig
