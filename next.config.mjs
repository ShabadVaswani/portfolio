import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  async rewrites() {
    const hiringAgentOrigin =
      process.env.HIRING_AGENT_ORIGIN ?? "https://hiring-agent-lilac.vercel.app";

    return [
      {
        source: "/hiring-agent",
        destination: `${hiringAgentOrigin}/hiring-agent`,
      },
      {
        source: "/hiring-agent/:path*",
        destination: `${hiringAgentOrigin}/hiring-agent/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
