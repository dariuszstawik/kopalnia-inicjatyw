/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost:3000", "images.ctfassets.net"],
  },
};

const withNextIntl = require("next-intl/plugin")("./i18n.js");

module.exports = withNextIntl(nextConfig);
