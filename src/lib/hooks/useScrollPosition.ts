import { useState, useEffect } from 'react';

export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            // Calculate normalized scroll position (0 to 1)
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const normalized = Math.min(window.scrollY / height, 1);
            setScrollY(normalized);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initialize scroll position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}
