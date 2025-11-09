import { motion } from 'motion/react';
import { DollarSign, Lock, CheckCircle, Calendar, MessageSquare } from 'lucide-react';

export default function GuaranteeTrust() {
  const trustIcons = [
    {
      icon: DollarSign,
      title: 'Money-Back Guarantee',
      subtitle: '30-day full refund',
    },
    {
      icon: Lock,
      title: 'Secure Payment',
      subtitle: '256-bit SSL encryption',
    },
    {
      icon: CheckCircle,
      title: 'No Hidden Fees',
      subtitle: 'What you see is what you pay',
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      subtitle: 'Reschedule anytime',
    },
    {
      icon: MessageSquare,
      title: 'Expert Support',
      subtitle: '24/7 customer service',
    },
  ];

  const partnerLogos = [
    { name: 'PGA', color: '#003087' },
    { name: 'Route 66 Alliance', color: '#FF6B35' },
    { name: 'BBB A+', color: '#10B981' },
  ];

  const paymentLogos = ['VISA', 'Mastercard', 'Amex', 'PayPal'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Main Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[40px] max-md:text-[32px] text-[#0F172A] mb-4">
            Our 100% Satisfaction Guarantee
          </h2>
        </motion.div>

        {/* Trust Icons Row (5 icons) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {trustIcons.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-[16px] text-[#0F172A] mb-1">{item.title}</h3>

              {/* Subtitle */}
              <p className="text-[14px] text-[#64748B]">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-[14px] text-[#64748B] uppercase tracking-wider mb-6">
            Trusted Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="px-6 py-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] hover:border-[#FF6B35] transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[18px] text-[#0F172A]" style={{ color: logo.color }}>
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Processor Logos */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-[14px] text-[#64748B] uppercase tracking-wider mb-6">
            Secure Payment Methods
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {paymentLogos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white border-2 border-[#E5E7EB] rounded-lg text-[16px] text-[#64748B]"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="max-w-[800px] mx-auto text-center bg-[#FFF7ED] rounded-2xl p-8 border-2 border-[#FF6B35]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
          <p className="text-[18px] text-[#0F172A] leading-relaxed">
            If you're not completely satisfied with your Trail experience in the first 30 days, 
            we'll refund your package—no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
