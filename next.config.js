/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  reactStrictMode: true,
  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" },
  //     "/ap-grid-layout": { page: "/ap-grid-layout" },
  //   };
  // },
  // assetPrefix: !debug
  //   ? "https://anotherplanet-io.github.io/Next-React-Components/"
  //   : "",
};

module.exports = nextConfig;
