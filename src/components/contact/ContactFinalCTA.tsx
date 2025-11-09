import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

export default function ContactFinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
        }}
      />

      {/* Route 66 Shield Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
              <path d="M 30 10 L 50 18 L 50 42 L 30 55 L 10 42 L 10 18 Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-[48px] max-md:text-[36px] text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Still Have Questions?
        </motion.h2>

        {/* CTA Row */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8 max-md:flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="h-[56px] px-10 bg-white text-[#FF6B35] hover:bg-[#F9FAFB] text-[18px] shadow-2xl">
            <Phone className="w-5 h-5 mr-2" />
            Call 1-800-ROUTE-66
          </Button>
          <Button
            variant="outline"
            className="h-[56px] px-10 border-2 border-white text-white hover:bg-white/10 text-[18px]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Live Chat
          </Button>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="text-[16px] text-white opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We're here to help you every mile of the way
        </motion.p>
      </div>
    </section>
  );
}
