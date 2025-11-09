import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0F172A, #1E293B)',
        }}
      />

      {/* Vintage Route 66 Gas Station Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 50 L150 70 L150 120 L100 140 L50 120 L50 70 Z' fill='white' /%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Neon Sign Glow Effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3), transparent)',
            left: `${20 + i * 30}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        {/* Pre-title */}
        <motion.p
          className="text-[#FF6B35] uppercase mb-4"
          style={{ fontSize: '12px', letterSpacing: '4px' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TRAIL SUPPORT CENTER
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="text-white mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            textShadow: '0 4px 24px rgba(255,107,53,0.4)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Talk Golf
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#94A3B8] max-w-[700px] mb-12"
          style={{ fontSize: '18px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Questions about courses, packages, or your Trail journey? We're here 7 days a week.
        </motion.p>

        {/* Quick Contact Bar */}
        <motion.div
          className="flex items-center gap-12 max-md:flex-col max-md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: Phone,
              label: '1-800-ROUTE-66',
              sublabel: 'Available: 7 AM - 11 PM CST',
            },
            {
              icon: Mail,
              label: 'hello@stickson66.com',
              sublabel: 'Response: Within 4 hours',
            },
            {
              icon: MessageCircle,
              label: 'Live Chat',
              sublabel: 'Status: Online now',
              hasGreenDot: true,
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center gap-2 justify-center mb-1">
                <item.icon className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-white" style={{ fontSize: '16px' }}>
                  {item.label}
                </span>
                {item.hasGreenDot && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#10B981]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              <div className="text-[#64748B]" style={{ fontSize: '13px' }}>
                {item.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
