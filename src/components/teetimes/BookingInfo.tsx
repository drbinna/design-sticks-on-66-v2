import { motion } from 'motion/react';
import { Clock, RefreshCw, Users, DollarSign, Sunrise, Tag } from 'lucide-react';

export function BookingInfo() {
  const quickTips = [
    {
      icon: Clock,
      title: 'Book Early',
      description: 'Best times fill fast',
    },
    {
      icon: Sunrise,
      title: 'Twilight Deals',
      description: 'Save up to 40%',
    },
    {
      icon: Tag,
      title: 'Member Perks',
      description: '10% off all times',
    },
  ];

  const policies = [
    {
      icon: RefreshCw,
      title: 'Free Rescheduling',
      description: 'Up to 24 hours before',
    },
    {
      icon: DollarSign,
      title: 'Full Refund',
      description: 'Cancel 48 hours ahead',
    },
    {
      icon: Users,
      title: 'Group Discounts',
      description: '4+ players save more',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 
            className="mb-2"
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#0F172A',
            }}
          >
            Good To Know
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Booking Tips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-5 flex items-center gap-2"
              style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#0F172A',
              }}
            >
              <span 
                className="w-2 h-8 rounded-full"
                style={{ backgroundColor: '#FF6B35' }}
              />
              Smart Booking Tips
            </h3>
            <div className="space-y-4">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <div 
                    className="rounded-full p-2 flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255, 107, 53, 0.1)' }}
                  >
                    <tip.icon 
                      style={{ 
                        width: '20px',
                        height: '20px',
                        color: '#FF6B35',
                      }}
                    />
                  </div>
                  <div>
                    <div 
                      className="mb-1"
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#0F172A',
                      }}
                    >
                      {tip.title}
                    </div>
                    <div 
                      style={{
                        fontSize: '14px',
                        color: '#64748B',
                      }}
                    >
                      {tip.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-5 flex items-center gap-2"
              style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#0F172A',
              }}
            >
              <span 
                className="w-2 h-8 rounded-full"
                style={{ backgroundColor: '#3B82F6' }}
              />
              Flexible Policies
            </h3>
            <div className="space-y-4">
              {policies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <div 
                    className="rounded-full p-2 flex-shrink-0"
                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    <policy.icon 
                      style={{ 
                        width: '20px',
                        height: '20px',
                        color: '#3B82F6',
                      }}
                    />
                  </div>
                  <div>
                    <div 
                      className="mb-1"
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#0F172A',
                      }}
                    >
                      {policy.title}
                    </div>
                    <div 
                      style={{
                        fontSize: '14px',
                        color: '#64748B',
                      }}
                    >
                      {policy.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
