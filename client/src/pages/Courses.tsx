import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Courses() {
  const courses = [
    {
      id: 1,
      name: "IELTS",
      type: "Language",
      description: "Comprehensive coaching for the International English Language Testing System, essential for study and work in English-speaking countries.",
      duration: "Flexible",
    },
    {
      id: 2,
      name: "OET",
      type: "Language",
      description: "Occupational English Test training specifically designed for healthcare professionals to meet international registration requirements.",
      duration: "Flexible",
    },
    {
      id: 3,
      name: "PTE",
      type: "Language",
      description: "Pearson Test of English Academic preparation, providing a fast and fair way to prove your English language proficiency.",
      duration: "Flexible",
    },
    {
      id: 4,
      name: "German Language Training (A1 to B2 Levels)",
      type: "Language",
      description: "Structured German language courses covering all levels from beginner (A1) to upper-intermediate (B2), vital for careers in Germany.",
      duration: "Level-based",
    },
    {
      id: 5,
      name: "Spoken English Classes",
      type: "Language",
      description: "Interactive classes focused on improving your fluency, pronunciation, and confidence in everyday English communication.",
      duration: "Flexible",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
      {/* Page Header */}
      <section className="relative min-h-[40vh] overflow-hidden py-1 md:min-h-[90vh] md:py-20">
        <motion.div
          initial={{ opacity: 1, scale: 1.02 }}
          animate={{ opacity: 1, scale: [1, 1.02, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat scale-[1] origin-center md:block"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(2, 11, 58, 0.82) 0%, rgba(2, 11, 58, 0.58) 42%, rgba(2, 11, 58, 0.18) 100%), url('/course.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),transparent_18%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.08),transparent_18%)]" />
        <div className="container relative z-10 mx-auto flex min-h-[40vh] items-start pt-0 px-4 md:min-h-[90vh] md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative max-w-2xl text-left"
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#F472B6]">LANGUAGE PREPARATION</p>
            <h1 className="mb-5 max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="text-white">Language</span>{' '}
              <span className="bg-gradient-to-r from-[#F472B6] via-[#C084FC] to-[#38BDF8] bg-clip-text text-transparent">Training Programs</span>
            </h1>
            <p className="max-w-xl text-sm text-slate-200/80 md:text-base">Master the language and unlock your global potential with structured, expert-led guidance for a successful study-abroad journey.</p>
            <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
              <Link href="/contact">
                <a className="cta-button">Book a Consultation</a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pt-0 pb-0 md:py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass-lg relative overflow-hidden p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#F472B6]/30 hover:bg-white/15"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F472B6]/40 to-transparent" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                  <p className="text-[#E84A8A] font-semibold mb-4 uppercase text-sm tracking-wider">{course.type}</p>
                  <p className="text-white/70 mb-6 leading-relaxed">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    {course.duration && (
                      <div className="flex items-center gap-2 text-white/60">
                        <svg className="w-5 h-5 text-[#E84A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Duration: {course.duration}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Link href="/contact">
                  <a className="cta-button w-full">
                    Enroll Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Train with Aspra Overseas?</h2>
            <p className="text-white/70 text-lg">Expert-led training for guaranteed success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Certified Trainers',
                description: 'Learn from experts with proven track records in language testing.',
              },
              {
                title: 'Customized Materials',
                description: 'Access to exclusive study resources and practice tests.',
              },
              {
                title: 'Flexible Batches',
                description: 'Choose from various time slots that fit your daily routine.',
              },
              {
                title: 'Small Batch Sizes',
                description: 'Individual attention to ensure your specific needs are met.',
              },
              {
                title: 'Mock Test Sessions',
                description: 'Regular exam-simulated tests to track your progress.',
              },
              {
                title: 'Performance Analysis',
                description: 'Detailed feedback and guidance for continuous improvement.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass-lg p-6 text-center transition-all duration-300 hover:border-[#38BDF8]/30 hover:bg-white/12"
              >
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Training?</h2>
            <p className="text-white/70 text-lg mb-8">Contact us today for a free consultation and level assessment.</p>
            <Link href="/contact">
              <a className="cta-button-lg">
                Get More Information
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
