import { motion } from 'motion/react';
import { Lock, Star, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const exclusiveProducts = [
  {
    id: 1,
    name: 'Gold Medallion Collection Jacket',
    description: 'Commemorative jacket for Gold Medallion achievers',
    price: 149,
    memberOnly: true,
    badge: 'Limited Edition',
    badgeColor: '#FFD700',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    features: ['Premium bomber design', 'Embroidered medallion', 'Limited quantity'],
  },
  {
    id: 2,
    name: 'Presidential Series Golf Glove',
    description: 'Premium Cabretta leather with Presidential seal embossing',
    price: 42,
    memberPrice: 35,
    memberOnly: false,
    badge: 'Exclusive',
    badgeColor: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1530447920184-b88c8872?w=800',
    features: ['Cabretta leather', 'Presidential seal', 'Performance grip'],
  },
  {
    id: 3,
    name: 'Complete Trail Challenge Kit',
    description: 'Includes hat, polo, ball markers, bag tag',
    price: 125,
    originalPrice: 170,
    memberOnly: true,
    badge: 'Bundle Deal',
    badgeColor: '#10B981',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
    features: ['Save $45', 'Premium bundle', 'Trail essentials'],
  },
];

export function TrailExclusives() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
    >
      {/* Route 66 shield pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="shield-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 40 10 L 55 15 L 55 35 L 40 45 L 25 35 L 25 15 Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <text x="40" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                66
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shield-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
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
            Members-Only Merchandise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}
          >
            Trail Member Exclusives
          </motion.h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {exclusiveProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(255,107,53,0.2)' }}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)',
                  }}
                />

                {/* Badge */}
                <Badge
                  className="absolute top-4 right-4"
                  style={{
                    backgroundColor: product.badgeColor,
                    color: product.badgeColor === '#FFD700' ? '#0F172A' : 'white',
                    fontWeight: '700',
                  }}
                >
                  {product.badge}
                </Badge>

                {/* Member Lock */}
                {product.memberOnly && (
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white mb-2" style={{ fontSize: '22px', fontWeight: '700' }}>
                  {product.name}
                </h3>
                <p className="text-white/70 mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                      <span className="text-white/80" style={{ fontSize: '13px' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-white" style={{ fontSize: '28px', fontWeight: '700' }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-white/50"
                        style={{
                          fontSize: '18px',
                          textDecoration: 'line-through',
                        }}
                      >
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.memberPrice && (
                    <p className="text-[#10B981] mt-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Member: ${product.memberPrice}
                    </p>
                  )}
                  {product.memberOnly && (
                    <p className="text-[#FF6B35] mt-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Members Only
                    </p>
                  )}
                </div>

                {/* CTA */}
                {product.memberOnly ? (
                  <Button
                    variant="outline"
                    className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Unlock with Membership
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="h-14 px-8"
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            Not a member? Join Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
