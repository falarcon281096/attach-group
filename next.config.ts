const nextConfig = {
  trailingSlash: true,
  basePath: '/attach-group',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
