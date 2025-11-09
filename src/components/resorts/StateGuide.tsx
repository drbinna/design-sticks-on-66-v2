import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Building2, Music, Wheat, Users, Star as StarIcon, Sparkles, Mountain, Waves as WavesIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { LucideIcon } from 'lucide-react';

interface StateData {
  name: string;
  tagline: string;
  flag: LucideIcon;
  resortCount: number;
  courseCount: number;
  image: string;
  description: string;
  mileage: string;
  popularCities: string;
  bestTime: string;
  mustStay: string;
  insiderTip: string;
  localAttraction: string;
  specialty: string;
  miniResorts: {
    name: string;
    image: string;
    rating: number;
    price: number;
  }[];
}

function StateSection({ state, index }: { state: StateData; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="border-b-2 border-[#FF6B35]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Collapsed Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 flex items-center justify-between hover:bg-[#F9FAFB] transition-colors px-4"
      >
        <div className="flex items-center gap-6">
          {/* Flag Icon */}
          <div className="w-20 h-20 rounded-full bg-[#F5F1E8] flex items-center justify-center">
            <state.flag className="w-10 h-10 text-[#FF6B35]" />
          </div>
          
          <div className="text-left">
            <h3 className="text-[32px] text-[#0F172A] mb-1">{state.name}</h3>
            <div className="flex items-center gap-4 text-[14px] text-[#64748B]">
              <span>{state.resortCount} resorts available</span>
              <span>•</span>
              <span>Near {state.courseCount} Trail courses</span>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-8 h-8 text-[#FF6B35]" />
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white">
              <div className="flex max-lg:flex-col gap-8">
                {/* Left Column */}
                <div className="lg:w-[600px]">
                  {/* Hero Image */}
                  <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                    <ImageWithFallback
                      src={state.image}
                      alt={state.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-[16px] text-[#0F172A] mb-6 leading-relaxed">
                    {state.description}
                  </p>

                  {/* Key Facts */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#F9FAFB] p-4 rounded-lg">
                      <p className="text-[12px] text-[#64748B] mb-1 uppercase tracking-wider">Mileage</p>
                      <p className="text-[16px] text-[#0F172A]">{state.mileage}</p>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-lg">
                      <p className="text-[12px] text-[#64748B] mb-1 uppercase tracking-wider">Popular Cities</p>
                      <p className="text-[16px] text-[#0F172A]">{state.popularCities}</p>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-lg">
                      <p className="text-[12px] text-[#64748B] mb-1 uppercase tracking-wider">Best Time</p>
                      <p className="text-[16px] text-[#0F172A]">{state.bestTime}</p>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-lg">
                      <p className="text-[12px] text-[#64748B] mb-1 uppercase tracking-wider">Courses</p>
                      <p className="text-[16px] text-[#0F172A]">{state.courseCount} courses</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4">
                    <div className="bg-[#FFF7ED] p-4 rounded-lg">
                      <p className="text-[13px] text-[#FF6B35] mb-1">Must-Stay Property</p>
                      <p className="text-[15px] text-[#0F172A]">{state.mustStay}</p>
                    </div>
                    <div className="bg-[#F0FDF4] p-4 rounded-lg">
                      <p className="text-[13px] text-[#10B981] mb-1">Trail Insider Tip</p>
                      <p className="text-[15px] text-[#0F172A]">{state.insiderTip}</p>
                    </div>
                    <div className="bg-[#EFF6FF] p-4 rounded-lg">
                      <p className="text-[13px] text-[#3B82F6] mb-1">Local Attraction</p>
                      <p className="text-[15px] text-[#0F172A]">{state.localAttraction}</p>
                    </div>
                    <div className="bg-[#FDF4FF] p-4 rounded-lg">
                      <p className="text-[13px] text-[#8B5CF6] mb-1">State Specialty</p>
                      <p className="text-[15px] text-[#0F172A]">{state.specialty}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Resort Mini-Grid */}
                <div className="flex-1">
                  <h4 className="text-[24px] text-[#0F172A] mb-4">Featured Resorts</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {state.miniResorts.map((resort, idx) => (
                      <div 
                        key={idx}
                        className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden hover:shadow-lg transition-all"
                      >
                        <div className="h-[120px] relative">
                          <ImageWithFallback
                            src={resort.image}
                            alt={resort.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h5 className="text-[14px] text-[#0F172A] mb-2">{resort.name}</h5>
                          <div className="flex items-center justify-between">
                            <span className="text-[12px] text-[#FFD700]">{'⭐'.repeat(resort.rating)}</span>
                            <span className="text-[16px] text-[#FF6B35]">${resort.price}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full mt-2 h-[32px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white"
                          >
                            Book
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10"
                  >
                    View All {state.name} Resorts →
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function StateGuide() {
  const states: StateData[] = [
    {
      name: 'Illinois',
      tagline: 'Where the Journey Begins',
      flag: Building2,
      resortCount: 9,
      courseCount: 8,
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&h=500&fit=crop',
      description: 'Experience big city luxury before hitting the road. Chicago offers world-class accommodations and championship golf courses to start your Route 66 adventure in style.',
      mileage: '301 miles',
      popularCities: 'Chicago, Springfield',
      bestTime: 'May - October',
      mustStay: 'The Drake Hotel Chicago',
      insiderTip: 'Book early for Chicago courses - they fill up fast in summer',
      localAttraction: 'Navy Pier & Millennium Park',
      specialty: 'Deep dish pizza & world-class steakhouses',
      miniResorts: [
        { name: 'Chicago Golf Resort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 5, price: 245 },
        { name: 'Springfield Inn', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 129 },
        { name: 'Lake View Lodge', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 4, price: 189 },
        { name: 'Route 66 Motor Inn', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 4, price: 99 },
      ],
    },
    {
      name: 'Missouri',
      tagline: 'The Heart of Route 66',
      flag: Music,
      resortCount: 10,
      courseCount: 11,
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=500&fit=crop',
      description: 'Classic motor courts and modern comfort combine in the Show-Me State. From St. Louis to Joplin, Missouri offers authentic Route 66 charm with excellent golf.',
      mileage: '317 miles',
      popularCities: 'St. Louis, Springfield',
      bestTime: 'April - November',
      mustStay: 'The Cheshire Hotel St. Louis',
      insiderTip: 'Visit the Gateway Arch before your morning tee time',
      localAttraction: 'Gateway Arch National Park',
      specialty: 'BBQ ribs & toasted ravioli',
      miniResorts: [
        { name: 'Gateway Golf Resort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 5, price: 199 },
        { name: 'Historic Route Inn', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 109 },
        { name: 'Ozark Golf Lodge', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 4, price: 159 },
        { name: 'Springfield Suites', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 4, price: 119 },
      ],
    },
    {
      name: 'Kansas',
      tagline: 'Brief but Beautiful',
      flag: Wheat,
      resortCount: 3,
      courseCount: 4,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      description: 'Quick but memorable stops in small-town America. Kansas may be the shortest Route 66 stretch, but it packs authentic charm and friendly hospitality.',
      mileage: '13 miles',
      popularCities: 'Galena, Baxter Springs',
      bestTime: 'May - September',
      mustStay: 'Microtel Inn Galena',
      insiderTip: 'Visit Cars on the Route for photo ops',
      localAttraction: 'Cars on the Route gift shop',
      specialty: 'Home-style comfort food',
      miniResorts: [
        { name: 'Prairie View Inn', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 4, price: 89 },
        { name: 'Route 66 Lodge', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 79 },
        { name: 'Galena Hotel', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 3, price: 69 },
        { name: 'Heartland Motel', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 4, price: 85 },
      ],
    },
    {
      name: 'Oklahoma',
      tagline: 'Most Miles, Most Magic',
      flag: Users,
      resortCount: 11,
      courseCount: 14,
      image: 'https://images.unsplash.com/photo-1601655114059-1dd67b71b9fc?w=800&h=500&fit=crop',
      description: 'The soul of the Mother Road. Oklahoma has more driveable Route 66 miles than any other state, plus outstanding golf resorts and genuine Western hospitality.',
      mileage: '400 miles',
      popularCities: 'Oklahoma City, Tulsa',
      bestTime: 'March - November',
      mustStay: 'Grand Route 66 Lodge (Trail HQ)',
      insiderTip: 'Play the championship course at our flagship property',
      localAttraction: 'National Cowboy Museum',
      specialty: 'Chicken fried steak & BBQ',
      miniResorts: [
        { name: 'Grand Route 66 Lodge', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 5, price: 189 },
        { name: 'Tulsa Golf Resort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 5, price: 179 },
        { name: 'Western Trails Inn', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 109 },
        { name: 'Oklahoma Lodge', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 4, price: 139 },
      ],
    },
    {
      name: 'Texas',
      tagline: 'Big Sky Golf Country',
      flag: StarIcon,
      resortCount: 6,
      courseCount: 7,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
      description: 'Wide open spaces and warm hospitality. The Texas Panhandle offers unique golf experiences under endless skies with legendary Texan charm.',
      mileage: '178 miles',
      popularCities: 'Amarillo, Shamrock',
      bestTime: 'March - May, Sept - Nov',
      mustStay: 'Amarillo Ranch Resort',
      insiderTip: 'Don\'t miss sunset at Cadillac Ranch',
      localAttraction: 'Cadillac Ranch art installation',
      specialty: 'Texas BBQ brisket & steaks',
      miniResorts: [
        { name: 'Big Texan Resort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 4, price: 149 },
        { name: 'Amarillo Golf Club', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 4, price: 169 },
        { name: 'Route 66 Inn', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 99 },
        { name: 'Panhandle Lodge', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 4, price: 119 },
      ],
    },
    {
      name: 'New Mexico',
      tagline: 'Land of Enchantment',
      flag: Sparkles,
      resortCount: 8,
      courseCount: 10,
      image: 'https://images.unsplash.com/photo-1580982172477-f9d5e3b2c155?w=800&h=500&fit=crop',
      description: 'Desert beauty and cultural richness create unforgettable golf experiences. From historic motels to luxury resorts, New Mexico enchants every visitor.',
      mileage: '487 miles',
      popularCities: 'Albuquerque, Santa Fe',
      bestTime: 'Year-round (mild winters)',
      mustStay: 'Blue Swallow Motel (Historic)',
      insiderTip: 'Book sunset tee times for stunning desert views',
      localAttraction: 'Albuquerque Old Town',
      specialty: 'Green chile everything',
      miniResorts: [
        { name: 'Desert Golf Resort', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 5, price: 199 },
        { name: 'Blue Swallow Motel', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 5, price: 99 },
        { name: 'Santa Fe Resort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 5, price: 229 },
        { name: 'Route 66 Lodge', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 4, price: 119 },
      ],
    },
    {
      name: 'Arizona',
      tagline: 'Desert Golf Paradise',
      flag: Mountain,
      resortCount: 12,
      courseCount: 15,
      image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=800&h=500&fit=crop',
      description: 'From Grand Canyon to desert championships, Arizona offers world-class golf resorts and breathtaking natural beauty that will elevate your Trail experience.',
      mileage: '401 miles',
      popularCities: 'Flagstaff, Phoenix area',
      bestTime: 'Year-round (winter golf paradise)',
      mustStay: 'Grand Canyon Lodge & Golf Club',
      insiderTip: 'Combine golf with a Grand Canyon side trip',
      localAttraction: 'Grand Canyon National Park',
      specialty: 'Southwestern cuisine & margaritas',
      miniResorts: [
        { name: 'Grand Canyon Lodge', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', rating: 5, price: 299 },
        { name: 'Sedona Golf Resort', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 5, price: 279 },
        { name: 'Flagstaff Inn', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 4, price: 159 },
        { name: 'Desert Oasis', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 189 },
      ],
    },
    {
      name: 'California',
      tagline: 'The Golden Finale',
      flag: WavesIcon,
      resortCount: 7,
      courseCount: 7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
      description: 'End your journey at the Pacific. From desert courses to beachside resorts, California celebrates your Trail completion in legendary West Coast style.',
      mileage: '315 miles',
      popularCities: 'Los Angeles, Santa Monica',
      bestTime: 'Year-round (perfect climate)',
      mustStay: 'Santa Monica Beach Hotel',
      insiderTip: 'Book the oceanview suite for your Gold Medallion celebration',
      localAttraction: 'Santa Monica Pier (Route 66 End)',
      specialty: 'Fresh seafood & California wine',
      miniResorts: [
        { name: 'Santa Monica Beach Hotel', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop', rating: 5, price: 245 },
        { name: 'Malibu Golf Resort', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', rating: 5, price: 329 },
        { name: 'Pacific Coast Inn', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', rating: 4, price: 199 },
        { name: 'Route 66 End Lodge', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', rating: 4, price: 179 },
      ],
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">
            Explore by State
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            YOUR ROUTE 66 ACCOMMODATION GUIDE
          </p>
        </motion.div>

        {/* State Sections */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {states.map((state, index) => (
            <StateSection key={state.name} state={state} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
