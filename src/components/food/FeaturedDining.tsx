import { motion } from 'motion/react';
import { MapPin, Star, Clock, DollarSign, ExternalLink, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

const restaurants = [
  {
    id: 1,
    name: 'The Big Texan Steak Ranch',
    category: 'BBQ & Grill',
    cuisine: 'American, Steakhouse',
    city: 'Amarillo',
    state: 'Texas',
    distance: '0.5 mi from Course #42',
    rating: 4.8,
    reviews: 1250,
    price: 3,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
    hours: 'Open 6 AM - 10 PM',
    isOpen: true,
    trailExclusive: true,
    highlights: ['Famous for 72oz steak challenge', 'Trail member 10% discount', 'Live western entertainment'],
  },
  {
    id: 2,
    name: "Lou Mitchell's",
    category: 'Classic Diner',
    cuisine: 'American, Breakfast',
    city: 'Chicago',
    state: 'Illinois',
    distance: '1.2 mi from Course #1',
    rating: 4.9,
    reviews: 2100,
    price: 2,
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800',
    hours: 'Open 5:30 AM - 3 PM',
    isOpen: true,
    trailExclusive: true,
    highlights: ['Serving since 1923', 'Famous homemade donuts', 'Outdoor patio seating'],
  },
  {
    id: 3,
    name: 'The Range Café',
    category: 'Southwest Cuisine',
    cuisine: 'New Mexican, American',
    city: 'Albuquerque',
    state: 'New Mexico',
    distance: '0.3 mi from Course #35',
    rating: 4.7,
    reviews: 890,
    price: 2,
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800',
    hours: 'Open 7 AM - 9 PM',
    isOpen: true,
    trailExclusive: false,
    highlights: ['Green chile everything', 'Large portions', 'Family-friendly atmosphere'],
  },
];

export function FeaturedDining() {
  const [savedRestaurants, setSavedRestaurants] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedRestaurants((prev) =>
      prev.includes(id) ? prev.filter((rId) => rId !== id) : [...prev, id]
    );
  };

  const getPriceSymbol = (price: number) => '$'.repeat(price);

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F5F1E8' }}>
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
            Iconic Stops Along The Way
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}
          >
            Featured Trail Dining
          </motion.h2>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, idx) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: '1px solid #E5E7EB' }}
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <ImageWithFallback
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                  }}
                />

                {/* Category Badge */}
                <Badge
                  className="absolute top-4 left-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: '#0F172A',
                  }}
                >
                  {restaurant.category}
                </Badge>

                {/* Trail Exclusive Badge */}
                {restaurant.trailExclusive && (
                  <Badge
                    className="absolute top-4 right-4"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                      color: 'white',
                    }}
                  >
                    Trail Exclusive
                  </Badge>
                )}

                {/* Save Button */}
                <button
                  onClick={() => toggleSave(restaurant.id)}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      savedRestaurants.includes(restaurant.id)
                        ? 'fill-[#DC2626] text-[#DC2626]'
                        : 'text-[#64748B]'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-3">
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0F172A', marginBottom: '4px' }}>
                    {restaurant.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>{restaurant.cuisine}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-[#64748B]" />
                    <p style={{ fontSize: '14px', color: '#64748B' }}>
                      {restaurant.city}, {restaurant.state}
                    </p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#FF6B35', marginTop: '4px' }}>{restaurant.distance}</p>
                </div>

                {/* Rating & Price */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(restaurant.rating)
                              ? 'fill-[#FFD700] text-[#FFD700]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>{restaurant.rating}</span>
                    <span style={{ fontSize: '13px', color: '#64748B' }}>({restaurant.reviews})</span>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>
                    {getPriceSymbol(restaurant.price)}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {restaurant.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#10B981' }}
                      />
                      <p style={{ fontSize: '13px', color: '#334155' }}>{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#64748B]" />
                    <span style={{ fontSize: '13px', color: '#64748B' }}>{restaurant.hours}</span>
                  </div>
                  {restaurant.isOpen && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span style={{ fontSize: '13px', color: '#10B981', fontWeight: '600' }}>Open now</span>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    style={{ borderColor: '#FF6B35', color: '#FF6B35' }}
                  >
                    View Menu
                  </Button>
                  <Button variant="ghost" className="flex-1 text-[#64748B]">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
