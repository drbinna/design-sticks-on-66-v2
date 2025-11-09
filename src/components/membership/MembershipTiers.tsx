import { motion } from 'motion/react';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

export default function MembershipTiers() {
  const tiers = [
    {
      name: 'Classic Route',
      icon: Star,
      price: '$299',
      period: 'per year',
      description: 'Perfect for the weekend warrior exploring the trail',
      features: [
        'Access to all 66 courses',
        '15% off green fees',
        'Free course guide & map',
        'Member newsletter',
        'Trail progress tracking',
        'Digital membership card',
      ],
      color: '#4a7c59',
      highlight: false,
    },
    {
      name: 'Gold Standard',
      icon: Crown,
      price: '$599',
      period: 'per year',
      description: 'The most popular choice for serious trail enthusiasts',
      features: [
        'Everything in Classic Route',
        '25% off green fees',
        'Priority tee time booking',
        '2 complimentary guest passes',
        'Exclusive merchandise discount',
        'Tournament entry discounts',
        'Concierge booking service',
        'Trail completion certificate',
      ],
      color: '#ffd700',
      highlight: true,
    },
    {
      name: 'Presidential',
      icon: Sparkles,
      price: '$1,299',
      period: 'per year',
      description: 'Ultimate access and luxury for the discerning golfer',
      features: [
        'Everything in Gold Standard',
        '40% off green fees',
        'Unlimited guest passes',
        'VIP tournament access',
        'Premium gift package',
        'Private course events',
        'Personal trail concierge',
        'Lifetime trail legacy status',
        'Presidential medallion',
      ],
      color: '#ff6b35',
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 tracking-tight text-black"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '700' }}
            >
              Choose Your Journey
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Select the membership tier that matches your golfing ambitions along the Mother Road
            </p>
          </motion.div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative rounded-3xl overflow-hidden ${
                  tier.highlight ? 'md:scale-110 md:z-10' : ''
                }`}
              >
                {/* Highlight Badge */}
                {tier.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#ff6b35] to-[#ffd700] py-2 text-center">
                    <span className="text-white tracking-[0.15em] uppercase" style={{ fontSize: '12px', fontWeight: '700' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div
                  className={`bg-gradient-to-br from-white to-[#f4e8c1]/30 border-2 p-8 h-full ${
                    tier.highlight ? 'border-[#ffd700] pt-14' : 'border-gray-200'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${tier.color}20` }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: tier.color }} />
                  </div>

                  {/* Tier Name */}
                  <h3 className="mb-2 tracking-tight text-black" style={{ fontSize: '28px', fontWeight: '700' }}>
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60 mb-6" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-black" style={{ fontSize: '48px', fontWeight: '700' }}>
                        {tier.price}
                      </span>
                      <span className="text-black/60" style={{ fontSize: '16px' }}>
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${tier.color}20` }}
                        >
                          <Check className="w-3 h-3" style={{ color: tier.color }} />
                        </div>
                        <span className="text-black/80" style={{ fontSize: '15px' }}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: tier.highlight ? tier.color : '#1a1a1a',
                      color: 'white',
                    }}
                  >
                    <span className="tracking-[0.1em] uppercase" style={{ fontSize: '14px', fontWeight: '600' }}>
                      Join Now
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-black/60" style={{ fontSize: '14px' }}>
            All memberships include access to our mobile app and exclusive member events. 
            <br />
            Annual memberships renew automatically unless cancelled.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
