import { motion } from 'motion/react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Route 66 Logo Polo',
    category: "Men's Apparel",
    price: 45,
    originalPrice: 60,
    memberPrice: 40,
    rating: 5,
    reviews: 12,
    colors: ['Navy', 'White', 'Orange'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Best Seller',
    badgeColor: '#FF6B35',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600',
  },
  {
    id: 2,
    name: 'Presidential Medallion Display Case',
    category: 'Collectibles',
    price: 89,
    originalPrice: null,
    memberPrice: null,
    rating: 5,
    reviews: 8,
    colors: null,
    sizes: null,
    badge: 'Member Exclusive',
    badgeColor: '#10B981',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600',
  },
  {
    id: 3,
    name: 'Trail Logo Golf Balls (Dozen)',
    category: 'Golf Equipment',
    price: 35,
    originalPrice: null,
    memberPrice: null,
    rating: 5,
    reviews: 24,
    colors: null,
    sizes: null,
    badge: 'New',
    badgeColor: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600',
  },
  {
    id: 4,
    name: 'Vintage Route 66 Hat',
    category: 'Accessories',
    price: 28,
    originalPrice: null,
    memberPrice: null,
    rating: 4,
    reviews: 16,
    colors: ['Black', 'Tan'],
    sizes: null,
    badge: null,
    badgeColor: null,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600',
  },
  {
    id: 5,
    name: 'Sticks on 66 Insulated Tumbler',
    category: 'Drinkware',
    price: 32,
    originalPrice: null,
    memberPrice: null,
    rating: 5,
    reviews: 31,
    colors: null,
    sizes: null,
    badge: 'Best Seller',
    badgeColor: '#FF6B35',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600',
  },
  {
    id: 6,
    name: 'Trail Map Towel',
    category: 'Golf Accessories',
    price: 25,
    originalPrice: null,
    memberPrice: null,
    rating: 5,
    reviews: 9,
    colors: null,
    sizes: null,
    badge: null,
    badgeColor: null,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600',
  },
  {
    id: 7,
    name: "Women's Quarter-Zip Pullover",
    category: "Women's Apparel",
    price: 55,
    originalPrice: null,
    memberPrice: null,
    rating: 5,
    reviews: 14,
    colors: ['Gray', 'Navy', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    badge: 'New',
    badgeColor: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600',
  },
  {
    id: 8,
    name: 'Leather Golf Bag Tag',
    category: 'Accessories',
    price: 18,
    originalPrice: null,
    memberPrice: null,
    rating: 5,
    reviews: 22,
    colors: null,
    sizes: null,
    badge: null,
    badgeColor: null,
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600',
  },
];

const filters = ['All Products', 'Apparel', 'Golf', 'Collectibles', 'Sale'];

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [savedProducts, setSavedProducts] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedProducts((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '14px',
              letterSpacing: '3px',
              color: '#FF6B35',
              textTransform: 'uppercase',
              marginBottom: '12px',
              fontWeight: '700',
            }}
          >
            Trail Essentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: '#0F172A' }}
          >
            Featured Products
          </motion.h2>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeFilter === filter ? '#FF6B35' : 'white',
                color: activeFilter === filter ? 'white' : '#64748B',
                border: `2px solid ${activeFilter === filter ? '#FF6B35' : '#E5E7EB'}`,
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}
              className="bg-white rounded-xl overflow-hidden group cursor-pointer"
              style={{ border: '1px solid #E5E7EB' }}
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden bg-gray-50">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <Badge
                    className="absolute top-4 left-4"
                    style={{
                      backgroundColor: product.badgeColor,
                      color: 'white',
                    }}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Save Button */}
                <button
                  onClick={() => toggleSave(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      savedProducts.includes(product.id)
                        ? 'fill-[#DC2626] text-[#DC2626]'
                        : 'text-[#64748B]'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: '13px', color: '#64748B' }}>({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ fontSize: '24px', fontWeight: '700', color: '#FF6B35' }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: '18px',
                          color: '#94A3B8',
                          textDecoration: 'line-through',
                        }}
                      >
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.memberPrice && (
                    <p style={{ fontSize: '14px', color: '#10B981', fontWeight: '600' }}>
                      Member: ${product.memberPrice}
                    </p>
                  )}
                </div>

                {/* Variants */}
                {product.colors && (
                  <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>
                    {product.colors.length} colors available
                  </p>
                )}

                {/* Add to Cart */}
                <Button
                  className="w-full"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
