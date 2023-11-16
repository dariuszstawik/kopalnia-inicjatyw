/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("/i18n.js");

// const nextConfig = {
//   images: {
//     domains: ["localhost:3000", "images.ctfassets.net"],
//   },
// };

// module.exports = withNextIntl(nextConfig);

module.exports = withNextIntl({
  images: {
    domains: ["localhost:3000", "images.ctfassets.net"],
  },
});
