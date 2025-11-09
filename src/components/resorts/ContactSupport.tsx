import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';

export default function ContactSupport() {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      main: '1-800-ROUTE-66',
      details: ['7 AM - 11 PM CST', 'Average wait: < 2 minutes'],
      color: '#FF6B35',
    },
    {
      icon: Mail,
      title: 'Email Support',
      main: 'resorts@stickson66.com',
      details: ['Response within 4 hours', '7 days a week'],
      color: '#3B82F6',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      main: 'Available now',
      details: ['Chat with Trail expert'],
      color: '#10B981',
      hasButton: true,
    },
    {
      icon: BookOpen,
      title: 'Help Center',
      main: 'Browse 200+ articles',
      details: ['Video tutorials', 'Resort guides'],
      color: '#8B5CF6',
      hasButton: true,
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">
            We're Here to Help
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            QUESTIONS ABOUT YOUR STAY?
          </p>
        </motion.div>

        {/* 4-Column Support Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${option.color}20` }}
              >
                <option.icon className="w-8 h-8" style={{ color: option.color }} />
              </div>

              {/* Title */}
              <h3 className="text-[20px] text-[#0F172A] mb-3">{option.title}</h3>

              {/* Main Info */}
              <p
                className="text-[18px] mb-3"
                style={{ color: option.color }}
              >
                {option.main}
              </p>

              {/* Details */}
              <div className="space-y-1 mb-4">
                {option.details.map((detail, idx) => (
                  <p key={idx} className="text-[13px] text-[#64748B]">
                    {detail}
                  </p>
                ))}
              </div>

              {/* Button (if applicable) */}
              {option.hasButton && (
                <Button
                  variant="outline"
                  className="w-full"
                  style={{ borderColor: option.color, color: option.color }}
                >
                  {option.title === 'Live Chat' ? 'Start Chat' : 'Visit Help Center'}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] rounded-2xl p-8 text-white text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 max-md:flex-col">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span className="text-[18px]">Already on the road?</span>
            </div>
            <div className="text-[24px]">
              24/7 support: <a href="tel:1-800-768-8391" className="hover:underline">1-800-ROUTE-911</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
