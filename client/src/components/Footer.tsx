import { Link } from 'wouter';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#020A2E] to-[#0B1F5B] border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Aspra Overseas Logo" className="h-10 w-auto object-contain mix-blend-screen brightness-110" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Where Your Dreams Find Direction. We help students and professionals achieve their global aspirations through quality education and career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 hover:text-white smooth-transition text-sm">Home</Link></li>
              <li><Link href="/jobs" className="text-white/60 hover:text-white smooth-transition text-sm">Jobs</Link></li>
              <li><Link href="/study-abroad" className="text-white/60 hover:text-white smooth-transition text-sm">Study Abroad</Link></li>
              <li><Link href="/courses" className="text-white/60 hover:text-white smooth-transition text-sm">Courses</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-white/60 hover:text-white smooth-transition text-sm">Language Courses</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white smooth-transition text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Email: aspraconsultancy@gmail.com</li>
              <li>Phone: +91 90254 91773</li>
              <li>Phone: +91 8015700576</li>
              <li>Instagram: @aspra_overseas</li>
              <li>Facebook: @aspra_overseas</li>
              <li>Address: Saibaba Colony, Cbe - 38</li>
              <li className="pt-2"><Link href="/contact" className="text-[#E84A8A] hover:text-white smooth-transition font-semibold">Get in Touch</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2026 Aspra Overseas Consultancy. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-white smooth-transition text-sm">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white smooth-transition text-sm">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white smooth-transition text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
