import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Mail, Gift, FileText, Zap } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
        }}
      />

      {/* Route 66 Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 70px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-[48px] max-md:text-[36px] text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Never Miss a Deal
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[14px] tracking-[2px] text-white uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          EXCLUSIVE RESORT OFFERS DELIVERED WEEKLY
        </motion.p>

        {/* Benefits Icon Row */}
        <motion.div
          className="flex items-center justify-center gap-8 max-md:grid max-md:grid-cols-2 max-md:gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: Mail, text: 'Weekly deals' },
            { icon: Gift, text: 'Subscriber-only discounts' },
            { icon: FileText, text: 'Trail news & tips' },
            { icon: Zap, text: 'Flash sale alerts' },
          ].map((benefit, index) => (
            <div key={benefit.text} className="flex items-center gap-2 text-white">
              <benefit.icon className="w-5 h-5" />
              <span className="text-[14px]">{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Email Signup Form */}
        <motion.div
          className="max-w-[600px] mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 bg-white rounded-full p-2 shadow-2xl max-md:flex-col max-md:rounded-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 outline-none bg-transparent text-[#0F172A] placeholder:text-[#94A3B8] max-md:w-full"
            />
            <Button className="h-[52px] px-8 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white rounded-full hover:shadow-xl transition-all max-md:w-full">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          className="text-[12px] text-white opacity-80 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          No spam, unsubscribe anytime
        </motion.p>

        {/* Social Proof */}
        <motion.div
          className="text-white text-[14px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Join 12,500+ Trail travelers
        </motion.div>
      </div>
    </section>
  );
}
