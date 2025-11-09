import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'The Trail': ['All Courses', 'By State', 'Course Finder', 'Interactive Map'],
    'Plan Your Trip': ['Tee Times', 'Packages', 'Resorts', 'Travel Guide'],
    'About': ['Our Story', 'Tournaments', 'Medallions', 'Press'],
    'Contact': ['Help Center', 'FAQ', 'Contact Us', 'Careers'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black tracking-tight" style={{ fontSize: '18px', fontWeight: '700' }}>66</span>
              </div>
              <span className="text-white tracking-[0.15em] uppercase" style={{ fontSize: '16px', fontWeight: '600' }}>
                Sticks on 66
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-xs" style={{ fontSize: '15px', lineHeight: '1.6' }}>
              America's first national golf trail featuring 66 public courses along historic Route 66, from Chicago to Santa Monica.
            </p>
            {/* Newsletter */}
            <div className="mb-4">
              <label className="text-white/80 tracking-[0.1em] uppercase mb-3 block" style={{ fontSize: '13px', fontWeight: '600' }}>
                Stay Updated
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  style={{ fontSize: '14px' }}
                />
                <button className="bg-gradient-to-r from-[#ff6b35] to-[#dc143c] hover:from-[#ff8c42] hover:to-[#c41e3a] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 tracking-[0.1em] uppercase text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors"
                      style={{ fontSize: '14px' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5 text-white/80" />
              </a>
            ))}
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-wrap items-center gap-6 text-white/50" style={{ fontSize: '13px' }}>
            <span>© 2026 Sticks on 66. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>

        {/* AI Attribution */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <a 
            href="https://oru.edu/global-learning-and-innovation/ai/index.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/60 transition-colors"
            style={{ fontSize: '12px' }}
          >
            Built and powered by{' '}
            <span className="text-white/60 hover:text-white transition-colors" style={{ fontWeight: '600' }}>
              ai.oru.edu
            </span>
            <br />
            <span>Developing Whole Leaders For The Whole World</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
