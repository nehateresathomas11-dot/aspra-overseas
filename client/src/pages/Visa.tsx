import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Visa() {
  const visaServices = [
    {
      country: 'Germany',
      visaType: 'Student Visa',
      processingTime: '4-6 weeks',
      requirements: ['Admission Letter', 'Proof of Funds', 'Health Insurance'],
    },
    {
      country: 'Germany',
      visaType: 'Work Visa',
      processingTime: '6-8 weeks',
      requirements: ['Job Offer', 'Qualifications', 'Language Certificate'],
    },
    {
      country: 'UAE',
      visaType: 'Employment Visa',
      processingTime: '2-3 weeks',
      requirements: ['Job Offer', 'Medical Checkup', 'Sponsorship Letter'],
    },
    {
      country: 'UAE',
      visaType: 'Student Visa',
      processingTime: '2-4 weeks',
      requirements: ['Admission Letter', 'Sponsor Letter', 'Passport Copy'],
    },
    {
      country: 'UK',
      visaType: 'Student Visa',
      processingTime: '3-4 weeks',
      requirements: ['CAS Letter', 'Proof of Funds', 'English Proficiency'],
    },
    {
      country: 'Canada',
      visaType: 'Study Permit',
      processingTime: '4-6 weeks',
      requirements: ['Acceptance Letter', 'Financial Documents', 'Medical Exam'],
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Visa Services</h1>
            <p className="text-white/70 text-lg">Expert guidance for your visa application process</p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Visa Services</h2>
            <p className="text-white/70 text-lg">We handle your visa application with expertise and care</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-lg p-6 hover:bg-white/15 smooth-transition"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.visaType}</h3>
                  <p className="text-white/60 font-semibold">{service.country}</p>
                </div>

                <div className="mb-6">
                  <p className="text-white/60 text-sm mb-4">Processing Time</p>
                  <p className="text-white font-bold text-lg">{service.processingTime}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/30" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact">
                  <a className="cta-button w-full">
                    Apply Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/70 text-lg">Simple and transparent visa application process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Discuss your visa requirements and eligibility',
              },
              {
                step: '2',
                title: 'Documentation',
                description: 'Prepare and organize all required documents',
              },
              {
                step: '3',
                title: 'Application',
                description: 'Submit your application to the embassy',
              },
              {
                step: '4',
                title: 'Approval',
                description: 'Receive your visa and prepare for departure',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#E84A8A] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Visa Application Today</h2>
            <p className="text-white/70 text-lg mb-8">Let our experts guide you through the process</p>
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
