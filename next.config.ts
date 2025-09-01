import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ✅ permite imagens do Cloudinary
  },
};

export default nextConfig;
