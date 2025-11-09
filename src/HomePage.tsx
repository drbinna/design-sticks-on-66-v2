import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { StateCards } from './components/StateCards';
import { FeaturedCourses } from './components/FeaturedCourses';
import { PresidentialMedallions } from './components/PresidentialMedallions';
import { Anniversary } from './components/Anniversary';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <motion.div 
      className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Stats />
      <StateCards />
      <FeaturedCourses />
      <PresidentialMedallions />
      <Anniversary />
      <CTABanner />
      <Footer />
    </motion.div>
  );
}
