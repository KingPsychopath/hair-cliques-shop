import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientBody from './ClientBody';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Hair Cliques 2.0 | Magnetic Hair Clips for All Hair Types',
    description:
        'Beautiful magnetic hair clips designed for low tension styling that works for all hair textures. Shop star, bow, and heart-shaped magnetic hair clips.',
    keywords: [
        'hair clips',
        'magnetic hair clips',
        'hair accessories',
        'hair styling',
        'low tension styling',
    ],
    icons: {
        icon: [
            {
                url: '/favicon.svg',
                type: 'image/svg+xml',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans`}>
                <ClientBody>{children}</ClientBody>
            </body>
        </html>
    );
}
