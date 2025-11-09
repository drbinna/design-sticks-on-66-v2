import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1648122532741-7e69d419f884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwc3Vuc2V0JTIwZHJhbWF0aWN8ZW58MXx8fHwxNzYwMTA5MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Golf course at sunset"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(220, 20, 60, 0.85) 100%)',
          }}
        />
        {/* Diagonal Stripe Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(0,0,0,0.3) 20px,
              rgba(0,0,0,0.3) 40px
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="mb-6 tracking-tight text-white drop-shadow-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '700', lineHeight: '1.1' }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Begin Your Journey
          </motion.h2>
          <p className="text-white/90 mb-12 max-w-2xl mx-auto tracking-[0.05em]" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Experience championship golf along America's most iconic highway. Book your tee time and become part of golf history.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button 
              className="group bg-white hover:bg-white/95 text-black px-10 py-5 rounded-full flex items-center gap-3 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255,255,255,0.7)',
                  '0 0 0 20px rgba(255,255,255,0)',
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#dc143c] opacity-0 group-hover:opacity-20"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="tracking-[0.1em] uppercase relative z-10" style={{ fontSize: '16px', fontWeight: '700' }}>
                Book Your Tee Time
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>
            <motion.button 
              className="group bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-10 py-5 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-[0.1em] uppercase" style={{ fontSize: '16px', fontWeight: '700' }}>
                Explore Packages
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
