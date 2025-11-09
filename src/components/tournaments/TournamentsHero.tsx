import { motion } from 'motion/react';
import { Trophy, DollarSign, Flag } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function TournamentsHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0F172A, #1E293B)',
        }}
      />

      {/* Golf Tournament Action Photo Overlay */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&h=900&fit=crop"
          alt="Golf tournament action"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Trophy Silhouettes Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 35}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Trophy className="w-16 h-16 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        {/* Pre-title Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/30 backdrop-blur-sm">
            <span 
              className="tracking-[4px] text-[#FF6B35]"
              style={{ fontSize: '12px' }}
            >
              COMPETE ON THE TRAIL
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-white mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 4rem)',
            textShadow: '0 4px 24px rgba(255,107,53,0.4)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Route 66 Tournaments
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#94A3B8] mb-12"
          style={{ fontSize: '18px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From weekend scrambles to championship events
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="flex gap-12 max-md:flex-col max-md:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Trophy, text: '24 Tournaments Annually' },
            { icon: DollarSign, text: 'Prize Pools up to $10K' },
            { icon: Flag, text: 'All Skill Levels' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <item.icon className="w-7 h-7 text-[#FF6B35]" />
              <span 
                className="text-white"
                style={{ fontSize: '16px' }}
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4 max-md:flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            className="h-[56px] px-10 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all"
            style={{ fontSize: '18px' }}
          >
            View Upcoming Events
          </Button>
          <Button 
            className="h-[56px] px-10 border-2 border-white bg-transparent text-white hover:bg-white/10 transition-all"
            style={{ fontSize: '18px' }}
          >
            View Schedule
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
