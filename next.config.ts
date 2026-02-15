import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b.zmtcdn.com",
        pathname: "/data/**",
      },
    ],
  },
};

export default nextConfig;
