import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@opentelemetry/instrumentation-winston",
    "@opentelemetry/winston-transport",
  ],
};

export default nextConfig;
