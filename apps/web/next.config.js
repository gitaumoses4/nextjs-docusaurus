/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites(){
    return [
      {
        source: '/docs',
        destination: '/docs/index.html',
      },
      {
        source: '/docs/:path*',
        destination: '/docs/index.html',
      },
    ]
  }
};
