import { motion } from 'motion/react';
import { CreditCard, Calendar, Gift } from 'lucide-react';

export default function PaymentOptions() {
  const options = [
    {
      icon: CreditCard,
      title: 'Pay Monthly',
      description: 'Spread your package over 6, 12, or 18 months',
      example: '$1,299 package = $108/month',
      note: '0% APR for 12 months',
      fineprint: 'With approved credit',
      cta: 'Calculate My Payment',
    },
    {
      icon: Calendar,
      title: 'Split Payments',
      description: 'Pay in 3 or 4 interest-free installments',
      example: '4 payments of $325',
      note: 'Partners: Afterpay, Klarna, Affirm',
      cta: 'Learn More',
      logos: true,
    },
    {
      icon: Gift,
      title: 'Gift a Package',
      description: 'Perfect for birthdays, retirements, or special occasions',
      note: 'Custom amounts available',
      cta: 'Purchase Gift Card',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Flexible Payment Options</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Make Your Dream Affordable
          </p>
        </motion.div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 max-md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#FF6B35]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#DC2626] rounded-xl flex items-center justify-center mb-6">
                <option.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-[24px] text-[#0F172A] mb-3">{option.title}</h3>

              {/* Description */}
              <p className="text-[16px] text-[#64748B] mb-4 leading-relaxed">
                {option.description}
              </p>

              {/* Example */}
              {option.example && (
                <div className="bg-[#FFF7ED] rounded-lg p-4 mb-4">
                  <p className="text-[14px] text-[#0F172A]">
                    <span className="text-[#FF6B35]">Example:</span> {option.example}
                  </p>
                </div>
              )}

              {/* Note */}
              <p className="text-[14px] text-[#10B981] mb-2">{option.note}</p>

              {/* Fineprint */}
              {option.fineprint && (
                <p className="text-[12px] text-[#94A3B8] mb-4">{option.fineprint}</p>
              )}

              {/* Payment partner logos */}
              {option.logos && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {['Afterpay', 'Klarna', 'Affirm'].map((partner) => (
                    <div
                      key={partner}
                      className="px-3 py-1 bg-[#F9FAFB] rounded text-[12px] text-[#64748B] border border-[#E5E7EB]"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Link */}
              <button className="text-[16px] text-[#FF6B35] hover:underline inline-flex items-center gap-2 group">
                {option.cta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-2xl p-8 max-md:p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[20px] max-md:text-[18px] text-white">
            Questions about payment?{' '}
            <span className="text-[#FF6B35]">Talk to our team:</span>
          </p>
          <motion.a
            href="tel:1-800-768-8366"
            className="inline-block mt-4 text-[32px] max-md:text-[24px] text-[#FF6B35] hover:text-[#DC2626] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            1-800-ROUTE-66
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
