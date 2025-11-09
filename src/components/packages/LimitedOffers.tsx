import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Gift, Users, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

export default function LimitedOffers() {
  const targetDate = new Date('2025-11-30T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const offers = [
    {
      icon: Gift,
      title: 'Free Upgrade',
      description: 'Book Weekend Warrior, get 3 bonus rounds',
      value: '$120 value',
    },
    {
      icon: Users,
      title: 'Bring a Friend',
      description: 'Buy one package, friend gets 20% off',
      code: 'TRAIL2025',
    },
    {
      icon: Sparkles,
      title: 'Early 2026 Launch',
      description: 'First 250 members get exclusive gear',
      remaining: '42 spots remaining',
    },
  ];

  // Sparkle animation positions
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
  }));

  return (
    <section className="py-16 bg-gradient-to-br from-[#FF6B35] to-[#DC2626] relative overflow-hidden">
      {/* Route 66 shield pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Animated sparkle effects */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        {/* Alert Banner */}
        <motion.div
          className="text-center mb-6"
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white text-[14px] uppercase tracking-wider rounded-full border-2 border-white">
            <Clock className="w-4 h-4 inline mr-2" />
            Limited Time Offers
          </span>
        </motion.div>

        {/* Main Offer Title */}
        <motion.h2
          className="text-[56px] max-md:text-[40px] text-white text-center mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Early Bird Special
        </motion.h2>

        {/* Offer Details */}
        <p className="text-[20px] max-md:text-[18px] text-white text-center mb-8">
          Book before November 30, 2025 and save an extra 15%
        </p>

        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center gap-4 max-md:gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg p-4 min-w-[100px] max-md:min-w-[70px]"
                animate={{
                  scale: item.label === 'Seconds' && item.value < 10 ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: item.label === 'Seconds' && item.value < 10 ? Infinity : 0,
                }}
              >
                <div className="text-[48px] max-md:text-[32px] text-white tabular-nums">
                  {String(item.value).padStart(2, '0')}
                </div>
              </motion.div>
              <div className="text-[14px] text-white/80 mt-2 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Offer Grid (3 columns) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <offer.icon className="w-8 h-8 text-[#FF6B35]" />
              </div>
              <h3 className="text-[24px] max-md:text-[20px] text-white mb-3">{offer.title}</h3>
              <p className="text-[16px] text-white/90 mb-4">{offer.description}</p>
              {offer.value && (
                <div className="inline-block px-4 py-2 bg-[#10B981] text-white rounded-full text-[14px]">
                  {offer.value}
                </div>
              )}
              {offer.code && (
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white text-white rounded-lg text-[16px] font-mono">
                  {offer.code}
                </div>
              )}
              {offer.remaining && (
                <div className="inline-block px-4 py-2 bg-[#DC2626] text-white rounded-full text-[14px]">
                  {offer.remaining}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button className="h-[56px] px-12 bg-white text-[#FF6B35] hover:bg-[#F9FAFB] text-[18px] shadow-2xl">
            Claim Your Offer Now →
          </Button>
          <p className="text-[14px] text-white/80 mt-4">Offers expire soon</p>
        </motion.div>
      </div>
    </section>
  );
}
