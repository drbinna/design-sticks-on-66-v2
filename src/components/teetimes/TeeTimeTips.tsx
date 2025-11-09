import { motion } from 'motion/react';
import { Clock, Sunrise, Users, Tag, Smartphone, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const tips = [
  {
    icon: Clock,
    title: 'Book early for best selection',
    description: 'Popular times fill up fast',
  },
  {
    icon: Sunrise,
    title: 'Twilight times = best deals',
    description: 'Save up to 40% on evening rounds',
  },
  {
    icon: Users,
    title: 'Bring friends, save more',
    description: 'Group discounts available',
  },
  {
    icon: Tag,
    title: 'Join for trail member perks',
    description: '10% off all tee times',
  },
  {
    icon: Smartphone,
    title: 'Download our app for notifications',
    description: 'Get alerts on deals & availability',
  },
];

const faqs = [
  {
    question: "What's included in the price?",
    answer: "All tee time prices include 18 holes of golf and a shared cart. Club rentals, GPS devices, and other equipment are available for an additional fee.",
  },
  {
    question: 'Can I walk the course?',
    answer: "Yes! Most courses allow walking, though cart fees may still apply. Check individual course policies when booking. Walking is subject to course conditions and pace of play.",
  },
  {
    question: "What if I'm running late?",
    answer: "Please contact the pro shop immediately if you're running late. Most courses allow a 10-15 minute grace period, but you may lose your tee time if you're too late. We recommend arriving 30 minutes before your tee time.",
  },
  {
    question: 'Do you offer rain checks?',
    answer: "Yes! If a course closes due to weather, you'll automatically receive a full refund or rain check voucher valid for 12 months at any Sticks on 66 course.",
  },
  {
    question: 'Can I transfer my tee time?',
    answer: "Tee times can be transferred to another player up to 48 hours before your scheduled time at no charge. After that, standard cancellation policies apply.",
  },
  {
    question: 'Are there senior/junior discounts?',
    answer: "Many courses offer senior (60+) and junior (under 18) discounts on weekday mornings. These are reflected in the pricing when you search for tee times.",
  },
];

export function TeeTimeTips() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Tips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', marginBottom: '24px' }}>
              First Time Booking?
            </h2>

            <div className="space-y-6">
              {tips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#FFF7ED' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#FF6B35' }} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>
                        {tip.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#64748B' }}>
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
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', marginBottom: '24px' }}>
              Common Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-white rounded-lg px-6 border-none"
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
