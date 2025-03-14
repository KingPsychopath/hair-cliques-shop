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
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
