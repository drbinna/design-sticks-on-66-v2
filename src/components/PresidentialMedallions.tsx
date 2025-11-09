import { motion } from 'motion/react';
import { Trophy, Award } from 'lucide-react';

export function PresidentialMedallions() {
  const medallions = [
    {
      name: 'Silver Medallion',
      number: '33',
      courses: 33,
      description: 'Complete 33 courses along Route 66 and earn your Silver Presidential Medallion',
      icon: Award,
      gradient: 'linear-gradient(135deg, #C0C0C0 0%, #F5F5F5 30%, #E8E8E8 50%, #B8B8B8 70%, #A0A0A0 100%)',
      iconGradient: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A8A8A8 100%)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      benefits: ['Official USGA Recognition', 'Silver Commemorative Coin', 'Exclusive Member Portal'],
      buttonGradient: 'linear-gradient(135deg, #C0C0C0, #E8E8E8)',
    },
    {
      name: 'Gold Medallion',
      number: '66',
      courses: 66,
      description: 'Master all 66 courses and receive the ultimate Gold Presidential Medallion honor',
      icon: Trophy,
      gradient: 'linear-gradient(135deg, #FFD700 0%, #FFF4A3 30%, #FFED4E 50%, #FFAA00 70%, #CC8800 100%)',
      iconGradient: 'linear-gradient(135deg, #FFD700 0%, #FFF4A3 50%, #FFAA00 100%)',
      borderColor: 'rgba(255, 200, 0, 0.2)',
      benefits: ['Presidential Recognition', 'Gold Commemorative Coin', 'Lifetime VIP Access'],
      buttonGradient: 'linear-gradient(135deg, #FFD700, #FFF4A3)',
      hasGlow: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1a1a1a]" style={{ minHeight: '650px' }}>
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 71, 137, 0.15) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 py-8 lg:py-12">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-white mb-2"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}
          >
            Presidential Medallions
          </motion.h2>
          <motion.p 
            className="uppercase text-white/60"
            style={{ 
              fontSize: '12px',
              letterSpacing: '3px',
              fontWeight: '600'
            }}
          >
            Earn Your Place in Golf History
          </motion.p>
        </motion.div>

        {/* Two Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {medallions.map((medallion, index) => (
            <motion.div
              key={medallion.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="relative group"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: `1px solid ${medallion.borderColor}`,
                borderRadius: '16px',
                padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Gold Glow Effect (only for Gold card) */}
              {medallion.hasGlow && (
                <motion.div
                  className="absolute inset-0 rounded-[16px] pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
                  }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}

              {/* Medal/Trophy Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, index === 0 ? 5 : -5, index === 0 ? -5 : 5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="relative z-10 mb-3"
              >
                <div 
                  className="rounded-full flex items-center justify-center relative"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: medallion.iconGradient,
                    boxShadow: medallion.hasGlow 
                      ? '0 8px 30px rgba(255, 215, 0, 0.5), 0 0 50px rgba(255, 215, 0, 0.3)'
                      : '0 8px 30px rgba(192, 192, 192, 0.3)',
                  }}
                >
                  <medallion.icon 
                    className={medallion.hasGlow ? 'w-7 h-7 text-gray-900' : 'w-7 h-7 text-gray-800'} 
                  />
                  
                  {/* Animated Glow for Gold */}
                  {medallion.hasGlow && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Large Number */}
              <motion.div
                className="text-center mb-3 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div 
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                    fontWeight: '900',
                    background: medallion.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1',
                    letterSpacing: '-0.02em',
                    filter: medallion.hasGlow ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))' : 'none',
                  }}
                >
                  {medallion.number}
                </div>
              </motion.div>

              {/* Title & Description */}
              <div className="text-center space-y-1.5 mb-3 relative z-10">
                <h3 
                  className="text-white"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    fontWeight: '700',
                    letterSpacing: '0.5px'
                  }}
                >
                  {medallion.name}
                </h3>
                <p 
                  className="text-white/80"
                  style={{
                    fontSize: 'clamp(0.813rem, 1.8vw, 0.938rem)',
                    lineHeight: '1.5',
                    maxWidth: '90%',
                    margin: '0 auto',
                  }}
                >
                  {medallion.description}
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-1.5 w-full mb-3 relative z-10">
                {medallion.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5"
                  >
                    <div 
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: medallion.hasGlow 
                          ? 'linear-gradient(135deg, #FFD700, #FFF4A3)'
                          : 'linear-gradient(135deg, #C0C0C0, #E8E8E8)',
                        boxShadow: medallion.hasGlow ? '0 0 8px rgba(255, 215, 0, 0.6)' : 'none',
                        flexShrink: 0,
                      }}
                    />
                    <span 
                      className="text-white/70"
                      style={{ fontSize: '0.813rem' }}
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-full"
                style={{
                  padding: '12px 28px',
                  background: medallion.buttonGradient,
                  color: '#1a1a1a',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: medallion.hasGlow 
                    ? '0 4px 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)'
                    : '0 4px 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
