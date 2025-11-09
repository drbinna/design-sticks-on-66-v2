import { motion } from 'motion/react';
import { RefreshCw, Zap, Cloud } from 'lucide-react';

export function CancellationPolicy() {
  const policies = [
    {
      icon: RefreshCw,
      title: 'Easy Rescheduling',
      description: 'Reschedule up to 24 hours before tee time at no charge',
      color: '#3B82F6',
    },
    {
      icon: Zap,
      title: 'Free Cancellation',
      description: 'Cancel up to 48 hours in advance for full refund',
      color: '#F59E0B',
    },
    {
      icon: Cloud,
      title: 'Weather Protection',
      description: 'Automatic refund for course closures due to weather',
      color: '#64748B',
    },
  ];

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: '#EFF6FF' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
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
            Life Happens, We Get It
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '48px', fontWeight: '700' }}
          >
            Flexible Booking Policy
          </motion.h2>
        </div>

        {/* Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {policies.map((policy, idx) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${policy.color}15` }}
                >
                  <Icon className="w-10 h-10" style={{ color: policy.color }} />
                </div>

                {/* Title */}
                <h3 
                  className="mb-3"
                  style={{ fontSize: '22px', fontWeight: '700', color: '#0F172A' }}
                >
                  {policy.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.6' }}>
                  {policy.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 space-y-2"
        >
          <p style={{ fontSize: '14px', color: '#64748B' }}>
            <a href="#" className="underline hover:text-[#FF6B35] transition-colors">
              Full Terms & Conditions
            </a>
            {' • '}
            <a href="#" className="underline hover:text-[#FF6B35] transition-colors">
              Questions? Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
