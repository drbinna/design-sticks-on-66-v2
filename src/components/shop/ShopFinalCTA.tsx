import { motion } from 'motion/react';
import { ShoppingBag, Lock, CreditCard } from 'lucide-react';
import { Button } from '../ui/button';

export function ShopFinalCTA() {
  const trustBadges = [
    { icon: CreditCard, text: 'Secure Checkout' },
    { icon: ShoppingBag, text: 'Licensed Merchandise' },
    { icon: Lock, text: '100% Satisfaction' },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
      }}
    >
      {/* Shopping bag pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="bag-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="30" y="20" width="40" height="50" rx="4" fill="none" stroke="white" strokeWidth="2" />
              <path d="M 35 20 Q 35 10 50 10 Q 65 10 65 20" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="42" cy="35" r="3" fill="white" />
              <circle cx="58" cy="35" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bag-pattern)" />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: '700',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            Gear Up for the Trail
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white mb-12 max-w-[700px] mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.6' }}
          >
            Show your Trail pride with official merchandise
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="h-14 px-8 bg-white hover:bg-gray-100"
              style={{
                color: '#FF6B35',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Browse All Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-white text-white hover:bg-white/10"
              style={{ fontSize: '16px', fontWeight: '700' }}
            >
              <Lock className="w-5 h-5 mr-2" />
              View Member Exclusives
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className="text-white"
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    {badge.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
