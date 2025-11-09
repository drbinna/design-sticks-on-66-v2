import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, MessageSquare, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';

export default function FeedbackReviews() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

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
            We Value Your Feedback
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            HELP US IMPROVE THE TRAIL
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Rate Your Experience */}
          <motion.div
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-8 text-center hover:border-[#FF6B35] transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -8 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-[#FFD700]" />
            </div>

            <h3 className="text-[24px] text-[#0F172A] mb-3">
              Rate Your Experience
            </h3>
            <p className="text-[14px] text-[#64748B] mb-6">
              How was your Trail experience?
            </p>

            {/* Interactive 5-Star Rating */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoverRating || rating)
                        ? 'fill-[#FFD700] text-[#FFD700]'
                        : 'text-[#E5E7EB]'
                    } transition-all`}
                  />
                </motion.button>
              ))}
            </div>

            <a
              href="#"
              className="text-[14px] text-[#FF6B35] hover:underline"
            >
              Share your thoughts →
            </a>
          </motion.div>

          {/* Column 2: Submit a Review */}
          <motion.div
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-8 text-center hover:border-[#FF6B35] transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-[#10B981]" />
            </div>

            <h3 className="text-[24px] text-[#0F172A] mb-3">
              Submit a Review
            </h3>
            <p className="text-[14px] text-[#64748B] mb-6">
              Played a Trail course?
            </p>

            <p className="text-[15px] text-[#0F172A] mb-6">
              Write a review and help others
            </p>

            <Button className="w-full h-[48px] bg-[#10B981] text-white hover:shadow-xl transition-all">
              Submit Review
            </Button>
          </motion.div>

          {/* Column 3: Report an Issue */}
          <motion.div
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-8 text-center hover:border-[#DC2626] transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#DC2626]/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-[#DC2626]" />
            </div>

            <h3 className="text-[24px] text-[#0F172A] mb-3">
              Report an Issue
            </h3>
            <p className="text-[14px] text-[#64748B] mb-6">
              Something wrong?
            </p>

            <p className="text-[15px] text-[#0F172A] mb-4">
              Let us know so we can fix it
            </p>

            <div className="text-[13px] text-[#64748B] mb-6 space-y-1">
              <p>• Course condition</p>
              <p>• Booking problem</p>
              <p>• Website bug</p>
            </div>

            <Button 
              variant="outline"
              className="w-full h-[48px] border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/10"
            >
              Report Issue
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
