import { motion } from 'motion/react';
import { Search, Truck, Tag, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

export function ShopHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const quickLinks = [
    {
      icon: Truck,
      text: 'Free Shipping $75+',
      color: '#10B981',
    },
    {
      icon: Tag,
      text: 'Member Discounts',
      color: '#FF6B35',
    },
    {
      icon: Check,
      text: '100% Satisfaction',
      color: '#3B82F6',
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: '500px',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      }}
    >
      {/* Vintage Route 66 memorabilia pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="shop-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="white" strokeWidth="2" />
              <text x="20" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">66</text>
              <path d="M 60 10 L 80 10 L 80 30 L 60 30 Z" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="70" cy="70" r="8" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shop-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 h-full relative z-10">
        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div
              className="inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.3)',
              }}
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
                Official Trail Merchandise
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-4"
            style={{
              fontSize: '64px',
              fontWeight: '700',
              textShadow: '0 4px 24px rgba(255, 107, 53, 0.4)',
            }}
          >
            Trail Shop
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            style={{
              fontSize: '18px',
              color: '#94A3B8',
            }}
          >
            Premium golf gear and Route 66 collectibles
          </motion.p>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-8"
          >
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <span
                    className="text-white"
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    {link.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-[700px]"
          >
            <div
              className="flex items-center gap-2 bg-white rounded-full overflow-hidden"
              style={{
                height: '60px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <div className="flex items-center gap-3 flex-1 px-6">
                <Search className="w-5 h-5 text-[#64748B]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none bg-transparent"
                  style={{
                    fontSize: '16px',
                    color: '#0F172A',
                  }}
                />
              </div>
              <Button
                className="h-full rounded-none rounded-r-full px-8"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
