import { motion } from 'motion/react';
import { Download, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';

export function FoodFinalCTA() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
      }}
    >
      {/* Vintage diner booth pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="booth-pattern" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
              <rect x="10" y="10" width="100" height="60" rx="10" fill="none" stroke="white" strokeWidth="3" />
              <line x1="20" y1="10" x2="20" y2="70" stroke="white" strokeWidth="2" />
              <line x1="100" y1="10" x2="100" y2="70" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#booth-pattern)" />
        </svg>
      </div>

      {/* Neon glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: '700',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            Hungry Yet?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white mb-12 max-w-[700px] mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.6' }}
          >
            Discover unforgettable dining experiences along America's Mother Road
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="h-14 px-8 bg-white text-[#FF6B35] hover:bg-gray-100"
              style={{ fontSize: '16px', fontWeight: '700' }}
            >
              Explore All Restaurants
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-white text-white hover:bg-white/10"
              style={{ fontSize: '16px', fontWeight: '700' }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Dining Guide PDF
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white"
            style={{ fontSize: '14px', opacity: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontWeight: '600' }}>Questions?</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-200 transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>dining@stickson66.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-200 transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>1-800-ROUTE-66</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
