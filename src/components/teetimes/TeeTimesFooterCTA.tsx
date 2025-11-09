import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Phone } from 'lucide-react';

export function TeeTimesFooterCTA() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <motion.circle
            cx="10%"
            cy="50%"
            r="100"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="90%"
            cy="50%"
            r="150"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <h2 
            className="text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '700' }}
          >
            Ready to Tee Off?
          </h2>

          {/* Subtitle */}
          <p 
            className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: '1.6' }}
          >
            Book your next round on America's legendary highway
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <Button
              size="lg"
              className="bg-white text-[#FF6B35] hover:bg-gray-100 px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: '700' }}
            >
              Find Tee Times Now
            </Button>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="text-white" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Or call us:
              </span>
              <a 
                href="tel:1-800-768-8366"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: '700' }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                1-800-ROUTE-66
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/70 mt-8"
            style={{ fontSize: '14px' }}
          >
            Available 7 days a week, 6am - 9pm PST
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
