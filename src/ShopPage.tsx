import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ShopHero } from './components/shop/ShopHero';
import { ShopCategories } from './components/shop/ShopCategories';
import { FeaturedProducts } from './components/shop/FeaturedProducts';
import { TrailExclusives } from './components/shop/TrailExclusives';
import { ShopInfo } from './components/shop/ShopInfo';
import { ShopFinalCTA } from './components/shop/ShopFinalCTA';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <ShopHero />
      <ShopCategories />
      <FeaturedProducts />
      <TrailExclusives />
      <ShopInfo />
      <ShopFinalCTA />
      <Footer />
    </div>
  );
}
