import { motion } from 'motion/react';
import { Flag, Sparkles, UtensilsCrossed, Waves, Dumbbell, Briefcase, PawPrint, Crown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AmenityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: string;
  index: number;
}

function AmenityCard({ icon: Icon, title, description, count, index }: AmenityCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div
        className="p-6 rounded-xl transition-all duration-300 hover:border-[#FF6B35]"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Icon */}
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className="w-16 h-16 text-[#FF6B35]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-[20px] text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] text-[#94A3B8] mb-3 leading-relaxed">
          {description}
        </p>

        {/* Count */}
        <p className="text-[13px] text-[#FF6B35]">
          {count}
        </p>
      </div>
    </motion.div>
  );
}

export default function AmenitiesShowcase() {
  const amenities: AmenityCardProps[] = [
    {
      icon: Flag,
      title: 'Championship Golf',
      description: '18-hole courses designed by legends',
      count: '25 properties',
      index: 0,
    },
    {
      icon: Sparkles,
      title: 'Luxury Spas',
      description: 'Relaxation and rejuvenation after your round',
      count: '14 properties',
      index: 1,
    },
    {
      icon: UtensilsCrossed,
      title: 'Fine Dining',
      description: 'Award-winning restaurants & local cuisine',
      count: '32 properties',
      index: 2,
    },
    {
      icon: Waves,
      title: 'Heated Pools',
      description: 'Year-round swimming with sunset views',
      count: '38 properties',
      index: 3,
    },
    {
      icon: Dumbbell,
      title: 'Fitness Centers',
      description: 'State-of-the-art equipment 24/7',
      count: '29 properties',
      index: 4,
    },
    {
      icon: Briefcase,
      title: 'Business Services',
      description: 'Meeting rooms and high-speed internet',
      count: '22 properties',
      index: 5,
    },
    {
      icon: PawPrint,
      title: 'Pet Welcome',
      description: 'Bring your four-legged golf buddy',
      count: '18 properties',
      index: 6,
    },
    {
      icon: Crown,
      title: 'Concierge',
      description: '24/7 Trail experts at your service',
      count: '12 properties',
      index: 7,
    },
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #1E293B, #0F172A)',
      }}
    >
      {/* Golf Ball Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-white mb-2">
            World-Class Amenities
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            EVERYTHING YOU NEED FOR THE PERFECT STAY
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <AmenityCard key={amenity.title} {...amenity} />
          ))}
        </div>
      </div>
    </section>
  );
}
