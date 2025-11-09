import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

export default function FinalCTA() {
  const [activities, setActivities] = useState([
    { name: 'John D.', location: 'Texas', package: 'Silver Trail Pass', time: '2 minutes ago' },
    { name: 'Sarah M.', location: 'California', package: 'Gold Champion', time: '5 minutes ago' },
    { name: 'Mike R.', location: 'Illinois', package: 'Weekend Warrior', time: '8 minutes ago' },
    { name: 'Lisa K.', location: 'Arizona', package: 'Couples Pass', time: '12 minutes ago' },
    { name: 'Tom B.', location: 'Missouri', package: 'Silver Trail Pass', time: '15 minutes ago' },
  ]);

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % activities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activities.length]);

  const stats = [
    { icon: Users, value: '2,500+', label: 'Members' },
    { icon: Award, value: '450', label: 'Medallions Awarded' },
    { icon: TrendingUp, value: '15,000+', label: 'Rounds Played' },
  ];

  // Golf ball pattern
  const golfBalls = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
  }));

  return (
    <section className="py-16 bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Golf ball pattern scatter */}
      {golfBalls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute w-6 h-6 rounded-full bg-white/5"
          style={{
            left: ball.left,
            top: ball.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            delay: ball.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-[60%,40%] gap-12 items-center">
          {/* Left Side: CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[56px] max-md:text-[40px] text-white mb-4 leading-tight">
                Ready to Hit the Road?
              </h2>
              <p className="text-[20px] max-md:text-[18px] text-[#94A3B8] mb-8">
                Join 2,500+ golfers conquering the Trail
              </p>

              {/* Statistics row */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div className="text-[24px] max-md:text-[20px] text-[#FF6B35] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[14px] text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Large CTA */}
              <div className="space-y-4">
                <Button className="w-full md:w-auto h-[64px] px-12 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-2xl text-[20px]">
                  Choose Your Package
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>

                {/* Secondary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <span className="text-[16px] text-[#94A3B8]">or</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-[16px] text-white">Talk to a Trail Expert</span>
                    <a
                      href="tel:1-800-768-8366"
                      className="text-[24px] text-[#FF6B35] hover:text-[#DC2626] transition-colors inline-flex items-center gap-2"
                    >
                      <Phone className="w-6 h-6" />
                      1-800-ROUTE-66
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Live Activity Feed */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-3 h-3 bg-[#10B981] rounded-full" />
                <motion.div
                  className="absolute inset-0 bg-[#10B981] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <h3 className="text-[18px] text-white">Recent Bookings</h3>
            </div>

            {/* Scrolling list */}
            <div className="space-y-3 h-[300px] overflow-hidden">
              <AnimatePresence mode="wait">
                {activities.map((activity, index) => (
                  <motion.div
                    key={`${visibleIndex}-${index}`}
                    className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 ${
                      index === visibleIndex % activities.length ? 'border-[#FF6B35]' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: index <= (visibleIndex % activities.length) + 2 ? 1 : 0,
                      y: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: index > 2 ? 'absolute' : 'relative',
                      visibility: index > 2 ? 'hidden' : 'visible',
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-[14px] text-white mb-1">
                          <strong>{activity.name}</strong> from {activity.location} just purchased
                        </p>
                        <div className="inline-block px-2 py-1 bg-[#FF6B35]/20 border border-[#FF6B35] rounded text-[12px] text-[#FF6B35]">
                          {activity.package}
                        </div>
                      </div>
                      <span className="text-[12px] text-[#94A3B8] whitespace-nowrap">
                        {activity.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* FOMO message */}
            <motion.div
              className="mt-4 text-center text-[14px] text-[#FF6B35]"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⚡ Don't miss out! Limited spots available
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
