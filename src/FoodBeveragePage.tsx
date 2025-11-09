import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { FoodHero } from './components/food/FoodHero';
import { FeaturedDining } from './components/food/FeaturedDining';
import FoodInfoSimple from './components/food/FoodInfoSimple';

export default function FoodBeveragePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <FoodHero />
      <FeaturedDining />
      <FoodInfoSimple />
      <Footer />
    </div>
  );
}
