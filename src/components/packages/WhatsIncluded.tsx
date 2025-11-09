import { motion } from 'motion/react';
import { Car, TrendingUp, Smartphone, Tag, Zap, Users, RefreshCw, Award } from 'lucide-react';

export default function WhatsIncluded() {
  const benefits = [
    {
      icon: Car,
      title: 'Premium Cart Rental',
      description: 'GPS-enabled carts with USB charging',
    },
    {
      icon: TrendingUp,
      title: 'Trail Progress Tracking',
      description: 'Real-time stats and milestone tracking',
    },
    {
      icon: Smartphone,
      title: 'Digital Scorecards',
      description: 'Mobile app with advanced analytics',
    },
    {
      icon: Tag,
      title: 'Exclusive Discounts',
      description: 'Pro shop, food, and merchandise savings',
    },
    {
      icon: Zap,
      title: 'Priority Booking',
      description: 'Reserve prime tee times first',
    },
    {
      icon: Users,
      title: 'Trail Community',
      description: 'Join 2,500+ Trail members nationwide',
    },
    {
      icon: RefreshCw,
      title: 'Flexible Cancellation',
      description: 'Free rescheduling up to 24 hours',
    },
    {
      icon: Award,
      title: 'Commemorative Items',
      description: 'Welcome kit and Trail merchandise',
    },
  ];

  return (
    <section className="py-16 bg-[#F5F1E8]">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Every Package Includes</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Premium Experience Guaranteed
          </p>
        </motion.div>

        {/* Visual Grid: 8 benefit cards (4 × 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:border-[#FF6B35] hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Large icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#DC2626] rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-[20px] text-[#0F172A] mb-2">{benefit.title}</h3>

              {/* Description */}
              <p className="text-[14px] text-[#64748B] mb-4 leading-relaxed">
                {benefit.description}
              </p>

              {/* Learn more link */}
              <button className="text-[14px] text-[#FF6B35] hover:underline inline-flex items-center gap-1 group">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
