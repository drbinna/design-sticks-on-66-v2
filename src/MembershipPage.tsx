import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import MembershipHero from './components/membership/MembershipHero';
import MembershipTiers from './components/membership/MembershipTiers';
import MembershipBenefits from './components/membership/MembershipBenefits';

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <MembershipHero />
      <MembershipTiers />
      <MembershipBenefits />
      
      <Footer />
    </div>
  );
}
