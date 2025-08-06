/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out because middleware is needed
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
