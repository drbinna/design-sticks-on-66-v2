import { motion } from 'motion/react';
import { Calendar, Gift, Award, Users, MapPin } from 'lucide-react';

export default function MembershipBenefits() {
  const benefits = [
    {
      icon: Calendar,
      title: 'Priority Booking',
      description: 'Reserve your tee times up to 30 days in advance with priority access to prime slots',
      color: '#ff6b35',
    },
    {
      icon: Gift,
      title: 'Exclusive Perks',
      description: 'Member-only discounts on merchandise, dining, and special trail experiences',
      color: '#ffd700',
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Earn badges, certificates, and rewards as you complete courses along the trail',
      color: '#4a7c59',
    },
    {
      icon: Users,
      title: 'Community Events',
      description: 'Join exclusive member tournaments, social gatherings, and networking opportunities',
      color: '#ff6b35',
    },
    {
      icon: MapPin,
      title: 'Trail Tracking',
      description: 'Digital passport to track your progress across all 66 courses with achievements',
      color: '#ffd700',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f4e8c1]/30 overflow-hidden">
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
              Member Benefits
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Experience golf like never before with comprehensive perks designed for trail explorers
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-[#ff6b35]/30 transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${benefit.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: benefit.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="mb-3 tracking-tight text-black group-hover:text-[#ff6b35] transition-colors"
                    style={{ fontSize: '24px', fontWeight: '700' }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-12 text-center"
        >
          <h3 className="mb-4 tracking-tight text-white" style={{ fontSize: '36px', fontWeight: '700' }}>
            Ready to Join the Trail?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Start your journey today and become part of America's most iconic golf experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-10 py-5 rounded-full transition-all duration-300"
            >
              <span className="tracking-[0.1em] uppercase" style={{ fontSize: '15px', fontWeight: '600' }}>
                View Membership Plans
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full transition-all duration-300"
            >
              <span className="tracking-[0.1em] uppercase" style={{ fontSize: '15px', fontWeight: '600' }}>
                Contact Us
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
