import React from 'react';
import { ProductCategory, ProductFilters as Filters } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Select } from '@/components/ui/select';

interface ProductFiltersProps {
    filters: Filters;
    categories: ProductCategory[];
    onFilterChange: (filters: Filters) => void;
}

export function ProductFilters({ filters, categories, onFilterChange }: ProductFiltersProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleCategoryChange = (category: ProductCategory | 'All') => {
        onFilterChange({ ...filters, category });
    };

    const handleSortChange = (sortBy: Filters['sortBy']) => {
        onFilterChange({ ...filters, sortBy });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                <div className="w-full md:w-auto">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 border-pink-200 text-pink-600"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="category-filters"
                    >
                        <Filter className="h-4 w-4" />
                        Filter
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <label htmlFor="sort" className="text-sm text-pink-600">
                        Sort by:
                    </label>
                    <Select
                        id="sort"
                        value={filters.sortBy}
                        onValueChange={handleSortChange}
                        className="min-w-[200px]"
                        options={[
                            { value: 'featured', label: 'Featured' },
                            { value: 'newest', label: 'Newest' },
                            { value: 'price-low', label: 'Price: Low to High' },
                            { value: 'price-high', label: 'Price: High to Low' },
                        ]}
                    />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="category-filters"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="rounded-xl bg-pink-50 p-4">
                            <h3 className="mb-3 font-medium text-pink-700">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    key="all"
                                    variant={filters.category === 'All' ? 'default' : 'outline'}
                                    className={
                                        filters.category === 'All'
                                            ? 'bg-pink-500 text-white hover:bg-pink-600'
                                            : 'border-pink-200 text-pink-600 hover:bg-pink-100'
                                    }
                                    onClick={() => handleCategoryChange('All')}
                                >
                                    All
                                </Button>
                                {categories.map(cat => (
                                    <Button
                                        key={cat}
                                        variant={filters.category === cat ? 'default' : 'outline'}
                                        className={
                                            filters.category === cat
                                                ? 'bg-pink-500 text-white hover:bg-pink-600'
                                                : 'border-pink-200 text-pink-600 hover:bg-pink-100'
                                        }
                                        onClick={() => handleCategoryChange(cat)}
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
