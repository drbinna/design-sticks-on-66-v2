import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import shangrilaImage from 'figma:asset/6bf6dc00e66a7775333ab285e5cfc65347fb66ae.png';

const featuredCourses = [
  {
    id: 1,
    name: 'Shangri-La Golf Course',
    city: 'Tulsa',
    state: 'OK',
    image: shangrilaImage,
    originalPrice: 75,
    discountPrice: 60,
    discount: 'TRAIL MEMBER SPECIAL',
    stateColor: '#F97316',
    link: 'https://www.shangrilaok.com/golf',
  },
  {
    id: 2,
    name: 'Route 66 Heritage Links',
    city: 'Springfield',
    state: 'MO',
    image: 'https://images.unsplash.com/photo-1574090069400-a65ea9f84f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwZ3JlZW4lMjBmYWlyd2F5fGVufDF8fHx8MTc2MDEwOTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    originalPrice: 56,
    discountPrice: 45,
    discount: '20% OFF MORNING ROUNDS',
    stateColor: '#10B981',
  },
  {
    id: 3,
    name: 'Desert Vista Championship',
    city: 'Flagstaff',
    state: 'AZ',
    image: 'https://images.unsplash.com/photo-1650300738269-2f86bccc5b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBhcml6b25hJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2MDEwOTE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    originalPrice: 85,
    discountPrice: 68,
    discount: '20% OFF TWILIGHT GOLF',
    stateColor: '#B7410E',
  },
  {
    id: 4,
    name: 'Golden Sunset Course',
    city: 'Tulsa',
    state: 'OK',
    image: 'https://images.unsplash.com/photo-1648122532741-7e69d419f884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwc3Vuc2V0JTIwdmlzdGF8ZW58MXx8fHwxNzYwMTIxOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    originalPrice: 65,
    discountPrice: 52,
    discount: '20% OFF WEEKEND ROUNDS',
    stateColor: '#F97316',
  },
];

export function FeaturedCoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCourses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length);
  };

  const visibleCourses = [
    featuredCourses[currentIndex],
    featuredCourses[(currentIndex + 1) % featuredCourses.length],
    featuredCourses[(currentIndex + 2) % featuredCourses.length],
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '14px',
              letterSpacing: '3px',
              color: '#FF6B35',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Special Tee Time Offers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '48px', fontWeight: '700' }}
          >
            Featured Trail Courses
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative px-8 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleCourses.map((course, idx) => {
              const CardWrapper = course.link ? 'a' : 'div';
              const linkProps = course.link ? { href: course.link, target: '_blank', rel: 'noopener noreferrer' } : {};
              
              return (
                <motion.div
                  key={`${course.id}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <CardWrapper 
                    {...linkProps}
                    className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                {/* Image Section */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
                    }}
                  />
                  
                  {/* Featured Badge */}
                  <Badge
                    className="absolute top-4 left-4"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                      color: 'white',
                    }}
                  >
                    Featured
                  </Badge>

                  {/* State Badge */}
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
                    style={{ backgroundColor: course.stateColor }}
                  >
                    {course.state}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>
                      {course.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B' }}>
                      {course.city}, {course.state}
                    </p>
                  </div>

                  {/* Special Offer Banner */}
                  <div 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ backgroundColor: '#FFF7ED' }}
                  >
                    <Tag className="w-4 h-4 text-[#DC2626]" />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#DC2626' }}>
                      {course.discount}
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#FF6B35' }}>
                        ${course.discountPrice}
                      </span>
                      <span style={{ fontSize: '14px', color: '#FF6B35' }}>/player</span>
                      <br />
                      <span 
                        style={{ 
                          fontSize: '16px', 
                          color: '#94A3B8',
                          textDecoration: 'line-through',
                        }}
                      >
                        ${course.originalPrice}
                      </span>
                    </div>
                    <Button 
                      variant="outline"
                      style={{ 
                        borderColor: '#FF6B35',
                        color: '#FF6B35',
                      }}
                    >
                      View Times
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardWrapper>
            </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{ zIndex: 10 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F172A]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{ zIndex: 10 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F172A]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredCourses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: idx === currentIndex ? '#FF6B35' : '#E5E7EB',
                  width: idx === currentIndex ? '24px' : '8px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
