import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    distDir: process.env.NODE_ENV === 'production' ? 'build' : '.next',
    // Disable ESLint during development but keep it enabled for CI
    eslint: {
        // Only run ESLint when in CI environment
        ignoreDuringBuilds: !process.env.CI,
    },
    images: {
        domains: ['source.unsplash.com', 'images.unsplash.com', 'web-assets.same.dev'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'web-assets.same.dev',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
