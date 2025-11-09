import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import TrailPage from './TrailPage';
import TeeTimesPage from './TeeTimesPage';
import MembershipPage from './MembershipPage';
import ContactPage from './ContactPage';
import TournamentsPage from './TournamentsPage';
import FoodBeveragePage from './FoodBeveragePage';
import ShopPage from './ShopPage';
import OklahomaCoursesPage from './OklahomaCoursesPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trail" element={<TrailPage />} />
        <Route path="/tee-times" element={<TeeTimesPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/food" element={<FoodBeveragePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/oklahoma-courses" element={<OklahomaCoursesPage />} />
        
        {/* Catch-all route for preview environments and 404s */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
