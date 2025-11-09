import { motion } from 'motion/react';
import { MapPin, DollarSign } from 'lucide-react';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const dishes = [
  {
    id: 1,
    name: '72oz Steak Challenge',
    restaurant: 'Big Texan Steak Ranch',
    location: 'Amarillo, TX',
    price: 75,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
    badge: 'Trail Legend',
    badgeColor: '#DC2626',
  },
  {
    id: 2,
    name: 'Green Chile Cheeseburger',
    restaurant: 'Multiple NM Locations',
    location: 'New Mexico',
    price: 12,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    badge: 'Regional Favorite',
    badgeColor: '#10B981',
  },
  {
    id: 3,
    name: "Lou's Legendary Pancakes",
    restaurant: "Lou Mitchell's",
    location: 'Chicago, IL',
    price: 14,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    badge: 'Since 1923',
    badgeColor: '#F59E0B',
  },
  {
    id: 4,
    name: 'Route 66 Burger',
    restaurant: 'Various Locations',
    location: 'Along the Trail',
    price: 15,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800',
    badge: 'Trail Classic',
    badgeColor: '#FF6B35',
  },
  {
    id: 5,
    name: 'Cadillac Margarita',
    restaurant: 'Southwest Locations',
    location: 'AZ & NM',
    price: 16,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
    badge: 'Best Cocktail',
    badgeColor: '#8B5CF6',
  },
  {
    id: 6,
    name: 'Mile-High Pie',
    restaurant: 'Oklahoma Diners',
    location: 'Oklahoma',
    price: 8,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
    badge: 'Instagram Famous',
    badgeColor: '#EC4899',
  },
];

export function SignatureDishes() {
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
            Legendary Eats On The Trail
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}
          >
            Can't Miss Dishes
          </motion.h2>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                />

                {/* Badge */}
                <Badge
                  className="absolute top-4 right-4"
                  style={{
                    backgroundColor: dish.badgeColor,
                    color: 'white',
                  }}
                >
                  {dish.badge}
                </Badge>

                {/* Dish Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="text-white"
                    style={{ fontSize: '20px', fontWeight: '700', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                  >
                    {dish.name}
                  </h3>
                </div>

                {/* Hover CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div
                    className="px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm"
                    style={{ fontSize: '14px', fontWeight: '600', color: '#0F172A' }}
                  >
                    View Restaurant
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p style={{ fontSize: '15px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>
                      {dish.restaurant}
                    </p>
                    <div className="flex items-center gap-2 text-[#64748B]">
                      <MapPin className="w-3 h-3" />
                      <p style={{ fontSize: '13px' }}>{dish.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1" style={{ color: '#FF6B35' }}>
                    <DollarSign className="w-4 h-4" />
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>{dish.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
