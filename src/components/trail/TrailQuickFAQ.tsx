import { motion } from 'motion/react';
import { HelpCircle, Calendar, DollarSign, Trophy } from 'lucide-react';

export function TrailQuickFAQ() {
  const faqs = [
    {
      icon: Calendar,
      question: 'When can I start?',
      answer: 'Registration opens May 1, 2026',
    },
    {
      icon: DollarSign,
      question: 'What are the fees?',
      answer: 'Trail pass holders get 15-25% off all courses',
    },
    {
      icon: HelpCircle,
      question: 'Any order?',
      answer: 'Play all 66 courses in any order, at your own pace',
    },
    {
      icon: Trophy,
      question: 'How do I get my medallion?',
      answer: 'Awarded when you complete 33 (Silver) or 66 (Gold) courses',
    },
  ];

  return (
    <section className="relative bg-gray-50 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="mb-2"
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#0F172A',
            }}
          >
            Quick Answers
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-5 transition-all"
              style={{
                border: '2px solid #E5E7EB',
              }}
            >
              {/* Icon */}
              <div 
                className="rounded-full flex items-center justify-center mb-3"
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                }}
              >
                <faq.icon 
                  style={{ 
                    width: '24px',
                    height: '24px',
                    color: '#FF6B35',
                  }}
                />
              </div>

              {/* Question */}
              <h3 
                className="mb-2"
                style={{ 
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0F172A',
                }}
              >
                {faq.question}
              </h3>

              {/* Answer */}
              <p 
                style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: '1.5',
                }}
              >
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
