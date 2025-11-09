import { motion } from 'motion/react';
import { Package, RefreshCw, MessageCircle, Check } from 'lucide-react';

const infoColumns = [
  {
    id: 1,
    icon: Package,
    title: 'Free Shipping',
    color: '#10B981',
    items: ['$75+ orders ship free', 'Standard: 5-7 days', 'Express available'],
  },
  {
    id: 2,
    icon: RefreshCw,
    title: 'Easy Returns',
    color: '#3B82F6',
    items: ['30-day return policy', 'Hassle-free process', 'Full refund guaranteed'],
  },
  {
    id: 3,
    icon: MessageCircle,
    title: 'Need Help?',
    color: '#FF6B35',
    items: ['shop@stickson66.com', '1-800-ROUTE-66', 'Mon-Fri 9 AM-6 PM CST'],
  },
  {
    id: 4,
    icon: Check,
    title: 'Premium Quality',
    color: '#8B5CF6',
    items: ['Official Trail merchandise', 'Licensed products', 'Satisfaction guaranteed'],
  },
];

export function ShopInfo() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoColumns.map((column, idx) => {
            const Icon = column.icon;
            return (
              <motion.div
                key={column.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${column.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: column.color }} />
                </motion.div>

                {/* Title */}
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#0F172A',
                  }}
                >
                  {column.title}
                </h3>

                {/* Items */}
                <div className="space-y-2">
                  {column.items.map((item, itemIdx) => (
                    <p
                      key={itemIdx}
                      style={{
                        fontSize: '14px',
                        color: '#64748B',
                        lineHeight: '1.6',
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
