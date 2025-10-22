import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para exportación estática
  output: 'export',
  trailingSlash: true,
  
  // BasePath para el servidor
  basePath: '/attach-group',
  
  // Configuración de imágenes para exportación estática
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  
  // Deshabilitar server-side features para static export
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
