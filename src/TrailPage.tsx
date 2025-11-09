import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { TrailHero } from './components/trail/TrailHero';
import { TrailOverview } from './components/trail/TrailOverview';
import { TrailQuickFAQ } from './components/trail/TrailQuickFAQ';
import { TrailFooterCTA } from './components/trail/TrailFooterCTA';
import { Footer } from './components/Footer';

export default function TrailPage() {
  return (
    <motion.div 
      className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navigation />
      <TrailHero />
      <TrailOverview />
      <TrailQuickFAQ />
      <TrailFooterCTA />
      <Footer />
    </motion.div>
  );
}
