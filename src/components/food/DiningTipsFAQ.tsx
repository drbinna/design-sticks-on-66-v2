import { motion } from 'motion/react';
import { Clock, Banknote, Users, Utensils, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const tips = [
  {
    id: 1,
    icon: Clock,
    title: 'Timing is Everything',
    description: 'Arrive before 11:30 AM or after 1:30 PM to avoid lunch rush at popular spots',
    color: '#3B82F6',
  },
  {
    id: 2,
    icon: Banknote,
    title: 'Cash Still King',
    description: 'Many classic diners prefer cash—hit an ATM before heading out',
    color: '#10B981',
  },
  {
    id: 3,
    icon: Users,
    title: 'Ask Locals',
    description: 'Golf course pro shops always know the best local spots',
    color: '#F59E0B',
  },
  {
    id: 4,
    icon: Utensils,
    title: 'Breakfast Champions',
    description: 'Route 66 diners excel at breakfast—don\'t miss it',
    color: '#8B5CF6',
  },
  {
    id: 5,
    icon: Phone,
    title: 'Call Ahead',
    description: 'Small-town restaurants may have limited hours, especially Sundays',
    color: '#DC2626',
  },
];

const faqs = [
  {
    question: 'Do I need reservations?',
    answer: 'Recommended for fine dining and weekends. Most diners and casual spots are walk-in.',
  },
  {
    question: 'Which restaurants offer Trail discounts?',
    answer: 'Look for \'Trail Partner\' badge. Show your membership card or app.',
  },
  {
    question: 'Are there vegetarian/vegan options?',
    answer: 'Most restaurants accommodate dietary needs. Filter by \'Vegetarian Friendly\' in search.',
  },
  {
    question: 'What\'s the dress code?',
    answer: 'Casual golf attire welcome at most places. Fine dining may require collared shirts.',
  },
  {
    question: 'Do restaurants serve alcohol?',
    answer: 'Varies by location and state laws. Check individual restaurant details.',
  },
  {
    question: 'Can I order takeout for the course?',
    answer: 'Many spots offer grab-and-go. Perfect for early morning tee times!',
  },
];

export function DiningTipsFAQ() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Tips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8" style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: '700' }}>
              Trail Dining Tips
            </h2>

            <div className="space-y-5">
              {tips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <motion.div
                    key={tip.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${tip.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: tip.color }} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A' }}>
                        {tip.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>
                        {tip.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8" style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: '700' }}>
              Common Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-white rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger
                    className="hover:no-underline py-4"
                    style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A' }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="pb-4"
                    style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
