import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function HealthcareCareers() {
  const opportunities = [
    {
      country: 'Germany',
      title: 'Nursing Specialist',
      description: 'Join leading German hospitals and healthcare facilities',
      requirements: ['Bachelor in Nursing', 'B2 German Language', '2+ years experience'],
      salary: '€2,500 - €3,500/month',
      benefits: ['Health Insurance', 'Pension', 'Professional Development'],
    },
    {
      country: 'Germany',
      title: 'Medical Doctor',
      description: 'Practice medicine in state-of-the-art German medical centers',
      requirements: ['MD/MBBS', 'German Medical License', '3+ years experience'],
      salary: '€3,500 - €5,000/month',
      benefits: ['Comprehensive Benefits', 'Research Opportunities', 'Career Growth'],
    },
    {
      country: 'UAE',
      title: 'Healthcare Administrator',
      description: 'Manage operations in Dubai and Abu Dhabi healthcare sectors',
      requirements: ['Healthcare Management Degree', 'English Proficiency', '2+ years experience'],
      salary: 'AED 5,000 - AED 8,000/month',
      benefits: ['Housing Allowance', 'Health Insurance', 'Annual Leave'],
    },
    {
      country: 'UAE',
      title: 'Physiotherapist',
      description: 'Work in premium UAE rehabilitation centers',
      requirements: ['Physiotherapy Degree', 'English Proficiency', '1+ year experience'],
      salary: 'AED 4,000 - AED 6,500/month',
      benefits: ['Free Housing', 'Medical Insurance', 'Visa Sponsorship'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Healthcare Careers</h1>
            <p className="text-white/70 text-lg">Advance your medical career in Germany and UAE</p>
          </motion.div>
        </div>
      </section>

      {/* Germany Section */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Germany Healthcare Opportunities</h2>
            <p className="text-white/70 text-lg">Experience world-class healthcare systems and professional development</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {opportunities.filter(o => o.country === 'Germany').map((opp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-lg p-8 hover:bg-white/15 smooth-transition"
              >
                <h3 className="text-2xl font-bold text-white mb-3 text-[#E84A8A]">{opp.title}</h3>
                <p className="text-white/70 mb-6">{opp.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {opp.requirements.map((req, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E84A8A]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-white/60 mb-2">Salary Range</p>
                  <p className="text-[#E84A8A] font-bold text-lg">{opp.salary}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {opp.benefits.map((benefit, i) => (
                      <span key={i} className="px-3 py-1 bg-[#E84A8A]/20 text-[#E84A8A] rounded-full text-sm font-semibold">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <a className="cta-button w-full">
                    Apply Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-lg p-8 bg-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Why Germany?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[#E84A8A] font-bold mb-2">Advanced Healthcare</h4>
                <p className="text-white/70">Access to cutting-edge medical technology and research opportunities</p>
              </div>
              <div>
                <h4 className="text-[#E84A8A] font-bold mb-2">Professional Growth</h4>
                <p className="text-white/70">Continuous training and certification programs for career advancement</p>
              </div>
              <div>
                <h4 className="text-[#E84A8A] font-bold mb-2">Work-Life Balance</h4>
                <p className="text-white/70">Competitive working hours and comprehensive social benefits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UAE Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">UAE Healthcare Opportunities</h2>
            <p className="text-white/70 text-lg">Build your career in the Middle East's leading healthcare sector</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {opportunities.filter(o => o.country === 'UAE').map((opp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-lg p-8 hover:bg-white/15 smooth-transition"
              >
                <h3 className="text-2xl font-bold text-white mb-3 text-[#E84A8A]">{opp.title}</h3>
                <p className="text-white/70 mb-6">{opp.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {opp.requirements.map((req, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E84A8A]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-white/60 mb-2">Salary Range</p>
                  <p className="text-[#E84A8A] font-bold text-lg">{opp.salary}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {opp.benefits.map((benefit, i) => (
                      <span key={i} className="px-3 py-1 bg-[#E84A8A]/20 text-[#E84A8A] rounded-full text-sm font-semibold">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <a className="cta-button w-full">
                    Apply Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-lg p-8 bg-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Why UAE?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[#E84A8A] font-bold mb-2">Tax Benefits</h4>
                <p className="text-white/70">No personal income tax and attractive salary packages</p>
              </div>
              <div>
                <h4 className="text-[#E84A8A] font-bold mb-2">Modern Facilities</h4>
                <p className="text-white/70">State-of-the-art hospitals and medical centers</p>
              </div>
              <div>
                <h4 className="text-[#E84A8A] font-bold mb-2">International Environment</h4>
                <p className="text-white/70">Work with healthcare professionals from around the world</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Advance Your Healthcare Career?</h2>
            <p className="text-white/70 text-lg mb-8">Get personalized guidance from our healthcare career specialists</p>
            <Link href="/contact">
              <a className="cta-button-lg">
                Get Started Today
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
