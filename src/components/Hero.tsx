import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from 'figma:asset/40b9d5cbcfbfffba079ba2b791062600495ac823.png';

const backgroundImage = heroImage;

const golfCourses = [
  {
    id: 1,
    name: 'Route 66 Championship',
    location: 'Illinois',
    image: heroImage,
  },
  {
    id: 2,
    name: 'Desert Canyon Vista',
    location: 'New Mexico',
    image: 'https://images.unsplash.com/photo-1694636507260-8b2428e3b738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBnb2xmJTIwY291cnNlJTIwYWVyaWFsfGVufDF8fHx8MTc2MDEyMTk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Mountain Ridge Championship',
    location: 'Arizona',
    image: 'https://images.unsplash.com/photo-1715761920143-23ec33f378d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGdvbGYlMjBjb3Vyc2UlMjBzY2VuaWN8ZW58MXx8fHwxNzYwMTIxOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Coastal Links Classic',
    location: 'California',
    image: 'https://images.unsplash.com/photo-1629421769761-3247182e1bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5rcyUyMGdvbGYlMjBjb3Vyc2UlMjBvY2VhbnxlbnwxfHx8fDE3NjAxMjE5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Golden Sunset Course',
    location: 'Oklahoma',
    image: 'https://images.unsplash.com/photo-1648122532741-7e69d419f884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwc3Vuc2V0JTIwdmlzdGF8ZW58MXx8fHwxNzYwMTIxOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Heritage Fairways',
    location: 'Missouri',
    image: 'https://images.unsplash.com/photo-1712411880136-cc82a565bf71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGlvbnNoaXAlMjBnb2xmJTIwY291cnNlJTIwZmFpcndheXxlbnwxfHx8fDE3NjAxMjE5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Hero() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-20 md:pb-0">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center center',
          }}
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Waving Flag Effect Overlay */}
          <div 
            className="absolute"
            style={{
              top: '15%',
              right: '20%',
              width: '150px',
              height: '100px',
              animation: 'flagWave 3s ease-in-out infinite',
              transformOrigin: 'left center',
              pointerEvents: 'none',
              mixBlendMode: 'overlay',
              opacity: 0.3,
            }}
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
        {/* Main Typography Content */}
        <motion.div
          style={{ y: textY }}
          className="space-y-6 md:space-y-8 max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        >
            {/* Bold Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
            >
              <motion.h1
                className="tracking-tight text-white leading-tight drop-shadow-2xl"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: '700' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                America's first{' '}
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ffd700] to-[#ff8c42] bg-clip-text text-transparent">
                  national golf trail.
                </span>
              </motion.h1>
            </motion.div>

            {/* Descriptive Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-2 max-w-md"
            >
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.button
                onClick={() => navigate('/trail')}
                className="group bg-gradient-to-r from-[#ff6b35] to-[#dc143c] hover:from-[#ff8c42] hover:to-[#ff6b35] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-2xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="tracking-[0.1em] uppercase" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Discover the Trail
                </span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.p
                className="mt-4 text-white/70 drop-shadow-md text-center md:text-left"
                style={{ fontSize: '14px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                Experience championship golf along America's Main Street.
              </motion.p>
            </motion.div>

            {/* Route 66 Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffd700] to-[#ffb700] flex items-center justify-center shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-black tracking-tight" style={{ fontSize: '24px', fontWeight: '700' }}>66</span>
              </motion.div>
              <div>
                <p className="text-white tracking-[0.15em] uppercase drop-shadow-lg" style={{ fontSize: '11px', fontWeight: '700' }}>
                  Historic Route
                </p>
                <p className="text-white/80 drop-shadow-md" style={{ fontSize: '13px' }}>
                  America's Main Street
                </p>
              </div>
            </motion.div>
          </motion.div>

        {/* Small Carousel - Bottom Right */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 80 }}
          className="absolute bottom-8 right-4 lg:right-8 w-64 lg:w-72 hidden md:block"
        >
            <Carousel 
              className="w-full opacity-95 hover:opacity-100 transition-opacity duration-300"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
            >
              <CarouselContent>
                {golfCourses.map((course, index) => (
                  <CarouselItem key={course.id}>
                    <motion.div
                      className="relative rounded-xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rounded-xl overflow-hidden relative aspect-[16/10]">
                        <motion.img
                          src={course.image}
                          alt={`${course.name} golf course`}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 1.5 }}
                        />
                        
                        {/* Subtle gradient overlay */}
                        <div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(139, 71, 137, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
                          }}
                        />

                        {/* Course Info Overlay */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <motion.h3 
                            className="text-white tracking-tight mb-0.5"
                            style={{ fontSize: '14px', fontWeight: '700' }}
                          >
                            {course.name}
                          </motion.h3>
                          <motion.p 
                            className="text-white/80 flex items-center gap-1.5"
                            style={{ fontSize: '11px' }}
                          >
                            <span className="inline-block w-1 h-1 rounded-full bg-[#ffd700]"></span>
                            {course.location}
                          </motion.p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <CarouselPrevious className="left-1 bg-gradient-to-r from-[#ff6b35] to-[#dc143c] hover:from-[#ff8c42] hover:to-[#ff6b35] text-white border-none shadow-xl w-8 h-8 hover:scale-110 transition-all" />
              <CarouselNext className="right-1 bg-gradient-to-r from-[#ff6b35] to-[#dc143c] hover:from-[#ff8c42] hover:to-[#ff6b35] text-white border-none shadow-xl w-8 h-8 hover:scale-110 transition-all" />
            </Carousel>

            {/* Carousel Indicators */}
            <motion.div 
              className="flex justify-center gap-1.5 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {golfCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="h-1 rounded-full cursor-pointer"
                  style={{ 
                    width: currentSlide === index ? '20px' : '6px',
                    backgroundColor: currentSlide === index ? '#ff6b35' : 'rgba(255,255,255,0.4)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="rounded-full p-2 bg-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
