import { motion } from 'motion/react';
import { UtensilsCrossed, Flag, Beef, Wine, Coffee, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const categories = [
  {
    id: 1,
    title: 'Classic Diners',
    icon: UtensilsCrossed,
    description: 'Route 66 roadside legends serving comfort food since the golden age',
    count: '32 locations',
    specialties: 'Burgers, Shakes, Pie',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600',
    gradient: 'linear-gradient(135deg, rgba(220, 38, 38, 0.8) 0%, rgba(220, 38, 38, 0.6) 100%)',
    color: '#DC2626',
  },
  {
    id: 2,
    title: 'Clubhouse Restaurants',
    icon: Flag,
    description: 'Premium dining at Trail golf courses, perfect for the 19th hole',
    count: '48 locations',
    specialties: 'American, Sports Bar',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0.6) 100%)',
    color: '#10B981',
  },
  {
    id: 3,
    title: 'BBQ & Steakhouses',
    icon: Beef,
    description: 'Authentic regional BBQ and premium steaks along the Trail',
    count: '28 locations',
    specialties: 'Texas BBQ, KC Ribs',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
    gradient: 'linear-gradient(135deg, rgba(180, 83, 9, 0.8) 0%, rgba(180, 83, 9, 0.6) 100%)',
    color: '#B45309',
  },
  {
    id: 4,
    title: 'Fine Dining',
    icon: Wine,
    description: 'Upscale restaurants for celebrating your golf achievements',
    count: '15 locations',
    specialties: 'Steakhouse, Contemporary',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.6) 100%)',
    color: '#8B5CF6',
  },
  {
    id: 5,
    title: 'Quick Stops',
    icon: Coffee,
    description: 'Fast casual and grab-and-go for golfers on the move',
    count: '45 locations',
    specialties: 'Sandwiches, Coffee, Snacks',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
    gradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(255, 107, 53, 0.6) 100%)',
    color: '#FF6B35',
  },
];

export function DiningCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
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
            }}
          >
            Dining For Every Taste
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}
          >
            Find Your Flavor
          </motion.h2>
        </div>

        {/* Category Grid */}
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-[200px] overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: category.gradient }}
                  />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                    style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}
                  >
                    {category.description}
                  </p>

                  {/* Count */}
                  <div
                    className="mb-2"
                    style={{ fontSize: '14px', fontWeight: '600', color: category.color }}
                  >
                    {category.count}
                  </div>

                  {/* Specialties */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p style={{ fontSize: '12px', color: '#64748B' }}>
                      <span style={{ fontWeight: '600' }}>Specialties: </span>
                      {category.specialties}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-auto hover:bg-transparent"
                    style={{ color: category.color }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>
                      {category.id === 1 && 'Find Diners'}
                      {category.id === 2 && 'View Menus'}
                      {category.id === 3 && 'Find BBQ'}
                      {category.id === 4 && 'View Options'}
                      {category.id === 5 && 'Find Food'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
