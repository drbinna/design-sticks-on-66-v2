import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, MapPin, Bed, Users, Sparkles, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ResortCardProps {
  name: string;
  location: string;
  state: string;
  distance: string;
  image: string;
  tier: 'Luxury' | 'Premium' | 'Mid-Range' | 'Budget';
  tierColor: string;
  rating: number;
  reviews: number;
  bedType: string;
  maxGuests: number;
  amenitiesCount: number;
  features: string[];
  price: number;
  originalPrice?: number;
  memberSavings?: number;
  availability: 'available' | 'limited' | 'soldout';
  photoCount: number;
  hasVirtualTour?: boolean;
  isTrailExclusive?: boolean;
  isFeatured?: boolean;
  index: number;
}

function ResortCard({
  name,
  location,
  state,
  distance,
  image,
  tier,
  tierColor,
  rating,
  reviews,
  bedType,
  maxGuests,
  amenitiesCount,
  features,
  price,
  originalPrice,
  memberSavings,
  availability,
  photoCount,
  hasVirtualTour,
  isTrailExclusive,
  isFeatured,
  index,
}: ResortCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const availabilityConfig = {
    available: { color: '#10B981', text: 'Available today' },
    limited: { color: '#FFD700', text: 'Limited availability' },
    soldout: { color: '#DC2626', text: 'Sold out for selected dates' },
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#FF6B35] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Image Section */}
      <div className="relative h-[280px] overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top-Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isTrailExclusive && (
            <div 
              className="px-3 py-1 rounded-full bg-[#FF6B35] text-white backdrop-blur-sm"
              style={{ fontSize: '11px' }}
            >
              Trail Exclusive
            </div>
          )}
          {isFeatured && (
            <div 
              className="px-3 py-1 rounded-full bg-[#FFD700] text-[#0F172A] backdrop-blur-sm"
              style={{ fontSize: '11px' }}
            >
              Featured
            </div>
          )}
          <div 
            className="px-3 py-1 rounded-full text-white backdrop-blur-sm"
            style={{ backgroundColor: tierColor, fontSize: '11px' }}
          >
            {tier}
          </div>
        </div>

        {/* Top-Right Favorite */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-[#DC2626] text-[#DC2626]' : 'text-[#64748B]'}`}
          />
        </button>

        {/* Bottom Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 text-white"
            style={{ fontSize: '13px' }}
          >
            <span>{photoCount} photos</span>
          </div>
          {hasVirtualTour && (
            <div className="px-2 py-1 rounded bg-white/90 backdrop-blur-sm">
              <span 
                className="text-[#0F172A]"
                style={{ fontSize: '11px' }}
              >
                Virtual Tour
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Name & Rating */}
        <div className="mb-4">
          <h3 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: '20px' }}
          >
            {name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-[#FFD700] text-[#FFD700]' : 'text-[#E5E7EB]'}`}
                />
              ))}
            </div>
            <span 
              className="text-[#0F172A]"
              style={{ fontSize: '14px' }}
            >
              {rating}
            </span>
            <span 
              className="text-[#64748B]"
              style={{ fontSize: '13px' }}
            >
              ({reviews})
            </span>
          </div>
          
          <div className="flex items-start gap-1 text-[#64748B]">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span style={{ fontSize: '14px' }}>{location}, {state}</span>
          </div>
        </div>

        {/* Key Feature - Just show first one */}
        <div className="mb-4 pb-4 border-b border-[#E5E7EB]">
          <div className="flex items-start gap-2">
            <span className="text-[#10B981] mt-0.5">•</span>
            <span 
              className="text-[#0F172A]"
              style={{ fontSize: '13px' }}
            >
              {features[0]}
            </span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          {originalPrice && (
            <div className="flex items-center gap-2 mb-1">
              <span 
                className="text-[#94A3B8] line-through"
                style={{ fontSize: '16px' }}
              >
                ${originalPrice}
              </span>
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span 
              className="text-[#FF6B35]"
              style={{ fontSize: '28px' }}
            >
              ${price}
            </span>
            <span 
              className="text-[#64748B]"
              style={{ fontSize: '13px' }}
            >
              /night
            </span>
          </div>
          {memberSavings && (
            <p 
              className="text-[#10B981] mt-1"
              style={{ fontSize: '12px' }}
            >
              Member saves ${memberSavings}
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <Button className="w-full h-[44px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
            Book Now
          </Button>
          <button 
            className="w-full text-center text-[#FF6B35] hover:underline"
            style={{ fontSize: '14px' }}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResortsGrid() {
  const resorts: ResortCardProps[] = [
    {
      name: 'Route 66 Motor Lodge',
      location: 'Springfield',
      state: 'Kansas',
      distance: '0.8 mi from Course #18',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      tier: 'Budget',
      tierColor: '#10B981',
      rating: 4.3,
      reviews: 124,
      bedType: 'Queen Bed',
      maxGuests: 2,
      amenitiesCount: 8,
      features: [
        'Classic Americana Charm',
        'Free parking & WiFi',
        'Vintage décor & neon signs',
      ],
      price: 79,
      availability: 'available',
      photoCount: 18,
      index: 0,
    },
    {
      name: 'Fairfield Inn & Suites',
      location: 'St. Louis',
      state: 'Missouri',
      distance: '1.2 mi from Course #7',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      tier: 'Mid-Range',
      tierColor: '#FF6B35',
      rating: 4.5,
      reviews: 289,
      bedType: 'King Suite',
      maxGuests: 4,
      amenitiesCount: 12,
      features: [
        'Comfortable & Convenient',
        'Pool & breakfast included',
        'Modern fitness center',
      ],
      price: 129,
      availability: 'available',
      photoCount: 24,
      hasVirtualTour: true,
      index: 1,
    },
    {
      name: 'The Golf Resort at Route 66',
      location: 'Oklahoma City',
      state: 'Oklahoma',
      distance: '0.1 mi from Course #32',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
      tier: 'Premium',
      tierColor: '#FFD700',
      rating: 4.8,
      reviews: 412,
      bedType: 'Deluxe King',
      maxGuests: 4,
      amenitiesCount: 18,
      features: [
        'Championship course on-site',
        '18-hole course, spa & restaurant',
        'Trail member exclusive benefits',
      ],
      price: 189,
      originalPrice: 245,
      memberSavings: 30,
      availability: 'available',
      photoCount: 32,
      hasVirtualTour: true,
      isTrailExclusive: true,
      isFeatured: true,
      index: 2,
    },
    {
      name: 'Grand Canyon Lodge & Golf Club',
      location: 'Flagstaff',
      state: 'Arizona',
      distance: '2.5 mi from Course #55',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      tier: 'Luxury',
      tierColor: '#8B5CF6',
      rating: 4.9,
      reviews: 567,
      bedType: 'Presidential Suite',
      maxGuests: 6,
      amenitiesCount: 25,
      features: [
        'Legendary Southwestern Hospitality',
        'Fine dining & infinity pool',
        'Concierge & spa services',
      ],
      price: 299,
      originalPrice: 399,
      memberSavings: 50,
      availability: 'limited',
      photoCount: 45,
      hasVirtualTour: true,
      index: 3,
    },
    {
      name: 'The Santa Monica Beach Hotel',
      location: 'Santa Monica',
      state: 'California',
      distance: '0.5 mi from Course #66',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      tier: 'Premium',
      tierColor: '#FFD700',
      rating: 4.7,
      reviews: 623,
      bedType: 'Ocean View King',
      maxGuests: 4,
      amenitiesCount: 20,
      features: [
        'Where the Trail Meets the Pacific',
        'Ocean views & rooftop bar',
        'Valet parking included',
      ],
      price: 245,
      originalPrice: 310,
      memberSavings: 40,
      availability: 'available',
      photoCount: 38,
      hasVirtualTour: true,
      isTrailExclusive: true,
      index: 4,
    },
    {
      name: 'Blue Swallow Motel',
      location: 'Tucumcari',
      state: 'New Mexico',
      distance: '0.3 mi from Course #44',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      tier: 'Mid-Range',
      tierColor: '#FF6B35',
      rating: 4.6,
      reviews: 201,
      bedType: 'Double Queen',
      maxGuests: 4,
      amenitiesCount: 10,
      features: [
        'Historic Route 66 Landmark',
        'Restored vintage motor court',
        'Neon signs & photo tours',
      ],
      price: 99,
      availability: 'available',
      photoCount: 22,
      isTrailExclusive: true,
      index: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}
          >
            All Trail Accommodations
          </h2>
          <p 
            className="text-[#64748B]"
            style={{ fontSize: '16px' }}
          >
            Showing {resorts.length} resorts along Route 66
          </p>
        </motion.div>

        {/* Resort Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resorts.map((resort) => (
            <ResortCard key={resort.name} {...resort} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            variant="outline" 
            className="h-[48px] px-8 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10"
          >
            Load More Resorts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
