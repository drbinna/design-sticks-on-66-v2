import { motion } from 'motion/react';
import { Check, Apple, Smartphone } from 'lucide-react';
import { Button } from '../ui/button';

export function MobileAppUpsell() {
  const features = [
    'Save favorite courses',
    'One-tap rebooking',
    'Push notifications for deals',
    'GPS course navigation',
    'Digital scorecard',
    'Track trail progress',
  ];

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      }}
    >
      {/* Golf Ball Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="golf-balls" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="20" cy="20" r="2" fill="white" />
              <circle cx="60" cy="60" r="15" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="60" cy="60" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#golf-balls)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 
              className="text-white mb-4"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: '700' }}
            >
              Book Faster With Our App
            </h2>
            <p 
              style={{ 
                fontSize: '14px',
                letterSpacing: '3px',
                color: '#FF6B35',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              One Tap Tee Times
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white" style={{ fontSize: '16px' }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex items-center justify-center gap-3 h-14 px-6 bg-white text-black hover:bg-gray-100"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div style={{ fontSize: '10px' }}>Download on the</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>App Store</div>
                </div>
              </Button>

              <Button
                className="flex items-center justify-center gap-3 h-14 px-6 bg-white text-black hover:bg-gray-100"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div style={{ fontSize: '10px' }}>Get it on</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>

          {/* Right Side - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto hidden lg:block" style={{ width: '300px' }}>
              {/* Phone Border */}
              <div 
                className="relative rounded-[40px] overflow-hidden shadow-2xl"
                style={{
                  border: '12px solid #1E293B',
                  backgroundColor: 'white',
                }}
              >
                {/* Notch */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl z-10"
                  style={{ backgroundColor: '#1E293B' }}
                />

                {/* Screen Content */}
                <div className="aspect-[9/19] bg-gradient-to-br from-[#F5F1E8] to-white p-6">
                  <div className="space-y-4 mt-6">
                    {/* App Header */}
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3"
                        style={{ 
                          background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                        }}
                      >
                        <span className="text-white text-2xl">⛳</span>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Sticks on 66</h3>
                    </div>

                    {/* Mock Tee Time Cards */}
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="bg-white rounded-lg p-3 shadow-md"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded bg-[#F5F1E8]" />
                          <div className="flex-1">
                            <div className="h-3 bg-[#E5E7EB] rounded w-3/4 mb-1" />
                            <div className="h-2 bg-[#F3F4F6] rounded w-1/2" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                          <div className="h-2 bg-[#FF6B35] rounded w-1/3" />
                          <div className="h-3 bg-[#10B981] rounded-full w-16" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#FFF7ED' }}
              >
                <span className="text-3xl">⛳</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#FFF7ED' }}
              >
                <span className="text-2xl">🏌️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
