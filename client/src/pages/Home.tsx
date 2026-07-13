import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { destinationCards } from '../lib/destinationData';

export default function Home() {
  const jobs = [
    {
      id: 1,
      title: "Pediatrician (Part-Time)",
      company: "Aspra Partner - UAE",
      salary: "10,000 AED Fixed",
      location: "Dubai, UAE",
      badge: "Healthcare",
      accent: "linear-gradient(135deg, rgba(232,74,138,0.20), rgba(124,58,237,0.14) 45%, rgba(2,6,23,0.92) 100%)",
      glow: "rgba(232,74,138,0.24)",
      chip: "from-[#E84A8A]/18 to-[#7C3AED]/18",
    },
    {
      id: 6,
      title: "Senior Architect",
      company: "Aspra Partner - UAE",
      salary: "Attractive Package",
      location: "Dubai, UAE",
      badge: "Architecture",
      accent: "linear-gradient(135deg, rgba(56,189,248,0.20), rgba(30,58,138,0.16) 48%, rgba(2,6,23,0.94) 100%)",
      glow: "rgba(56,189,248,0.22)",
      chip: "from-[#38BDF8]/18 to-[#1E3A8A]/18",
    },
    {
      id: 11,
      title: "Staff Nurse (Bulk Hiring)",
      company: "Aspra Partner - Mauritius",
      salary: "MUR 28,860 – 34,860",
      location: "Mauritius",
      badge: "Nursing",
      accent: "linear-gradient(135deg, rgba(168,85,247,0.20), rgba(236,72,153,0.16) 45%, rgba(2,6,23,0.92) 100%)",
      glow: "rgba(168,85,247,0.24)",
      chip: "from-[#A855F7]/18 to-[#EC4899]/18",
    },
  ];

  const countries = destinationCards;

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Registered Nurse in Germany",
      content: "Aspra Overseas helped me through the entire process of moving to Germany. Their guidance on language training and visa processing was invaluable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sandra",
      title: "Architect in Dubai",
      content: "I found my dream job in Dubai thanks to the team at Aspra. They connected me with top firms and handled all the documentation smoothly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria",
      title: "Medical Officer in Mauritius",
      content: "The bulk hiring opportunity in Mauritius was a great start for my international career. The benefits package is exactly as promised.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div id="top" className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden -mt-16 lg:-mt-20">
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: "url('/home.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
          animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,11,58,0.72),rgba(2,11,58,0.88))]" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#E84A8A]/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="container relative z-10 mx-auto flex min-h-screen items-center justify-center px-4 py-28 md:py-32 lg:py-36">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7dd3fc]"
            >
              Global Opportunities
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              Build Your Global Future
              <br />
              with <span className="bg-gradient-to-r from-[#FF5FA2] via-[#D946EF] to-[#7C3AED] bg-clip-text text-transparent">Aspra Overseas</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base"
            >
              Where your dreams find direction. Unlock international career opportunities and world-class education with expert, personalized guidance.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-row items-center justify-center gap-2 sm:gap-3"
            >
              <Link href="/jobs" className="cta-button-lg inline-flex items-center justify-center px-4 py-2 text-sm md:px-8 md:py-4 md:text-lg">Explore Jobs</Link>
              <Link href="/study-abroad" className="cta-button-lg inline-flex items-center justify-center px-4 py-2 text-sm md:px-8 md:py-4 md:text-lg">Study Abroad</Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/70 md:text-sm"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">50+ Jobs</div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">15+ Countries</div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2">50+ Success Stories</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>
      {/* Featured Jobs Preview */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Opportunities</h2>
            <p className="text-white/60 text-lg">Discover exciting career paths across the globe</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 cursor-pointer"
                style={{
                  backgroundImage: job.accent,
                  boxShadow: `0 18px 45px ${job.glow}`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_20%)] opacity-100" />
                <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-white/6 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/25 to-transparent" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className={`rounded-full border border-white/10 bg-gradient-to-r ${job.chip} px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#fff5f8]`}>{job.badge}</span>
                  <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-100">Open</span>
                </div>

                <div className="relative mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-white transition group-hover:text-[#ffb6d1]">{job.title}</h3>
                  <p className="text-sm font-semibold text-white/70">{job.company}</p>
                </div>

                <div className="relative mt-6 space-y-3 text-sm text-white/70">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/10 px-3 py-2">
                    <span className="text-[#ffb6d1]">📍</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/10 px-3 py-2">
                    <span className="text-[#7dd3fc]">💼</span>
                    <span className="font-semibold text-white/90">{job.salary}</span>
                  </div>
                </div>

                <div className="relative mt-6 flex items-center justify-between text-sm text-white/60">
                  <span>Fast-track placement</span>
                  <Link href="/jobs">
                    <a className="inline-flex items-center gap-1 font-semibold text-white/80 transition hover:text-white">
                      View Details
                      <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/jobs">
              <a className="cta-button-lg">
                View All Jobs
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Featured Countries */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Study & Work Destinations</h2>
            <p className="text-white/60 text-lg">Explore world-class opportunities abroad</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <motion.article
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/8 to-transparent shadow-[0_18px_45px_rgba(15,23,42,0.35)] backdrop-blur-xl transition duration-300 hover:border-[#E84A8A]/40 hover:bg-white/15"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.10),transparent_30%,rgba(236,72,153,0.12))]" />
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020A2E] via-[#020A2E]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-4 text-sm text-white/70">{country.summary}</p>
                  <p className="mb-6 text-white/70 line-clamp-3">{country.description}</p>

                  <div className="space-y-2 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-white/70">
                    {country.tuition && <p><span className="text-white/50">Salary / Tuition:</span> {country.tuition}</p>}
                    {country.duration && <p><span className="text-white/50">Processing:</span> {country.duration}</p>}
                  </div>

                  <Link href="/study-abroad">
                    <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
                      Explore this destination
                      <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/study-abroad">
              <a className="cta-button-lg">
                Explore All Countries
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section id="success-stories" className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#7dd3fc]">Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real journeys, real impact</h2>
            <p className="text-white/60 text-lg">Hear from professionals and students who trusted Aspra Overseas to guide their next move.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/8 to-transparent p-6 shadow-[0_18px_45px_rgba(15,23,42,0.35)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.10),transparent_18%)] opacity-80" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="relative mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-[#7dd3fc]">
                  <span>Verified Impact</span>
                  <span>{'★'.repeat(item.rating)}</span>
                </div>
                <p className="relative mb-4 text-sm text-white/80">“{item.content}”</p>
                <div className="relative flex items-center justify-between text-sm text-white/60">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">Success</span>
                </div>
                <p className="relative mt-2 text-xs uppercase tracking-[0.25em] text-[#ffb6d1]">{item.title}</p>
              </motion.article>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
            <p className="text-white/70 text-lg mb-8">Get personalized guidance from our expert consultants</p>
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


