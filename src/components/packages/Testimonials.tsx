import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "The Gold Champion Pass was the best investment I've made in my golf game. Playing all 66 courses was an unforgettable journey through America's heartland.",
      name: 'John Davidson',
      location: 'Phoenix, Arizona',
      package: 'Gold Champion',
      completionDate: 'September 2025',
      photo: 'testimonial person',
      coursesCompleted: 66,
      totalCourses: 66,
      medallion: 'Gold',
      rating: 5,
    },
    {
      quote: "As a corporate team building event, the tournament package exceeded all expectations. Our team bonded over amazing courses along Route 66.",
      name: 'Sarah Mitchell',
      location: 'Chicago, Illinois',
      package: 'Corporate Tournament',
      completionDate: 'August 2025',
      photo: 'business woman',
      coursesCompleted: 24,
      totalCourses: 24,
      medallion: null,
      rating: 5,
    },
    {
      quote: "The Silver Trail Pass was perfect for me. The Presidential Medallion ceremony was incredibly moving. Highly recommended for serious golfers!",
      name: 'Robert Chen',
      location: 'Los Angeles, California',
      package: 'Silver Trail',
      completionDate: 'October 2025',
      photo: 'asian man golfer',
      coursesCompleted: 33,
      totalCourses: 33,
      medallion: 'Silver',
      rating: 5,
    },
    {
      quote: "My wife and I used the Couples Pass for our anniversary year. Playing golf together across 8 states created memories we'll cherish forever.",
      name: 'Michael & Jennifer Torres',
      location: 'Dallas, Texas',
      package: 'Couples Pass',
      completionDate: 'July 2025',
      photo: 'couple smiling',
      coursesCompleted: 30,
      totalCourses: 30,
      medallion: null,
      rating: 5,
    },
    {
      quote: "The Weekend Warrior package was exactly what I needed. Great value, amazing courses, and the Trail community has been fantastic.",
      name: 'Amanda Rodriguez',
      location: 'Albuquerque, New Mexico',
      package: 'Weekend Warrior',
      completionDate: 'June 2025',
      photo: 'woman golfer',
      coursesCompleted: 15,
      totalCourses: 15,
      medallion: null,
      rating: 5,
    },
    {
      quote: "Taking our family on this golf journey has been incredible. Our kids learned about history, geography, and golf all at once!",
      name: 'David Harrison',
      location: 'Kansas City, Missouri',
      package: 'Family Fun',
      completionDate: 'May 2025',
      photo: 'family portrait',
      coursesCompleted: 20,
      totalCourses: 20,
      medallion: null,
      rating: 5,
    },
  ];

  const visibleTestimonials = 3;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Route 66 road texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #000 0, #000 40px, transparent 40px, transparent 80px)`,
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Trail Champions</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Hear From Our Golfers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid md:grid-cols-3 gap-8 max-md:grid-cols-1">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB] hover:border-[#FF6B35] transition-all"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Quote marks */}
                  <div className="text-[48px] text-[#FF6B35] leading-none mb-2">"</div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[18px] text-[#0F172A] italic mb-6 leading-relaxed min-h-[120px]">
                    {testimonial.quote}
                  </p>

                  {/* Golfer Info */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#E5E7EB]">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-[#F9FAFB] flex-shrink-0">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-1${500000000 + index}?w=80&h=80&fit=crop`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[18px] text-[#0F172A]">{testimonial.name}</h4>
                      <p className="text-[14px] text-[#64748B]">{testimonial.location}</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-[#FF6B35] text-white text-[12px] rounded">
                        {testimonial.package}
                      </span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="flex items-center justify-between">
                    <div>
                      {testimonial.medallion && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 rounded-full ${
                            testimonial.medallion === 'Gold' ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]' :
                            'bg-gradient-to-br from-[#C0C0C0] to-[#A8A8A8]'
                          } flex items-center justify-center`}>
                            <span className="text-white text-[10px]">🏅</span>
                          </div>
                          <span className="text-[14px] text-[#0F172A]">{testimonial.medallion} Medallion</span>
                        </div>
                      )}
                      <div className="text-[14px] text-[#64748B]">
                        Completed: {testimonial.completionDate}
                      </div>
                    </div>

                    {/* Progress Ring */}
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#E5E7EB"
                          strokeWidth="4"
                          fill="none"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#10B981"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                          whileInView={{ 
                            strokeDashoffset: 2 * Math.PI * 28 * (1 - testimonial.coursesCompleted / testimonial.totalCourses)
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[12px] text-[#0F172A]">
                          {testimonial.coursesCompleted}/{testimonial.totalCourses}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#FF6B35] text-[#FF6B35] flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#FF6B35] w-8' : 'bg-[#E5E7EB]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#FF6B35] text-[#FF6B35] flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button className="h-[56px] px-8 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl text-[18px]">
            Start Your Story →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
