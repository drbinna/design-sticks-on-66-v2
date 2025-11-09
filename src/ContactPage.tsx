import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import ContactHero from './components/contact/ContactHero';
import ContactMethods from './components/contact/ContactMethods';
import ContactForm from './components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      
      <Footer />
    </div>
  );
}
