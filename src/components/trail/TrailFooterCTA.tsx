import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export function TrailFooterCTA() {
  return (
    <section 
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ minHeight: '400px' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
          }}
        />
        {/* Road texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(0,0,0,0.1) 100px, rgba(0,0,0,0.1) 110px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main heading */}
          <h2 
            className="text-white mb-4"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
            }}
          >
            Ready To Hit The Road?
          </h2>

          {/* Subtitle */}
          <p 
            className="text-white/90 mb-10 max-w-2xl mx-auto"
            style={{ 
              fontSize: '20px',
              lineHeight: '1.6',
            }}
          >
            Start your legendary golf journey today
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full flex items-center gap-3 shadow-2xl"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#DC2626',
                fontSize: '18px',
                fontWeight: '700',
              }}
            >
              Begin Your Trail
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full flex items-center gap-2"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.5)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Download className="w-5 h-5" />
              Download Trail Guide PDF
            </motion.button>
          </motion.div>

          {/* Route 66 Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div 
              className="inline-flex items-center justify-center rounded-full"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '3px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <span 
                className="text-white"
                style={{ 
                  fontSize: '40px',
                  fontWeight: '900',
                }}
              >
                66
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
