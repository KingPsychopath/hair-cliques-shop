export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    colors: string[];
    category: ProductCategory;
    featured?: boolean;
    bestseller?: boolean;
    new?: boolean;
    slug: string;
    description?: string;
    specifications?: {
        material?: string;
        dimensions?: string;
        weight?: string;
    };
    stock: number;
}

export type ProductCategory = 'Stars' | 'Hearts' | 'Bows' | 'Classic' | 'Nature' | 'Celestial';

export interface ProductFilters {
    category: ProductCategory | 'All';
    sortBy: 'featured' | 'newest' | 'price-low' | 'price-high';
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    currentPage: number;
    totalPages: number;
}
