import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';

export default function ContactMethods() {
  const methods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '1-800-ROUTE-66',
      hours: '7 AM - 11 PM CST, Daily',
      wait: 'Average wait: < 2 minutes',
      features: [
        'Booking assistance',
        'Course information',
        'Package help',
        'Emergency support',
      ],
      cta: 'Call Now',
      color: '#FF6B35',
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@stickson66.com',
      hours: 'Response: Within 4 hours',
      wait: '7 days a week',
      features: [
        'General: hello@',
        'Bookings: teetimes@',
        'Packages: packages@',
        'Groups: groups@',
      ],
      cta: 'Send Email',
      color: '#3B82F6',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Available now',
      hours: 'Instant answers from Trail experts',
      wait: '',
      features: [
        'Real-time support',
        'Share screenshots',
        'Chat history saved',
        'Mobile friendly',
      ],
      cta: 'Start Chat',
      color: '#10B981',
      isPulsing: true,
    },
    {
      icon: BookOpen,
      title: 'Help Center',
      primary: 'Search 200+ articles',
      hours: 'Self-service resources',
      wait: '',
      features: [
        'Video tutorials',
        'Course guides',
        'Booking help',
        'FAQs',
      ],
      cta: 'Browse Help Center',
      color: '#8B5CF6',
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
          <h2 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}
          >
            Choose How to Reach Us
          </h2>
          <p 
            className="text-[#FF6B35] uppercase"
            style={{ fontSize: '14px', letterSpacing: '3px' }}
          >
            WE'RE ALWAYS LISTENING
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-[550px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Large Icon */}
              <div className="text-center mb-6">
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${method.color}20` }}
                >
                  <method.icon className="w-10 h-10" style={{ color: method.color }} />
                </div>
                <h3 className="text-[#0F172A]" style={{ fontSize: '24px' }}>
                  {method.title}
                </h3>
              </div>

              {/* Primary Info */}
              <div className="text-center mb-4">
                <p
                  className="mb-2"
                  style={{ fontSize: '18px', color: method.color }}
                >
                  {method.primary}
                  {method.isPulsing && (
                    <motion.span
                      className="inline-block w-2 h-2 rounded-full bg-[#10B981] ml-2"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </p>
                <p className="text-[#0F172A]" style={{ fontSize: '14px' }}>
                  {method.hours}
                </p>
                {method.wait && (
                  <p className="text-[#64748B] mt-1" style={{ fontSize: '13px' }}>
                    {method.wait}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="flex-1 mb-6">
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#10B981] mt-0.5">•</span>
                      <span className="text-[#64748B]" style={{ fontSize: '14px' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full text-white"
                style={{
                  height: '48px',
                  fontSize: '16px',
                  background: method.isPulsing
                    ? `linear-gradient(to right, ${method.color}, ${method.color})`
                    : method.color,
                }}
              >
                {method.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
