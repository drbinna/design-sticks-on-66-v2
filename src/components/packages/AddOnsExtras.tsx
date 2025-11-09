import { motion } from 'motion/react';
import { Camera, ShoppingBag, UserPlus, GraduationCap, BookOpen, Map } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function AddOnsExtras() {
  const addons = [
    {
      icon: Camera,
      name: 'Photography Package',
      description: 'Professional photos at 5 milestone courses',
      price: 199,
      image: 'photographer golf course',
    },
    {
      icon: ShoppingBag,
      name: 'Premium Merchandise Kit',
      description: 'Route 66 branded apparel & accessories',
      price: 150,
      image: 'golf merchandise',
    },
    {
      icon: UserPlus,
      name: 'Guest Pass Bundle',
      description: 'Bring friends for 5 rounds',
      price: 175,
      savings: 'save $50',
      image: 'golf group friends',
    },
    {
      icon: GraduationCap,
      name: 'Private Lessons',
      description: '3 one-hour sessions with PGA pro',
      price: 300,
      image: 'golf instructor teaching',
    },
    {
      icon: BookOpen,
      name: 'Commemorative Book',
      description: 'Hardcover Trail journey photo book',
      price: 89,
      image: 'photo book golf',
    },
    {
      icon: Map,
      name: 'Course Strategy Guides',
      description: 'Detailed guides for all 66 courses',
      price: 49,
      priceNote: 'digital / $79 printed',
      image: 'golf course map',
    },
  ];

  return (
    <section className="py-16 bg-[#F5F1E8]">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Enhance Your Experience</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Optional Add-Ons
          </p>
        </motion.div>

        {/* Add-on Grid: 6 cards (3 × 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#E5E7EB] hover:border-[#FF6B35]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Product image */}
              <div className="relative h-[120px] bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <addon.icon className="w-16 h-16 text-[#FF6B35]/20" />
                </div>
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-${1500000000 + index}?w=440&h=120&fit=crop`}
                  alt={addon.name}
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Savings badge */}
                {addon.savings && (
                  <div className="absolute top-2 right-2 px-3 py-1 bg-[#10B981] text-white text-[12px] rounded-full uppercase">
                    {addon.savings}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#DC2626] rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-[20px] text-[#0F172A] mb-2">{addon.name}</h3>

                {/* Description */}
                <p className="text-[14px] text-[#64748B] mb-4 leading-relaxed min-h-[40px]">
                  {addon.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[24px] text-[#FF6B35]">${addon.price}</span>
                  {addon.priceNote && (
                    <span className="text-[12px] text-[#64748B]">{addon.priceNote}</span>
                  )}
                </div>

                {/* Add to Package button */}
                <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-lg">
                  Add to Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
