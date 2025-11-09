import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Building2, Star, Wheat, Beef, Flame, Map } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const states = [
  {
    id: 'illinois',
    name: 'Illinois',
    icon: Building2,
    count: 12,
    specialty: 'Deep dish pizza, Chicago dogs',
    restaurants: [
      { name: "Lou Mitchell's", type: 'Classic Diner', rating: 4.9 },
      { name: "Portillo's", type: 'Hot Dogs & Italian Beef', rating: 4.7 },
      { name: 'The Berghoff', type: 'German-American', rating: 4.6 },
    ],
    color: '#3B82F6',
  },
  {
    id: 'missouri',
    name: 'Missouri',
    icon: Star,
    count: 16,
    specialty: 'BBQ, Toasted ravioli',
    restaurants: [
      { name: "Pappy's Smokehouse", type: 'BBQ', rating: 4.8 },
      { name: 'Crown Candy Kitchen', type: 'Ice Cream & Sandwiches', rating: 4.7 },
      { name: "Ted Drewes Frozen Custard", type: 'Desserts', rating: 4.9 },
    ],
    color: '#DC2626',
  },
  {
    id: 'kansas',
    name: 'Kansas',
    icon: Wheat,
    count: 8,
    specialty: 'Comfort food, Steaks',
    restaurants: [
      { name: 'Riverton General Store', type: 'Historic Diner', rating: 4.5 },
      { name: "Clanton's Cafe", type: 'American Diner', rating: 4.6 },
      { name: 'Waylan\'s Ku-Ku Burger', type: 'Burgers', rating: 4.4 },
    ],
    color: '#F59E0B',
  },
  {
    id: 'oklahoma',
    name: 'Oklahoma',
    icon: Beef,
    count: 18,
    specialty: 'Chicken fried steak, Onion burgers',
    restaurants: [
      { name: 'Cattlemen\'s Steakhouse', type: 'Steakhouse', rating: 4.7 },
      { name: 'Rock Cafe', type: 'Historic Diner', rating: 4.8 },
      { name: 'POPS', type: 'Diner & Soda Shop', rating: 4.6 },
    ],
    color: '#B45309',
  },
  {
    id: 'texas',
    name: 'Texas',
    icon: Star,
    count: 22,
    specialty: 'BBQ, Tex-Mex, Steaks',
    restaurants: [
      { name: 'The Big Texan Steak Ranch', type: 'Steakhouse', rating: 4.8 },
      { name: 'The MidPoint Cafe', type: 'American Diner', rating: 4.7 },
      { name: 'Tyler\'s Barbeque', type: 'BBQ', rating: 4.6 },
    ],
    color: '#DC2626',
  },
  {
    id: 'new-mexico',
    name: 'New Mexico',
    icon: Flame,
    count: 15,
    specialty: 'Green chile, Southwestern',
    restaurants: [
      { name: 'The Range Café', type: 'Southwest', rating: 4.7 },
      { name: '66 Diner', type: 'Classic Diner', rating: 4.6 },
      { name: 'El Modelo', type: 'Mexican', rating: 4.8 },
    ],
    color: '#EAB308',
  },
  {
    id: 'arizona',
    name: 'Arizona',
    icon: Flame,
    count: 15,
    specialty: 'Sonoran cuisine, Steakhouses',
    restaurants: [
      { name: 'El Tovar Dining Room', type: 'Fine Dining', rating: 4.7 },
      { name: 'Cruiser\'s Route 66 Cafe', type: 'American Diner', rating: 4.5 },
      { name: 'The Turquoise Room', type: 'Southwest Fine Dining', rating: 4.8 },
    ],
    color: '#DC2626',
  },
  {
    id: 'california',
    name: 'California',
    icon: Star,
    count: 14,
    specialty: 'Fresh seafood, Farm-to-table',
    restaurants: [
      { name: 'Emma Jean\'s Holland Burger Cafe', type: 'Classic Diner', rating: 4.6 },
      { name: 'Summit Inn', type: 'American', rating: 4.5 },
      { name: 'Santa Monica Pier Restaurants', type: 'Varied', rating: 4.4 },
    ],
    color: '#F59E0B',
  },
];

export function StateGuide() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '14px',
              letterSpacing: '3px',
              color: '#FF6B35',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Culinary Journey Across 8 States
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}
          >
            Dine by State
          </motion.h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div
              className="w-full h-[500px] rounded-xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: '#F5F1E8' }}
            >
              {/* Decorative Route 66 Map Illustration */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-20">
                  <motion.path
                    d="M 50 250 Q 200 200, 400 250 T 750 250"
                    stroke="#FF6B35"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="20 10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </svg>
              </div>
              <div className="text-center z-10">
                <div className="mb-4 flex items-center justify-center">
                  <Map className="w-24 h-24 text-[#FF6B35]" />
                </div>
                <p style={{ fontSize: '18px', fontWeight: '600', color: '#64748B' }}>
                  Interactive Route 66 Map
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '8px' }}>
                  Click states to explore dining options
                </p>
              </div>
            </div>
          </motion.div>

          {/* State List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {states.map((state, idx) => (
                <AccordionItem
                  key={state.id}
                  value={state.id}
                  className="bg-white rounded-xl px-6 border-none shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 w-full">
                      {/* State Icon */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${state.color}20` }}
                      >
                        <state.icon className="w-6 h-6" style={{ color: state.color }} />
                      </div>

                      {/* State Info */}
                      <div className="flex-1 text-left">
                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>
                          {state.name}
                        </div>
                        <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                          {state.specialty}
                        </div>
                      </div>

                      {/* Count Badge */}
                      <div
                        className="px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#FFF7ED' }}
                      >
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#FF6B35' }}>
                          {state.count}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3 pt-2">
                      {/* Top Restaurants */}
                      {state.restaurants.map((restaurant, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0F172A' }}>
                              {restaurant.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748B' }}>
                              {restaurant.type}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span style={{ fontSize: '13px', fontWeight: '600' }}>
                              {restaurant.rating}
                            </span>
                            <span className="text-yellow-400">⭐</span>
                          </div>
                        </div>
                      ))}

                      {/* View All Link */}
                      <button
                        className="w-full mt-2 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        style={{ color: state.color }}
                      >
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>
                          View All {state.name} Dining
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
