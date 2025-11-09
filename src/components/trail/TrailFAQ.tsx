import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function TrailFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I register for the trail?',
      answer: 'Registration opens May 1, 2026 on our website and mobile app. Simply create an account, purchase your trail pass, and start playing! Each course visit is tracked automatically through our app or by submitting scorecards at participating courses.',
    },
    {
      question: 'What are the course fees?',
      answer: 'Course fees vary by location and season. Trail pass holders receive exclusive discounts at all 66 courses, typically 15-25% off standard rates. Many courses also offer special twilight pricing for trail participants.',
    },
    {
      question: 'Can I play courses in any order?',
      answer: 'Absolutely! The beauty of Sticks on 66 is flexibility. Play courses in any order, at your own pace. Many golfers choose to follow Route 66 geographically, while others plan trips based on difficulty or seasonal weather.',
    },
    {
      question: 'How do I receive my medallion?',
      answer: 'Medallions are awarded when you complete 33 (Silver) or 66 (Gold) courses. Once verified, your commemorative medallion ships within 2-3 weeks. A digital certificate is available immediately in your app.',
    },
    {
      question: 'Are there group discounts?',
      answer: 'Yes! Groups of 4+ golfers receive 10% off trail passes. Corporate groups and golf clubs can contact us for custom packages. All participants earn individual progress toward medallions.',
    },
    {
      question: 'What if a course is closed or unavailable?',
      answer: 'We monitor all 66 courses year-round. If a course is temporarily closed, we\'ll provide alternative options or extensions to your trail pass. Course substitutions maintain your progress toward medallions.',
    },
  ];

  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="mb-3"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
            }}
          >
            Trail Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: isOpen ? '#F5F1E8' : '#FFFFFF',
                    border: `2px solid ${isOpen ? '#FF6B35' : '#E5E7EB'}`,
                    transition: 'all 300ms ease',
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                  >
                    <span 
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: isOpen ? '#FF6B35' : '#0F172A',
                      }}
                    >
                      {faq.question}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {isOpen ? (
                        <Minus 
                          className="w-5 h-5"
                          style={{ color: '#FF6B35' }}
                        />
                      ) : (
                        <Plus 
                          className="w-5 h-5"
                          style={{ color: '#94A3B8' }}
                        />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div 
                      className="px-6 pb-5"
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.7',
                        color: '#64748B',
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>

                {/* Separator line - only if not last item */}
                {index < faqs.length - 1 && !isOpen && (
                  <div 
                    className="h-px mx-6"
                    style={{ backgroundColor: '#FF6B35', opacity: 0.2 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
