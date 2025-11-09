import { motion } from 'motion/react';
import { Check, Star, Trophy } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const packages = [
  {
    id: 1,
    name: 'Weekend Warrior',
    badge: 'BEST VALUE',
    badgeColor: '#FF6B35',
    price: 199,
    rounds: 5,
    savings: 50,
    features: [
      'Any 5 courses',
      'Valid 60 days',
      'Cart included',
      'Flexible booking',
    ],
    icon: Star,
  },
  {
    id: 2,
    name: 'Silver Trail Pass',
    badge: 'MOST POPULAR',
    badgeColor: '#FFD700',
    price: 1299,
    rounds: 33,
    savings: 500,
    features: [
      'Play all 33 for Silver Medallion',
      'Valid 12 months',
      'Cart included',
      'Priority booking',
      'Merchandise discount',
    ],
    icon: Trophy,
    highlighted: true,
  },
  {
    id: 3,
    name: 'Gold Trail Champion',
    badge: 'LEGENDARY',
    badgeColor: '#FFD700',
    price: 2499,
    rounds: 66,
    savings: 1000,
    features: [
      'Complete the full trail',
      'Gold Medallion + Certificate',
      'Valid 18 months',
      'Premium cart included',
      'VIP course access',
      '20% pro shop discount',
      'Commemorative photo package',
    ],
    icon: Trophy,
  },
];

export function SpecialPackages() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      {/* Route 66 Road Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="road-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="50" y1="0" x2="50" y2="100" stroke="#0F172A" strokeWidth="40" />
              <line x1="50" y1="10" x2="50" y2="30" stroke="#FFD700" strokeWidth="4" strokeDasharray="5,15" />
              <line x1="50" y1="50" x2="50" y2="70" stroke="#FFD700" strokeWidth="4" strokeDasharray="5,15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#road-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
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
            Save More, Play More
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '48px', fontWeight: '700' }}
          >
            Trail Packages & Specials
          </motion.h2>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  border: pkg.highlighted ? '3px solid #FF6B35' : 'none',
                  transform: pkg.highlighted ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Badge */}
                <div 
                  className="py-2 text-center text-white text-xs tracking-wider"
                  style={{ 
                    background: `linear-gradient(135deg, ${pkg.badgeColor} 0%, ${pkg.badgeColor}dd 100%)`,
                  }}
                >
                  {pkg.badge}
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#FFF7ED' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#FF6B35' }} />
                  </div>

                  {/* Name */}
                  <h3 
                    className="text-center mb-2"
                    style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A' }}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-1">
                    <span style={{ fontSize: '48px', fontWeight: '700', color: '#FF6B35' }}>
                      ${pkg.price}
                    </span>
                  </div>
                  <p 
                    className="text-center mb-2"
                    style={{ fontSize: '18px', color: '#64748B' }}
                  >
                    {pkg.rounds} rounds
                  </p>
                  <p 
                    className="text-center mb-6"
                    style={{ fontSize: '14px', color: '#10B981', fontWeight: '600' }}
                  >
                    Save ${pkg.savings}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: '14px', color: '#334155' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className="w-full"
                    style={{
                      background: pkg.highlighted 
                        ? 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)'
                        : 'transparent',
                      border: pkg.highlighted ? 'none' : '2px solid #FF6B35',
                      color: pkg.highlighted ? 'white' : '#FF6B35',
                    }}
                  >
                    Purchase Package
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
