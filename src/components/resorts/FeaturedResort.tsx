import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight, Heart, Waves, UtensilsCrossed, Flag, Dumbbell, Car, PawPrint, Tag } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function FeaturedResort() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=800&fit=crop',
  ];

  const thumbnails = [
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=200&h=150&fit=crop',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/10 mb-4">
            <span 
              className="tracking-[3px] text-[#FF6B35]"
              style={{ fontSize: '12px' }}
            >
              ⭐ TRAIL HEADQUARTERS
            </span>
          </div>
          <h2 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}
          >
            The Grand Route 66 Lodge
          </h2>
          <p 
            className="tracking-[2px] text-[#64748B] uppercase"
            style={{ fontSize: '16px' }}
          >
            Our Flagship Property in Oklahoma City
          </p>
        </motion.div>

        {/* Featured Resort Card */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex max-lg:flex-col">
            {/* Left Side: Image Gallery */}
            <div className="lg:w-[70%] relative">
              {/* Main Image */}
              <div className="relative h-[550px] max-lg:h-[400px]">
                <ImageWithFallback
                  src={images[currentImage]}
                  alt="Resort view"
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-[#0F172A]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-[#0F172A]" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm">
                  <span 
                    className="text-white"
                    style={{ fontSize: '13px' }}
                  >
                    {currentImage + 1} of 24
                  </span>
                </div>

                {/* View Gallery Button */}
                <button className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all">
                  <span 
                    className="text-[#0F172A]"
                    style={{ fontSize: '13px' }}
                  >
                    View Gallery
                  </span>
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 p-4 bg-[#F9FAFB]">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all ${
                      currentImage === index ? 'ring-2 ring-[#FF6B35] scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Content Panel */}
            <div className="lg:w-[30%] p-8 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div 
                  className="inline-block px-3 py-1 rounded-full bg-[#FF6B35] text-white mb-3"
                  style={{ fontSize: '11px' }}
                >
                  FEATURED PARTNER RESORT
                </div>
                <h3 
                  className="text-[#0F172A] mb-2"
                  style={{ fontSize: '28px' }}
                >
                  Grand Route 66 Lodge
                </h3>
                
                <div className="flex items-center gap-2 text-[#64748B] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span style={{ fontSize: '14px' }}>Oklahoma City, OK</span>
                </div>
                
                <p 
                  className="text-[#64748B] mb-3"
                  style={{ fontSize: '13px' }}
                >
                  0.3 mi from Course #32
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                  <span 
                    className="text-[#0F172A]"
                    style={{ fontSize: '14px' }}
                  >
                    5.0
                  </span>
                  <span 
                    className="text-[#64748B]"
                    style={{ fontSize: '13px' }}
                  >
                    (248 reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="text-[#94A3B8] line-through"
                    style={{ fontSize: '20px' }}
                  >
                    $245
                  </span>
                  <div 
                    className="px-2 py-1 rounded-full bg-[#10B981] text-white"
                    style={{ fontSize: '11px' }}
                  >
                    Trail Member Rate
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span 
                    className="text-[#FF6B35]"
                    style={{ fontSize: '36px' }}
                  >
                    $189
                  </span>
                  <span 
                    className="text-[#64748B]"
                    style={{ fontSize: '14px' }}
                  >
                    /night
                  </span>
                </div>
                <div 
                  className="inline-block px-2 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] mt-2"
                  style={{ fontSize: '12px' }}
                >
                  Save 23%
                </div>
              </div>

              {/* Quick Features */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: Waves, text: 'Heated Pool & Spa', color: '#3B82F6' },
                  { icon: UtensilsCrossed, text: 'Fine Dining Restaurant', color: '#FF6B35' },
                  { icon: Flag, text: 'On-Course Location', color: '#10B981' },
                  { icon: Dumbbell, text: 'Fitness Center', color: '#8B5CF6' },
                  { icon: Car, text: 'Free Parking', color: '#64748B' },
                  { icon: PawPrint, text: 'Pet Friendly', color: '#F59E0B' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                    <span 
                      className="text-[#0F172A]"
                      style={{ fontSize: '14px' }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Offer Banner */}
              <div className="bg-[#FFF7ED] p-4 rounded-lg mb-6">
                <div className="flex items-start gap-2">
                  <Tag className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <div>
                    <p 
                      className="text-[#FF6B35]"
                      style={{ fontSize: '13px' }}
                    >
                      <span className="block">STAY & PLAY PACKAGE:</span>
                      2 Nights + 36 Holes from $399
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mt-auto">
                <Button className="w-full h-[48px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
                  Check Availability
                </Button>
                <Button variant="outline" className="w-full h-[48px] border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10">
                  View Details →
                </Button>
              </div>

              {/* Trust Signal */}
              <div className="mt-4 flex items-center gap-2 text-[#10B981]">
                <span style={{ fontSize: '16px' }}>✓</span>
                <span style={{ fontSize: '13px' }}>Free cancellation up to 48 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
