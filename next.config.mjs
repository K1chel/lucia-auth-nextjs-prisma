/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatar.vercel.sh"],
    loader: "default",
    path: "/_next/image",
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
