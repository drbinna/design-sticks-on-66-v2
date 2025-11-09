import { motion } from 'motion/react';
import { CreditCard, HelpCircle, Calendar, Shield } from 'lucide-react';

export default function PackageInfoSimple() {
  const infoItems = [
    {
      icon: CreditCard,
      title: 'Flexible Payments',
      description: 'Monthly plans, installments, or pay in full',
    },
    {
      icon: Calendar,
      title: 'Play Anytime',
      description: 'Book courses in any order at your own pace',
    },
    {
      icon: Shield,
      title: '30-Day Guarantee',
      description: 'Full refund if not completely satisfied',
    },
    {
      icon: HelpCircle,
      title: 'Need Help?',
      description: 'Call 1-800-ROUTE-66 for assistance',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Why Choose Our Packages
          </h2>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 text-center transition-all"
              style={{ border: '1px solid #E5E7EB' }}
            >
              {/* Icon */}
              <div 
                className="rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)',
                }}
              >
                <item.icon 
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
                style={{ fontSize: '16px' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p 
                className="text-[#64748B]"
                style={{ fontSize: '14px' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
