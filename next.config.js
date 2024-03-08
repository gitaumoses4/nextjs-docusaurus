/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites(){
    return [
      {
        source: '/docs/:path*',
        destination: '/docs/index.html',
      },
    ]
  }
};
