import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { TeeTimesHero } from './components/teetimes/TeeTimesHero';
import { FilterSortBar } from './components/teetimes/FilterSortBar';
import { FeaturedCoursesCarousel } from './components/teetimes/FeaturedCoursesCarousel';
import { SpecialPackages } from './components/teetimes/SpecialPackages';
import { BookingInfo } from './components/teetimes/BookingInfo';
import { TeeTimesFooterCTA } from './components/teetimes/TeeTimesFooterCTA';
import { Footer } from './components/Footer';

export default function TeeTimesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      <ScrollProgress />

      {/* Hero with Search */}
      <TeeTimesHero />

      {/* Sticky Filter Bar */}
      <FilterSortBar />

      {/* Featured Courses Carousel */}
      <FeaturedCoursesCarousel />

      {/* Special Packages */}
      <SpecialPackages />

      {/* Booking Info - Tips & Policies Combined */}
      <BookingInfo />

      {/* Footer CTA */}
      <TeeTimesFooterCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
