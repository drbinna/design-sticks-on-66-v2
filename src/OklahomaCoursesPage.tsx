import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';
import { MapPin, Phone, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function OklahomaCoursesPage() {
  const featuredCourses = [
    {
      name: 'Karsten Creek Golf Club',
      location: 'Stillwater, OK',
      description: 'Home to Oklahoma State University golf, Karsten Creek is consistently ranked among the top public courses in America. Designed by Tom Fazio, this championship layout features dramatic elevation changes, strategic bunkering, and pristine conditions.',
      image: 'https://images.unsplash.com/photo-1700976857685-b33f30513d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwb2tsYWhvbWF8ZW58MXx8fHwxNzYyNDQ4NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      phone: '(405) 743-1658',
      website: 'https://karstencreek.com'
    },
    {
      name: 'Forest Ridge Golf Club',
      location: 'Broken Arrow, OK',
      description: 'This Robert Trent Jones Jr. design offers a challenging yet fair test of golf through rolling hills and mature forests. Known for excellent playing conditions year-round and a welcoming atmosphere for all skill levels.',
      image: 'https://images.unsplash.com/photo-1760866272807-b04595c6d046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGlvbnNoaXAlMjBnb2xmJTIwY291cnNlfGVufDF8fHx8MTc2MjQ0ODQzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      phone: '(918) 357-2282',
      website: 'https://forestridgegolf.com'
    },
    {
      name: 'Jimmie Austin OU Golf Club',
      location: 'Norman, OK',
      description: 'The home course for University of Oklahoma golf teams, this championship layout features Bermuda fairways, bent grass greens, and strategic design that rewards accuracy. A true collegiate championship venue open to the public.',
      image: 'https://images.unsplash.com/photo-1654227391114-be378b73f315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwZmFpcndheXxlbnwxfHx8fDE3NjI0NDg0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      phone: '(405) 325-6716',
      website: 'https://ougolfclub.com'
    },
    {
      name: 'Shangri-La Golf Course',
      location: 'Afton, OK',
      description: 'Nestled in the foothills of the Ozark Mountains on the shores of Grand Lake, Shangri-La offers stunning natural beauty combined with exceptional golf. The course features dramatic elevation changes and scenic lake views throughout.',
      image: 'https://images.unsplash.com/photo-1761400025076-8fec91f620f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNDQ1MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      phone: '(918) 257-4204',
      website: 'https://shangrilaok.com'
    }
  ];

  const otherCourses = [
    { name: 'Bailey Ranch Golf Club', location: 'Owasso, OK' },
    { name: 'Boiling Springs Golf Club', location: 'Woodward, OK' },
    { name: 'Cedar Creek Golf Course', location: 'Broken Bow, OK' },
    { name: 'Cherokee Hills Golf Club', location: 'Catoosa, OK' },
    { name: 'Cimarron National Golf Club', location: 'Guthrie, OK' },
    { name: 'Coffee Creek Golf Course', location: 'Edmond, OK' },
    { name: 'Creek Golf Course at Angel Fire', location: 'Midwest City, OK' },
    { name: 'Dornick Hills Country Club', location: 'Ardmore, OK' },
    { name: 'Eagle Creek Golf Club', location: 'Joplin, MO' },
    { name: 'Earlywine Park Golf Course', location: 'Oklahoma City, OK' },
    { name: 'Fountainhead State Park Golf Course', location: 'Checotah, OK' },
    { name: 'Gaillardia Country Club', location: 'Oklahoma City, OK' },
    { name: 'Hawk Ridge Golf Course', location: 'Skiatook, OK' },
    { name: 'Heritage Hills Golf Course', location: 'Claremore, OK' },
    { name: 'Kicking Bird Golf Club', location: 'Edmond, OK' },
    { name: 'LaFortune Park Golf Course', location: 'Tulsa, OK' },
    { name: 'Lake Hefner Golf Club', location: 'Oklahoma City, OK' },
    { name: 'Lincoln Park Golf Course', location: 'Oklahoma City, OK' },
    { name: 'Meadowbrook Golf Course', location: 'Tulsa, OK' },
    { name: 'Mohawk Park Golf Club', location: 'Tulsa, OK' },
    { name: 'Oak Tree Country Club', location: 'Edmond, OK' },
    { name: 'Page Belcher Golf Course', location: 'Tulsa, OK' },
    { name: 'Patriot Golf Club', location: 'Owasso, OK' },
    { name: 'Pecan Valley Golf Course', location: 'Durant, OK' },
    { name: 'Riverside Golf Course', location: 'Tulsa, OK' },
    { name: 'Roman Nose State Park Golf Course', location: 'Watonga, OK' },
    { name: 'South Lakes Golf Course', location: 'Jenks, OK' },
    { name: 'Stillwater Country Club', location: 'Stillwater, OK' },
    { name: 'Tenkiller State Park Golf Course', location: 'Vian, OK' },
    { name: 'The Clubs at Houston Oaks', location: 'Howe, OK' },
    { name: 'The Golf Club of Oklahoma', location: 'Broken Arrow, OK' },
    { name: 'The Territory Golf & Country Club', location: 'Duncan, OK' },
    { name: 'Trosper Park Golf Course', location: 'Oklahoma City, OK' },
    { name: 'Twin Hills Golf & Country Club', location: 'Oklahoma City, OK' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#8b4789]/10 to-[#d4567f]/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Back to Trail</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="mb-6 tracking-tight text-black"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '700' }}
            >
              Oklahoma Public Courses
            </h1>
            <p
              className="text-black/60 max-w-3xl"
              style={{ fontSize: '18px', lineHeight: '1.7' }}
            >
              Discover Oklahoma's finest public golf courses along Route 66. From championship layouts 
              to scenic state park courses, experience the diverse and challenging golf that the Sooner State has to offer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.h2
            className="mb-12 tracking-tight text-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Courses
          </motion.h2>

          <div className="space-y-16">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <motion.div
                    className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[16/10] relative">
                      <ImageWithFallback
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h3
                      className="mb-3 tracking-tight text-black"
                      style={{ fontSize: '32px', fontWeight: '700' }}
                    >
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-black/60">
                      <MapPin className="w-4 h-4" />
                      <span style={{ fontSize: '16px' }}>{course.location}</span>
                    </div>
                    <p
                      className="mb-6 text-black/70"
                      style={{ fontSize: '16px', lineHeight: '1.7' }}
                    >
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`tel:${course.phone.replace(/\D/g, '')}`}
                        className="inline-flex items-center gap-2 text-black hover:text-[#8b4789] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{course.phone}</span>
                      </a>
                      <a
                        href={course.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#8b4789] hover:text-[#d4567f] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Visit Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Public Courses */}
      <section className="py-20 bg-gradient-to-br from-[#8b4789]/5 to-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.h2
            className="mb-12 tracking-tight text-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Additional Public Courses
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {otherCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-lg p-6 border border-black/10 hover:border-[#8b4789]/30 hover:shadow-lg transition-all duration-300"
              >
                <h3
                  className="mb-2 text-black"
                  style={{ fontSize: '18px', fontWeight: '600' }}
                >
                  {course.name}
                </h3>
                <div className="flex items-center gap-2 text-black/60">
                  <MapPin className="w-3.5 h-3.5" />
                  <span style={{ fontSize: '14px' }}>{course.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-black/60" style={{ fontSize: '14px', lineHeight: '1.7' }}>
              Course information sourced from{' '}
              <a
                href="https://golfoklahoma.org/oklahoma-public-course-listings/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b4789] hover:text-[#d4567f] transition-colors"
                style={{ fontWeight: '600' }}
              >
                Golf Oklahoma
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#8b4789] to-[#d4567f] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            className="mb-6 tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Tee Off?
          </motion.h2>
          <motion.p
            className="mb-8 text-white/90 max-w-2xl mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Book your tee times at Oklahoma's best public courses and experience world-class golf along Route 66.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/tee-times"
              className="inline-block bg-white text-[#8b4789] px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
              style={{ fontSize: '16px', fontWeight: '600' }}
            >
              Book Tee Times
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
