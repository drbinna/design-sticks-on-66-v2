import { motion } from 'motion/react';
import { Search, UtensilsCrossed, Building2, Tag } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';

export function FoodHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisine, setCuisine] = useState('');

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '600px',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      }}
    >
      {/* Vintage diner pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="diner-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="#FF6B35" strokeWidth="2" />
              <circle cx="50" cy="50" r="10" fill="#FF6B35" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diner-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 flex flex-col items-center justify-center text-center">
        {/* Pre-title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div
            className="inline-block px-4 py-2 rounded-full"
            style={{ backgroundColor: 'rgba(255, 107, 53, 0.1)', border: '1px solid #FF6B35' }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '4px',
                color: '#FF6B35',
                textTransform: 'uppercase',
              }}
            >
              Dine Along The Mother Road
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-white mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: '700',
            textShadow: '0 4px 24px rgba(255, 107, 53, 0.4)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Food & Beverage on Route 66
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#94A3B8] mb-12 max-w-[700px]"
          style={{ fontSize: '18px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From classic diners to championship clubhouses
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: UtensilsCrossed, text: '100+ Restaurants', color: '#FF6B35' },
            { icon: Building2, text: 'Historic Diners', color: '#FFD700' },
            { icon: Tag, text: 'Trail Member Discounts', color: '#10B981' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <item.icon className="w-6 h-6" style={{ color: item.color }} />
              <span className="text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="w-full max-w-[800px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-full shadow-2xl p-2 grid grid-cols-1 sm:grid-cols-12 gap-2">
            {/* Search Input */}
            <div className="sm:col-span-6 flex items-center px-4 py-2">
              <Search className="w-5 h-5 text-[#64748B] mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search restaurants or city..."
                className="flex-1 outline-none text-[15px] bg-transparent min-w-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Cuisine Filter */}
            <div className="sm:col-span-4 flex items-center px-2">
              <Select value={cuisine} onValueChange={setCuisine}>
                <SelectTrigger className="border-0 shadow-none h-auto focus:ring-0">
                  <SelectValue placeholder="Cuisine Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="american">American</SelectItem>
                  <SelectItem value="bbq">BBQ & Grill</SelectItem>
                  <SelectItem value="diner">Classic Diner</SelectItem>
                  <SelectItem value="fine">Fine Dining</SelectItem>
                  <SelectItem value="southwest">Southwest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="sm:col-span-2">
              <Button
                className="w-full h-full rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
