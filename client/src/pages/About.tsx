import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Aspra Overseas</h1>
            <p className="text-white/70 text-lg">Where Your Dreams Find Direction</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                At Aspra Overseas, we believe that every individual deserves the opportunity to pursue their dreams on a global stage. Our mission is to bridge the gap between aspirations and achievements by providing comprehensive guidance, support, and opportunities for students and professionals seeking international education and career advancement.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We are committed to transforming lives through quality education, ethical recruitment practices, and personalized career counseling that empowers our clients to succeed in an increasingly competitive global market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-lg p-8"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Founded</h3>
                  <p className="text-white/60">2015</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Global Presence</h3>
                  <p className="text-white/60">50+ Countries</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Success Stories</h3>
                  <p className="text-white/60">10,000+ Placements</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Team Members</h3>
                  <p className="text-white/60">500+ Professionals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integrity',
                description: 'We operate with honesty and transparency in all our dealings',
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in service delivery',
              },
              {
                title: 'Innovation',
                description: 'We embrace new ideas and technologies to serve better',
              },
              {
                title: 'Empathy',
                description: 'We understand and care about our clients\' aspirations',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-lg p-6 text-center hover:bg-white/15 smooth-transition"
              >
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Thousands of Success Stories</h2>
            <p className="text-white/70 text-lg mb-8">Start your journey with Aspra Overseas today</p>
            <Link href="/contact">
              <a className="cta-button-lg">
                Get Started
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
