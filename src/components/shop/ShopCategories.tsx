import { motion } from 'motion/react';
import { Shirt, Circle, Award, Coffee, ShoppingBag, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const categories = [
  {
    id: 1,
    title: 'Apparel',
    icon: Shirt,
    count: '24 items',
    items: 'Polos, Hats, Jackets',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
    gradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(220, 38, 38, 0.7) 100%)',
  },
  {
    id: 2,
    title: 'Golf Gear',
    icon: Circle,
    count: '18 items',
    items: 'Balls, Gloves, Accessories',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(5, 150, 105, 0.7) 100%)',
  },
  {
    id: 3,
    title: 'Collectibles',
    icon: Award,
    count: '15 items',
    items: 'Medals, Pins, Patches',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9) 0%, rgba(217, 119, 6, 0.7) 100%)',
  },
  {
    id: 4,
    title: 'Drinkware',
    icon: Coffee,
    count: '12 items',
    items: 'Mugs, Tumblers, Flasks',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(124, 58, 237, 0.7) 100%)',
  },
  {
    id: 5,
    title: 'Accessories',
    icon: ShoppingBag,
    count: '20 items',
    items: 'Towels, Tags, Markers',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.7) 100%)',
  },
];

export function ShopCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F5F1E8' }}>
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
            Gear Up For The Trail
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: '#0F172A' }}
          >
            Shop by Category
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                {/* Image Section */}
                <div className="relative h-[200px] overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: category.gradient }}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.9 }}
                  />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3
                    className="mb-2"
                    style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A' }}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="mb-3"
                    style={{ fontSize: '14px', color: '#FF6B35', fontWeight: '600' }}
                  >
                    {category.count}
                  </p>
                  <p
                    className="mb-4 pb-4 border-b border-gray-200"
                    style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}
                  >
                    {category.items}
                  </p>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-between group/btn">
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#FF6B35',
                      }}
                    >
                      Shop {category.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#FF6B35] transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
