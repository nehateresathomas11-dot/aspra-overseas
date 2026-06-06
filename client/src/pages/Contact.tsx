import { useState } from 'react';
import { motion } from 'framer-motion';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { openWhatsAppChats } from '@/lib/whatsapp';

export default function Contact() {
  const queryParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const initialJobId = queryParams.get('jobId');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialJobId ? `Job Application for Job ID: ${initialJobId}` : '',
    message: '',
    inquiryType: initialJobId ? 'job' : 'general',
  });

  const createInquiry = trpc.inquiries.create.useMutation({
    onSuccess: () => {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: initialJobId ? `Job Application for Job ID: ${initialJobId}` : '',
        message: '',
        inquiryType: initialJobId ? 'job' : 'general',
      });
    },
    onError: (error) => {
      toast.error('Failed to submit form. Please try again.');
      console.error(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    createInquiry.mutate(formData);
  };

  const handleWhatsApp = () => {
    openWhatsAppChats();
  };

  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-b from-[#0B1F5B] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-white/70 text-lg">We're here to help you achieve your global aspirations</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full glass-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full glass-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90254 91773 / +91 8015700576"
                    className="w-full glass-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full glass-sm px-4 py-3 text-white bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="study">Study Abroad</option>
                    <option value="visa">Visa Services</option>
                    <option value="courses">Courses</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full glass-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full glass-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={createInquiry.isPending}
                  className="cta-button-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {createInquiry.isPending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              </div>

              <div className="glass-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E84A8A]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E84A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-white/60">aspraconsultancy@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E84A8A]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E84A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Phone</h3>
                    <p className="text-white/60">+91 90254 91773</p>
                    <p className="text-white/60">+91 8015700576</p>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full cta-button-lg flex items-center justify-center"
              >
                Chat on WhatsApp
              </motion.button>

              <div className="glass-lg p-6">
                <h3 className="text-white font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/60 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
