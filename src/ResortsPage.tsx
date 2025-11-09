import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import ResortsHero from './components/resorts/ResortsHero';
import FeaturedResort from './components/resorts/FeaturedResort';
import ResortsGrid from './components/resorts/ResortsGrid';
import ResortsInfoSimple from './components/resorts/ResortsInfoSimple';

export default function ResortsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <ResortsHero />
      <FeaturedResort />
      <ResortsGrid />
      <ResortsInfoSimple />
      
      <Footer />
    </div>
  );
}
