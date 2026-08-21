/** @type {import('next').NextConfig} */
const nextConfig = {
  // Los registros maestros (SOURCES.md, CLAIMS.md...) son paginas muy grandes.
  // Se generan en build y se sirven estaticas, sin revalidacion.
  agentRules: false,
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  images: { unoptimized: true },
};

export default nextConfig;
