import { motion } from 'motion/react';
import { Play, Eye, Clock, Rotate3D, Target, Home, Ruler } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TourCardProps {
  name: string;
  location: string;
  image: string;
  highlights: string[];
  duration: string;
  views: string;
  hasVR: boolean;
  index: number;
}

function TourCard({ name, location, image, highlights, duration, views, hasVR, index }: TourCardProps) {
  return (
    <motion.div
      className="bg-[#1E293B] rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      {/* 360° Preview Image */}
      <div className="relative h-[280px] overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* 360° Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
          <span className="text-[12px] text-[#0F172A]">360° Virtual Tour</span>
        </div>

        {/* Play Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white group-hover:bg-[#FF6B35] transition-all">
            <Play className="w-10 h-10 text-white fill-white ml-1" />
          </div>
        </motion.div>

        {/* VR Compatible Badge */}
        {hasVR && (
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#10B981]/90 backdrop-blur-sm">
            <span className="text-[11px] text-white">VR Compatible</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[20px] text-white mb-2">{name}</h3>
        <p className="text-[14px] text-[#94A3B8] mb-4">{location}</p>

        {/* Tour Highlights */}
        <div className="mb-4">
          <p className="text-[13px] text-[#64748B] mb-2">Tour highlights:</p>
          <div className="grid grid-cols-2 gap-2">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                <span className="text-[12px] text-[#E5E7EB]">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#334155]">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <Clock className="w-4 h-4" />
            <span className="text-[13px]">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <Eye className="w-4 h-4" />
            <span className="text-[13px]">{views}</span>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full h-[44px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
          Start Virtual Tour
        </Button>
      </div>
    </motion.div>
  );
}

export default function VirtualTours() {
  const tours: TourCardProps[] = [
    {
      name: 'Grand Route 66 Lodge',
      location: 'Oklahoma City, OK',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
      highlights: ['Presidential Suite', 'Golf Course Views', 'Pool & Spa Area', 'Restaurant'],
      duration: '3 minutes',
      views: '1,234 views',
      hasVR: true,
      index: 0,
    },
    {
      name: 'Santa Monica Beach Hotel',
      location: 'Santa Monica, CA',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      highlights: ['Ocean View Suite', 'Rooftop Bar', 'Beachfront', 'Spa Facilities'],
      duration: '4 minutes',
      views: '2,156 views',
      hasVR: true,
      index: 1,
    },
    {
      name: 'Grand Canyon Lodge',
      location: 'Flagstaff, AZ',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      highlights: ['Canyon Views', 'Championship Course', 'Infinity Pool', 'Fine Dining'],
      duration: '5 minutes',
      views: '3,421 views',
      hasVR: true,
      index: 2,
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-white mb-2">
            Take a Virtual Tour
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            EXPLORE BEFORE YOU BOOK
          </p>
        </motion.div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.name} {...tour} />
          ))}
        </div>

        {/* Interactive Features Note */}
        <motion.div
          className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Rotate3D, label: 'Full rotation' },
              { icon: Target, label: 'Interactive hotspots' },
              { icon: Home, label: 'Dollhouse view' },
              { icon: Ruler, label: 'Floor plan overlay' },
            ].map((feature, index) => (
              <div key={feature.label} className="text-white">
                <feature.icon className="w-10 h-10 text-[#FF6B35] mx-auto mb-2" />
                <div className="text-[13px] text-[#94A3B8]">{feature.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
