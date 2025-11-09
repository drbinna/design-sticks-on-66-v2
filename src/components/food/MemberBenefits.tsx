import { motion } from 'motion/react';
import { Check, Tag, Calendar, Gift } from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  '10-20% off at 60+ partner restaurants',
  'Priority seating at popular spots',
  'Exclusive menu items',
  'Birthday month special offers',
  'Earn points toward free meals',
];

const offers = [
  {
    id: 1,
    title: 'Happy Hour Special',
    description: 'Half-price appetizers 3-6 PM at course restaurants',
    valid: 'Valid Mon-Fri',
    badge: 'Most Popular',
    icon: Tag,
  },
  {
    id: 2,
    title: '19th Hole Deal',
    description: 'Free dessert with any entrée after your round',
    valid: 'All participating locations',
    badge: 'Member Exclusive',
    icon: Gift,
  },
  {
    id: 3,
    title: 'Road Tripper Combo',
    description: 'Book 3+ nights stay, get $50 dining credit',
    valid: 'Resort restaurants only',
    badge: 'Limited Time',
    icon: Calendar,
  },
];

export function MemberBenefits() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
    >
      {/* Vintage menu pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="menu-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="10" y="10" width="40" height="40" fill="none" stroke="white" strokeWidth="2" />
              <line x1="15" y1="20" x2="45" y2="20" stroke="white" strokeWidth="1" />
              <line x1="15" y1="30" x2="45" y2="30" stroke="white" strokeWidth="1" />
              <line x1="15" y1="40" x2="45" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#menu-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Discount Program */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white mb-6"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700' }}
            >
              Trail Member Dining Rewards
            </h2>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Partner Logos */}
            <div className="mb-8">
              <p className="text-white/70 mb-4" style={{ fontSize: '14px', fontWeight: '600' }}>
                Featured Partner Restaurants:
              </p>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="aspect-square rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="text-white/50 text-xs">Logo</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                }}
              >
                Join Trail Membership
              </Button>
              <Button variant="outline" className="flex-1 border-white text-white hover:bg-white/10">
                View All Partners
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Special Offers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {offers.map((offer, idx) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl relative overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: 'rgba(255, 107, 53, 0.2)',
                      color: '#FF6B35',
                      fontWeight: '700',
                    }}
                  >
                    {offer.badge}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(255, 107, 53, 0.2)' }}
                  >
                    <Icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
                    {offer.title}
                  </h3>
                  <p className="text-white/70 mb-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {offer.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <p className="text-[#10B981]" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {offer.valid}
                    </p>
                  </div>
                  <p className="text-white/50 mt-2" style={{ fontSize: '12px' }}>
                    Show Trail card to redeem
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
