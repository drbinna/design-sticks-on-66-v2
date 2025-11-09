import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Upload, User, Mail as MailIcon, Phone, AlertCircle, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    orderNumber: '',
    message: '',
    contactMethod: 'email',
  });

  const [charCount, setCharCount] = useState(0);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 1000) {
      setFormData({ ...formData, message: text });
      setCharCount(text.length);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex max-lg:flex-col gap-12">
          {/* Left Side: Form */}
          <div className="lg:w-[840px]">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-[#0F172A] mb-2"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}
              >
                Send Us a Message
              </h2>
              <p className="text-[#64748B]" style={{ fontSize: '16px' }}>
                We'll respond within 4 hours
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-[#E5E7EB] rounded-2xl p-10 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Name <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-[48px] pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Email <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-[48px] pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Phone <span className="text-[#64748B]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-[48px] pl-10"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Subject <span className="text-[#DC2626]">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-[48px] px-3 rounded-md border border-[#E5E7EB] outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Question</option>
                    <option value="teetime">Tee Time Booking</option>
                    <option value="package">Package Information</option>
                    <option value="resort">Resort/Accommodation</option>
                    <option value="membership">Trail Membership</option>
                    <option value="support">Technical Support</option>
                    <option value="group">Group/Corporate Event</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Order/Booking Number */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Order/Booking Number <span className="text-[#64748B]">(Optional)</span>
                  </label>
                  <Input
                    placeholder="If applicable"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="h-[48px]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Message <span className="text-[#DC2626]">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleMessageChange}
                    className="min-h-[150px] resize-none"
                    required
                  />
                  <div className="text-right text-[12px] text-[#64748B] mt-1">
                    {charCount} / 1000
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-2">
                    Attach files <span className="text-[#64748B]">(Optional)</span>
                  </label>
                  <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-6 text-center hover:border-[#FF6B35] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-[#94A3B8] mx-auto mb-2" />
                    <p className="text-[14px] text-[#64748B] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-[12px] text-[#94A3B8]">
                      Images, PDFs (Max 5MB)
                    </p>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-[14px] text-[#0F172A] mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'email', label: 'Email' },
                      { value: 'phone', label: 'Phone' },
                      { value: 'either', label: 'Either' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={option.value}
                          checked={formData.contactMethod === option.value}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="w-4 h-4 accent-[#FF6B35]"
                        />
                        <span className="text-[14px] text-[#0F172A]">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all"
                  style={{ height: '56px', fontSize: '18px' }}
                >
                  Send Message
                </Button>

                {/* Privacy Note */}
                <p className="text-[#64748B] text-center" style={{ fontSize: '12px' }}>
                  We respect your privacy.{' '}
                  <a href="#" className="text-[#FF6B35] hover:underline">
                    Read our Privacy Policy
                  </a>
                </p>
              </form>
            </motion.div>
          </div>

          {/* Right Side: Info Panel */}
          <div className="lg:w-[550px]">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Quick Help Section */}
              <div className="bg-[#FFF7ED] border border-[#FF6B35]/20 rounded-xl p-6">
                <h3 className="text-[#0F172A] mb-4" style={{ fontSize: '20px' }}>
                  Need Immediate Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#0F172A] mb-1" style={{ fontSize: '14px' }}>
                        Already on the road?
                      </p>
                      <p className="text-[#DC2626]" style={{ fontSize: '16px' }}>
                        Emergency: 1-800-ROUTE-911
                      </p>
                      <p className="text-[#64748B]" style={{ fontSize: '13px' }}>
                        24/7 support for travelers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Questions */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <h3 className="text-[#0F172A] mb-4" style={{ fontSize: '20px' }}>
                  Common Questions
                </h3>
                <div className="space-y-2">
                  {[
                    'How do I book a tee time?',
                    'What\'s included in packages?',
                    'Can I modify my reservation?',
                    'Where are the Trail courses?',
                    'How do I earn medallions?',
                  ].map((question, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-2 text-[#FF6B35] hover:underline"
                      style={{ fontSize: '14px' }}
                    >
                      <span>→</span>
                      <span>{question}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="bg-[#F0FDF4] border border-[#10B981]/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-[#10B981]" />
                  <div>
                    <p className="text-[#0F172A]" style={{ fontSize: '16px' }}>
                      Average response: 3.2 hours
                    </p>
                    <p className="text-[#64748B]" style={{ fontSize: '13px' }}>
                      We aim to respond within 4 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="space-y-3">
                  {[
                    '98% satisfaction rating',
                    '2,500+ inquiries resolved monthly',
                    'Secure & confidential',
                  ].map((signal, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#10B981]">✓</span>
                      <span className="text-[#64748B]" style={{ fontSize: '14px' }}>
                        {signal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <h3 className="text-[#0F172A] mb-4" style={{ fontSize: '18px' }}>
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span className="text-[#64748B]">Phone:</span>
                    <span className="text-[#0F172A]">7 AM - 11 PM CST</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span className="text-[#64748B]">Email:</span>
                    <span className="text-[#0F172A]">Monitored 24/7</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span className="text-[#64748B]">Chat:</span>
                    <span className="text-[#0F172A]">8 AM - 10 PM CST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
