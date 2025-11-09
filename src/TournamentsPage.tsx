import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import TournamentsHero from './components/tournaments/TournamentsHero';
import UpcomingTournaments from './components/tournaments/UpcomingTournaments';
import TournamentTypes from './components/tournaments/TournamentTypes';
import TournamentsInfoSimple from './components/tournaments/TournamentsInfoSimple';

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <TournamentsHero />
      <UpcomingTournaments />
      <TournamentTypes />
      <TournamentsInfoSimple />
      
      <Footer />
    </div>
  );
}
