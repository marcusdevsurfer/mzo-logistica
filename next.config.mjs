/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  allowedDevOrigins: ["192.168.1.79"],
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
