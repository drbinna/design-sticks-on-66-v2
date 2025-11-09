import { motion } from 'motion/react';
import { Leaf, Handshake, Landmark } from 'lucide-react';

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Properties',
      items: [
        '22 resorts with green certifications',
        'Solar power, water conservation, EV charging',
        'LEED certified buildings',
      ],
      color: '#10B981',
    },
    {
      icon: Handshake,
      title: 'Supporting Main Street',
      items: [
        'Family-owned businesses along the Trail',
        'Local employment and sourcing',
        'Preserving historic properties',
      ],
      color: '#FF6B35',
    },
    {
      icon: Landmark,
      title: 'Route 66 Preservation',
      items: [
        '$5 from every booking supports Route 66 Alliance',
        'Historic landmark restoration',
        'Educational programs',
      ],
      color: '#3B82F6',
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Responsible Travel
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            PRESERVING ROUTE 66 FOR FUTURE GENERATIONS
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${initiative.color}20` }}
              >
                <initiative.icon className="w-8 h-8" style={{ color: initiative.color }} />
              </div>

              {/* Title */}
              <h3 className="text-[24px] text-[#0F172A] mb-4">{initiative.title}</h3>

              {/* Items */}
              <ul className="space-y-3">
                {initiative.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1 flex-shrink-0">✓</span>
                    <span className="text-[14px] text-[#64748B] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          className="bg-gradient-to-r from-[#FF6B35] to-[#DC2626] rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '$250,000+', label: 'raised for preservation' },
              { value: '15', label: 'historic motels restored' },
              { value: '500+', label: 'local jobs supported' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-[48px] max-md:text-[36px] mb-2">{stat.value}</div>
                <div className="text-[16px] opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
