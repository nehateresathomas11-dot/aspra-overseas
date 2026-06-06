import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { destinationCards } from '../lib/destinationData';

function HeroArt() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 h-full w-full opacity-80" aria-hidden="true">
      <defs>
        <radialGradient id="glowA" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.14)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </radialGradient>
        <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(236,72,153,0.14)" />
          <stop offset="100%" stopColor="rgba(236,72,153,0)" />
        </radialGradient>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="rgba(148,163,184,0.45)" />
        </pattern>
      </defs>
      <rect width="1200" height="700" fill="url(#glowA)" />
      <rect x="130" y="80" width="940" height="540" fill="url(#glowB)" />
      <rect x="0" y="0" width="1200" height="700" fill="url(#dots)" />
      <path d="M180 180 C330 100, 520 110, 640 220 S900 380, 1020 300" fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="2" />
      <path d="M220 430 C420 330, 620 350, 760 250 S990 120, 1085 170" fill="none" stroke="rgba(168,85,247,0.18)" strokeWidth="2" />
      <path d="M240 200 C360 260, 520 280, 670 230 S960 160, 1040 220" fill="none" stroke="rgba(125,211,252,0.14)" strokeWidth="2" />
      <circle cx="640" cy="220" r="4" fill="#60A5FA" />
      <circle cx="220" cy="430" r="4" fill="#C084FC" />
      <circle cx="1020" cy="300" r="4" fill="#F472B6" />
      <circle cx="980" cy="170" r="4" fill="#38BDF8" />
      <circle cx="310" cy="150" r="4" fill="#A78BFA" />
      <g fill="rgba(191,219,254,0.9)">
        <circle cx="180" cy="180" r="3" />
        <circle cx="340" cy="132" r="3" />
        <circle cx="468" cy="242" r="3" />
        <circle cx="570" cy="128" r="3" />
        <circle cx="710" cy="145" r="3" />
        <circle cx="840" cy="240" r="3" />
        <circle cx="940" cy="330" r="3" />
        <circle cx="1050" cy="270" r="3" />
        <circle cx="260" cy="520" r="3" />
        <circle cx="380" cy="430" r="3" />
        <circle cx="500" cy="540" r="3" />
        <circle cx="620" cy="410" r="3" />
        <circle cx="760" cy="490" r="3" />
        <circle cx="880" cy="390" r="3" />
      </g>
      <path d="M1030 180 C980 220, 930 255, 885 300" fill="none" stroke="rgba(147,197,253,0.65)" strokeWidth="2" />
      <path d="M1030 180 C995 155, 960 140, 920 132" fill="none" stroke="rgba(244,114,182,0.35)" strokeWidth="2" />
      <g transform="translate(1020 170) rotate(-15)">
        <path d="M0 0 L18 -8 L12 0 L18 8 Z" fill="#E0F2FE" />
        <path d="M0 0 L-28 0" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function StudyAbroad() {
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);

  const countries = destinationCards;

  const selectedCountry = selectedCountryId ? countries.find(c => c.id === selectedCountryId) : null;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#020A2E_0%,#0B1F5B_45%,#020A2E_100%)] pt-24">
      {/* Page Header */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020A2E_0%,#0B1F5B_45%,#020A2E_100%)]" />
        <div className="absolute inset-0 opacity-70">
          <HeroArt />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.08),transparent_25%),radial-gradient(circle_at_right,_rgba(56,189,248,0.08),transparent_20%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex max-w-5xl flex-col items-center text-center"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-[#F472B6]">Global Opportunities</p>
            <h1 className="mb-5 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              Study <span className="bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#8B5CF6] bg-clip-text text-transparent">Abroad</span>
            </h1>
            <p className="max-w-3xl text-sm text-slate-200/80 md:text-base lg:text-lg">Your journey to global education, career opportunities, and a future that knows no boundaries.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {[
              { title: 'Top Universities', icon: '🎓' },
              { title: '15+ Countries', icon: '🌍' },
              { title: 'Career Growth', icon: '💼' },
              { title: 'End-to-End Support', icon: '🎧' },
            ].map((item, index) => (
              <article key={item.title} className="flex items-center gap-3 rounded-full border border-white/8 bg-transparent px-3 py-2 text-left">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0F172A] via-[#1E40AF] to-[#38BDF8] text-base text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.35)]">{item.icon}</span>
                <span className="h-6 w-px bg-gradient-to-b from-transparent via-[#38BDF8] to-transparent shadow-[0_0_10px_rgba(56,189,248,0.35)]" />
                <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                {index < 3 && <span className="ml-auto hidden text-white/30 md:block">•</span>}
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-[linear-gradient(180deg,#020A2E_0%,#0B1F5B_45%,#020A2E_100%)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Study Abroad Programs</h2>
              <p className="text-white/70 text-lg mb-8">We offer comprehensive admission guidance for various levels and needs:</p>
              <ul className="space-y-4">
                {[
                  'Diploma, Undergraduate & Postgraduate Programs',
                  'Career-focused courses across multiple countries',
                  'Customized university selection based on student profile',
                  'Assistance with applications, documentation & visa process'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80 text-lg">
                    <span className="w-3 h-3 rounded-full bg-[#E84A8A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {countries.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => setSelectedCountryId(country.id)}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/8 to-transparent text-left shadow-[0_18px_45px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#E84A8A]/40 hover:bg-white/15"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020A2E] via-[#020A2E]/20 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{country.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-white/70">{country.summary}</p>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCountryId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 pt-24 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-h-[90vh] max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0B1F5B_0%,#020A2E_100%)] p-4 shadow-[0_20px_50px_rgba(2,10,46,0.45)] md:p-5"
          >
            <div className="mb-5 overflow-hidden rounded-[24px] border border-white/10 bg-black/20 shadow-[0_16px_40px_rgba(2,10,46,0.35)]">
              <div className="relative h-44 w-full overflow-hidden md:h-52">
                <button
                  type="button"
                  onClick={() => setSelectedCountryId(null)}
                  className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-none bg-transparent text-white/70 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring-0 md:h-9 md:w-9"
                  aria-label="Close country details"
                >
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedCountry.flag}
                  alt={`${selectedCountry.name} flag`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A2E] via-[#020A2E]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#E84A8A]">{selectedCountry.region}</p>
                  <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{selectedCountry.name}</h2>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-base leading-relaxed text-white/70">{selectedCountry.description}</p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {selectedCountry.tuition && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="mb-1 text-xs text-white/60">Tuition / Salary</p>
                  <p className="font-semibold text-white">{selectedCountry.tuition}</p>
                </div>
              )}
              {selectedCountry.duration && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="mb-1 text-xs text-white/60">Duration / Processing</p>
                  <p className="font-semibold text-white">{selectedCountry.duration}</p>
                </div>
              )}
            </div>

            {selectedCountry.highlights && (
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-bold text-white">Highlights</h3>
                <p className="text-sm leading-relaxed text-white/70">{selectedCountry.highlights}</p>
              </div>
            )}

            <div className="flex justify-end">
              <Link href="/contact">
                <a className="cta-button-lg inline-flex min-w-[140px] items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold md:min-w-[150px] md:px-5 md:py-3.5 md:text-base">
                  Get More Info
                </a>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
