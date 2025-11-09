import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { DollarSign, RotateCcw, Award, MessageCircle } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0F172A, #1E293B)',
        }}
      />

      {/* Stars/Night Sky Theme */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated Headlights on Horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
          style={{ width: '200px' }}
          animate={{
            x: ['-200px', '100vw'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
        {/* Pre-title */}
        <motion.p
          className="text-[12px] tracking-[3px] text-[#FF6B35] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          YOUR ADVENTURE AWAITS
        </motion.p>

        {/* Main Title */}
        <motion.h2
          className="text-[64px] max-md:text-[40px] text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rest Easy, Play Hard
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[20px] text-[#94A3B8] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Book your Trail accommodations today
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12 max-md:flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="h-[56px] px-8 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white text-[18px] hover:shadow-2xl transition-all">
            Search All Resorts
          </Button>
          <Button
            variant="outline"
            className="h-[56px] px-8 border-2 border-white text-white hover:bg-white/10 text-[18px]"
          >
            View Stay & Play Packages
          </Button>
          <Button
            variant="ghost"
            className="h-[56px] px-8 text-white hover:bg-white/5 text-[18px]"
          >
            Talk to Concierge
          </Button>
        </motion.div>

        {/* Trust Signals Row */}
        <motion.div
          className="flex items-center justify-center gap-8 max-md:grid max-md:grid-cols-2 max-md:gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: DollarSign, text: 'Best price guarantee' },
            { icon: RotateCcw, text: 'Free cancellation' },
            { icon: Award, text: 'Trail member exclusive rates' },
            { icon: MessageCircle, text: '24/7 support' },
          ].map((signal, index) => (
            <div key={signal.text} className="flex items-center gap-2 text-white">
              <signal.icon className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-[14px]">{signal.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="text-[16px] text-[#94A3B8]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Start planning the golf trip of a lifetime along America's Mother Road
        </motion.p>
      </div>
    </section>
  );
}
