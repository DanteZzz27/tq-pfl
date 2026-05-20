import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok (and similar tunnels) to load dev assets in development
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*.ngrok.io",
    "*.ngrok.app",
    "*.ngrok.dev",
  ],
};

export default nextConfig;
