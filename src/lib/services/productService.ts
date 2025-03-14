import { Product, ProductCategory, ProductFilters } from '@/types/product';

const products: Product[] = [
    {
        id: 1,
        name: 'Star Hair Clique - Aqua Blue',
        price: '$19.99',
        image: 'https://i.kickstarter.com/assets/047/956/098/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
        colors: ['#5CE1E6', '#FF80AB', '#FFD700', '#9C27B0'],
        category: 'Stars',
        featured: true,
        bestseller: true,
        slug: 'star-hair-clique',
        description: 'Our signature star-shaped magnetic hair clip in a stunning aqua blue finish.',
        specifications: {
            material: 'High-grade plastic with neodymium magnets',
            dimensions: '2.5" x 2.5"',
            weight: '0.8 oz'
        },
        stock: 50
    },
    // ... other products
];

export const productService = {
    async getProducts(filters?: ProductFilters) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        let filteredProducts = [...products];

        if (filters?.category && filters.category !== 'All') {
            filteredProducts = filteredProducts.filter(p => p.category === filters.category);
        }

        if (filters?.sortBy) {
            filteredProducts.sort((a, b) => {
                switch (filters.sortBy) {
                    case 'newest':
                        return a.new ? -1 : b.new ? 1 : 0;
                    case 'price-low':
                        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
                    case 'price-high':
                        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
                    case 'featured':
                    default:
                        return a.featured ? -1 : b.featured ? 1 : 0;
                }
            });
        }

        return {
            products: filteredProducts,
            total: filteredProducts.length,
            currentPage: 1,
            totalPages: 1
        };
    },

    async getProductBySlug(slug: string) {
        await new Promise(resolve => setTimeout(resolve, 300));
        const product = products.find(p => p.slug === slug);
        if (!product) throw new Error('Product not found');
        return product;
    },

    getCategories(): ProductCategory[] {
        return ['Stars', 'Hearts', 'Bows', 'Classic', 'Nature', 'Celestial'];
    }
};
