import { motion } from 'motion/react';
import { Wifi, Utensils, Dumbbell, Car, Clock, Shield } from 'lucide-react';

export default function ResortsInfoSimple() {
  const benefits = [
    {
      icon: Wifi,
      title: 'Full Amenities',
      description: 'Premium facilities at every property',
    },
    {
      icon: Utensils,
      title: 'Dining Options',
      description: 'On-site restaurants and room service',
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Spa',
      description: 'Stay refreshed between rounds',
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Secure parking for Route 66 travelers',
    },
    {
      icon: Clock,
      title: 'Flexible Booking',
      description: 'Easy cancellation and modifications',
    },
    {
      icon: Shield,
      title: 'Trail Member Rates',
      description: 'Exclusive discounts for package holders',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Why Stay With Us
          </h2>
          <p 
            className="text-[#64748B] max-w-[700px] mx-auto"
            style={{ fontSize: '18px' }}
          >
            All partner resorts meet our standards for quality, comfort, and golfer convenience
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB] transition-all"
            >
              {/* Icon */}
              <div 
                className="rounded-full flex items-center justify-center mb-4"
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)',
                }}
              >
                <benefit.icon 
                  style={{ 
                    width: '28px',
                    height: '28px',
                    color: '#FF6B35',
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="text-[#0F172A] mb-2"
                style={{ fontSize: '18px' }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p 
                className="text-[#64748B]"
                style={{ fontSize: '14px' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p 
            className="text-[#64748B]"
            style={{ fontSize: '15px' }}
          >
            Questions about accommodations?{' '}
            <button className="text-[#FF6B35] hover:underline">
              Contact our concierge team
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
