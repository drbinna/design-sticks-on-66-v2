import { motion } from 'motion/react';
import { MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import shangrilaImage from 'figma:asset/6bf6dc00e66a7775333ab285e5cfc65347fb66ae.png';

export function FeaturedCourses() {
  const courses = [
    {
      name: 'Shangri-La Golf Course',
      location: 'Tulsa, Oklahoma',
      image: shangrilaImage,
      rating: 4.8,
      par: 72,
      link: 'https://www.shangrilaok.com/golf',
    },
    {
      name: 'Route 66 Heritage Links',
      location: 'Springfield, Missouri',
      image: 'https://images.unsplash.com/photo-1574090069400-a65ea9f84f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwZ3JlZW4lMjBmYWlyd2F5fGVufDF8fHx8MTc2MDEwOTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      par: 71,
    },
    {
      name: 'Desert Vista Championship',
      location: 'Flagstaff, Arizona',
      image: 'https://images.unsplash.com/photo-1650300738269-2f86bccc5b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBhcml6b25hJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2MDEwOTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      par: 72,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f4e8c1] to-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="mb-4 tracking-tight text-black"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '700' }}
          >
            Featured Courses
          </h2>
          <p className="text-black/60 tracking-[0.1em] uppercase max-w-2xl mx-auto" style={{ fontSize: '16px' }}>
            Discover championship golf experiences along the Mother Road
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const CardWrapper = course.link ? 'a' : 'div';
            const linkProps = course.link ? { href: course.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            
            return (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <CardWrapper {...linkProps} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Animated Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#ffd700] text-[#ffd700]" />
                      <span className="text-black" style={{ fontSize: '14px', fontWeight: '600' }}>
                        {course.rating}
                      </span>
                    </div>

                    {/* Par Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white tracking-[0.1em] uppercase" style={{ fontSize: '12px', fontWeight: '600' }}>
                        Par {course.par}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 tracking-tight text-black group-hover:text-[#ff6b35] transition-colors" style={{ fontSize: '24px', fontWeight: '700' }}>
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-2 text-black/60">
                      <MapPin className="w-4 h-4" />
                      <span style={{ fontSize: '15px' }}>{course.location}</span>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-black hover:bg-[#2a2a2a] text-white px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="tracking-[0.1em] uppercase" style={{ fontSize: '15px', fontWeight: '600' }}>
              View All Courses
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
