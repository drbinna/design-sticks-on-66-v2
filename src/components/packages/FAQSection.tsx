import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'payment', label: 'Payment' },
    { id: 'booking', label: 'Booking' },
    { id: 'medallions', label: 'Medallions' },
    { id: 'groups', label: 'Groups' },
  ];

  const faqs = {
    general: [
      {
        question: 'Can I play courses in any order?',
        answer: 'Yes! You have complete flexibility to play the courses in any order that suits your travel plans. Our mobile app helps you plan your route efficiently.',
      },
      {
        question: 'What happens if a course is closed?',
        answer: 'If a course is temporarily closed due to weather or maintenance, we\'ll help you reschedule or substitute with another course. Your package validity will be extended accordingly.',
      },
      {
        question: 'Can I share my package with others?',
        answer: 'Packages are non-transferable and registered to a specific individual. However, our Couples Pass and Family Fun Pass are designed for multiple players.',
      },
      {
        question: 'Do packages expire?',
        answer: 'Yes, each package has a validity period (ranging from 90 days to 18 months depending on the package). Extensions may be available for a small fee.',
      },
    ],
    payment: [
      {
        question: 'Can I get a refund?',
        answer: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied. After that, refunds are prorated based on rounds played, minus a 15% processing fee.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Absolutely! We offer 0% APR financing for 6, 12, or 18 months with approved credit. We also partner with Afterpay, Klarna, and Affirm for installment payments.',
      },
      {
        question: 'Are taxes included in the price?',
        answer: 'Prices shown are before taxes. Applicable state and local taxes will be calculated at checkout based on your billing address.',
      },
      {
        question: 'Can I upgrade my package later?',
        answer: 'Yes! You can upgrade to a higher-tier package at any time. You\'ll pay the difference in price, minus any rounds already played.',
      },
    ],
    booking: [
      {
        question: 'How far in advance can I book?',
        answer: 'You can book tee times up to 60 days in advance. Priority Package holders get access 90 days in advance.',
      },
      {
        question: 'Can I reschedule my tee times?',
        answer: 'Yes, you can reschedule up to 24 hours before your tee time at no charge. Cancellations within 24 hours may forfeit that round.',
      },
      {
        question: 'What if I miss a tee time?',
        answer: 'Missed tee times without 24-hour notice are forfeited. We understand emergencies happen - contact us and we\'ll work with you on a case-by-case basis.',
      },
      {
        question: 'Is there a booking fee?',
        answer: 'No! There are no booking fees. The package price includes all tee time reservations.',
      },
    ],
    medallions: [
      {
        question: 'How do I qualify for a medallion?',
        answer: 'Silver Medallion: Complete 33 courses. Gold Medallion: Complete all 66 courses. Each must be completed within the package validity period.',
      },
      {
        question: 'When do I receive my medallion?',
        answer: 'Medallions are awarded within 30 days of completion. We\'ll contact you to arrange either a local ceremony or mail delivery.',
      },
      {
        question: 'Can I buy a medallion without playing?',
        answer: 'No, medallions must be earned by completing the required courses. They represent a significant achievement and cannot be purchased separately.',
      },
      {
        question: 'What\'s the ceremony like?',
        answer: 'Gold Medallion recipients are invited to an official ceremony with professional photography, certificate presentation, and recognition. Silver recipients receive a personalized ceremony or mail delivery option.',
      },
    ],
    groups: [
      {
        question: 'What\'s the minimum for group rates?',
        answer: 'Minimum group sizes vary: Corporate Team Building (12), Full Tournament (24), Bachelor Party (8). Smaller groups can book individual packages.',
      },
      {
        question: 'Can we customize a package?',
        answer: 'Absolutely! Our group packages are fully customizable. Contact our events team to discuss your specific needs, format preferences, and add-ons.',
      },
      {
        question: 'Do you handle corporate billing?',
        answer: 'Yes, we can invoice your company directly and accept purchase orders. Net-30 payment terms available for qualified corporate accounts.',
      },
      {
        question: 'Are there group discounts?',
        answer: 'Yes! Groups of 12+ receive discounted per-person pricing. The larger the group, the better the rate. Contact us for a custom quote.',
      },
    ],
  };

  const currentFAQs = faqs[activeCategory as keyof typeof faqs] || faqs.general;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Frequently Asked Questions</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Everything You Need to Know
          </p>
        </motion.div>

        {/* FAQ Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenIndex(null);
              }}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'text-[#FF6B35] border-b-2 border-[#FF6B35]'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="max-w-[900px] mx-auto space-y-4">
          {currentFAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-[#FF6B35] pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <h3 className="text-[18px] text-[#0F172A] pr-4 group-hover:text-[#FF6B35] transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#FF6B35] flex-shrink-0" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-[16px] text-[#64748B] mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[18px] text-[#64748B]">
            Still have questions?{' '}
            <button className="text-[#FF6B35] hover:underline inline-flex items-center gap-2">
              Contact us
              <span>→</span>
            </button>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:shadow-lg transition-all">
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </button>
            <a
              href="tel:1-800-768-8366"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#FF6B35] text-[#FF6B35] rounded-lg hover:bg-[#FFF7ED] transition-all"
            >
              <Phone className="w-5 h-5" />
              1-800-ROUTE-66
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
