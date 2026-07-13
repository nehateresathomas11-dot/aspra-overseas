import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Jobs() {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'healthcare', 'engineering', 'IT', 'other'];
  const categoryLabels: Record<string, string> = {
    all: 'All Roles',
    healthcare: 'Healthcare',
    engineering: 'Engineering',
    IT: 'IT & Business',
    other: 'Other Roles',
  };
  const categoryIcons: Record<string, string> = {
    all: '✨',
    healthcare: '🩺',
    engineering: '🛠️',
    IT: '💻',
    other: '🌍',
  };
  const categoryGlow: Record<string, string> = {
    all: 'text-cyan-200 drop-shadow-[0_0_10px_rgba(125,211,252,0.45)]',
    healthcare: 'text-sky-200 drop-shadow-[0_0_10px_rgba(125,211,252,0.45)]',
    engineering: 'text-cyan-100 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]',
    IT: 'text-blue-200 drop-shadow-[0_0_10px_rgba(96,165,250,0.45)]',
    other: 'text-sky-100 drop-shadow-[0_0_10px_rgba(125,211,252,0.45)]',
  };

  const jobs = [
    // UAE Healthcare
    {
      id: 1,
      title: "Pediatrician (Part-Time)",
      company: "Aspra Partner - UAE",
      salary: "10,000 AED Fixed",
      location: "Dubai, UAE",
      experience: "Specialization in Pediatrics",
      description: "We are looking for a dedicated Pediatrician for a part-time role in Dubai. The role involves 4 hours per day, 6 days a week.",
      requirements: "MBBS + Specialization in Pediatrics. Valid medical license preferred. Malayalam speaking preferred. Female preferred (male candidates also considered).",
      category: "healthcare",
    },
    {
      id: 2,
      title: "Cardiologist (Part-Time)",
      company: "Aspra Partner - UAE",
      salary: "Not Fixed",
      location: "Dubai, UAE",
      experience: "MD/DNB Cardiology",
      description: "Urgent requirement for a part-time Cardiologist in Dubai. Indian nationality preferred.",
      requirements: "MBBS + MD/DNB Cardiology. Part-time (6 days / limited hours).",
      category: "healthcare",
    },
    {
      id: 3,
      title: "Male Nurse",
      company: "Aspra Partner - UAE",
      salary: "3,500 AED",
      location: "Dubai, UAE",
      experience: "GNM / BSc Nursing",
      description: "Opening for active and presentable Male Nurses in Dubai.",
      requirements: "Nursing qualification (GNM / BSc). Fluent in Hindi. Active & presentable.",
      category: "healthcare",
    },
    {
      id: 4,
      title: "Receptionist / Front Office Executive",
      company: "Aspra Partner - UAE",
      salary: "2,500 – 3,000 AED",
      location: "Dubai, UAE",
      experience: "Any degree",
      description: "Front office role in a healthcare setting in Dubai.",
      requirements: "Any degree. Fluent in Hindi. Health care experience preferred.",
      category: "healthcare",
    },
    {
      id: 5,
      title: "Call Centre Executive",
      company: "Aspra Partner - UAE",
      salary: "2,500 – 3,000 AED",
      location: "Dubai, UAE",
      experience: "Any degree",
      description: "Call center role in Dubai, preferably with experience.",
      requirements: "Any degree. Fluent in Hindi. Call center experience preferred.",
      category: "healthcare",
    },
    // UAE Engineering
    {
      id: 6,
      title: "Senior Architect",
      company: "Aspra Partner - UAE",
      salary: "Attractive Package",
      location: "Dubai, UAE",
      experience: "12+ Years (5+ in UAE)",
      description: "Lead full design cycle for luxury residential, commercial & mixed-use projects in Dubai.",
      requirements: "Bachelor’s / Master’s in Architecture. Registered Architect (Dubai Municipality preferred). Expertise in Revit, AutoCAD, SketchUp, Rhino, Grasshopper. BIM knowledge.",
      category: "engineering",
    },
    {
      id: 7,
      title: "Resident Engineer",
      company: "Aspra Partner - UAE",
      salary: "Negotiable",
      location: "UAE / GCC",
      experience: "Civil / Structural Engineering Degree",
      description: "Project & Site Supervision, inspecting construction as per drawings & safety standards.",
      requirements: "Strong leadership & technical expertise. Knowledge of FIDIC contracts. UAE authority regulations knowledge.",
      category: "engineering",
    },
    {
      id: 8,
      title: "Senior Interior Designer",
      company: "Aspra Partner - UAE",
      salary: "Negotiable",
      location: "UAE",
      experience: "Degree in Interior Design / Architecture",
      description: "Lead high-end interior projects from concept to completion.",
      requirements: "Strong BIM & design expertise. Knowledge of UAE regulations & authority approvals.",
      category: "engineering",
    },
    {
      id: 9,
      title: "Electrical Inspector",
      company: "Aspra Partner - UAE",
      salary: "Negotiable",
      location: "UAE",
      experience: "5–7 Years",
      description: "Inspect electrical installations for industrial projects, power distribution, and substations.",
      requirements: "Electrical Engineering Degree / Diploma. Industrial project experience (Mandatory).",
      category: "engineering",
    },
    // UAE IT/Business
    {
      id: 10,
      title: "Business Development Lead",
      company: "Aspra Partner - UAE",
      salary: "Negotiable + Incentives",
      location: "UAE & International",
      experience: "Degree in Business / Marketing",
      description: "Develop & execute business growth strategies and lead full bid cycles.",
      requirements: "Strong industry connections (AEC sector preferred). Proven client acquisition experience.",
      category: "it",
    },
    // Mauritius
    {
      id: 11,
      title: "Staff Nurse (Bulk Hiring - 40 Nos)",
      company: "Aspra Partner - Mauritius",
      salary: "MUR 28,860 – 34,860",
      location: "Mauritius",
      experience: "GNM (3 yrs) / BSc (2 yrs)",
      description: "Bulk hiring for ICU / Ward / Specialized / General Nurses in Mauritius.",
      requirements: "GNM or BSc Nursing. Strong patient care skills. IT literacy preferred.",
      benefits: "Free Accommodation / Allowance, Free Transportation, 9 Hours Shift System",
      category: "healthcare",
    },
    {
      id: 12,
      title: "Medical Officer (Bulk Hiring - 40 Nos)",
      company: "Aspra Partner - Mauritius",
      salary: "MUR 47,032 – 49,792",
      location: "Mauritius",
      experience: "3 Years Clinical Experience",
      description: "Bulk hiring for Medical Officers in Mauritius.",
      requirements: "MBBS + Internship. Recognition by Medical Council. Minimum 3 Years Clinical Experience.",
      benefits: "Free Accommodation / Allowance, Free Transportation, 9 Hours Shift System",
      category: "healthcare",
    },
    // Serbia
    {
      id: 13,
      title: "Electrician Supervisor",
      company: "Aspra Partner - Serbia",
      salary: "€1000 + Food",
      location: "Serbia",
      experience: "3–5 Years",
      description: "Supervise electrical works in Serbia.",
      requirements: "Diploma / Electrical Certification. English proficiency. 3–5 Years Experience.",
      benefits: "Accommodation Provided, Transportation Provided, 8 Hours/Day, 6 Days/Week",
      category: "engineering",
    },
    {
      id: 14,
      title: "Senior Electrician",
      company: "Aspra Partner - Serbia",
      salary: "€700 + Food",
      location: "Serbia",
      experience: "3–5 Years",
      description: "Senior electrician role in Serbia.",
      requirements: "English proficiency. 3–5 Years Experience.",
      benefits: "Accommodation Provided, Transportation Provided, 8 Hours/Day, 6 Days/Week",
      category: "engineering",
    },
    // Qatar
    {
      id: 15,
      title: "Community Nurse (Female Only)",
      company: "Government Hospital - Qatar",
      salary: "5300 – 5500 QAR",
      location: "Qatar",
      experience: "GNM (3 yrs) / BSc (2 yrs)",
      description: "Community nursing role in a government hospital in Qatar.",
      requirements: "GNM or BSc Nursing. Female only.",
      benefits: "Accommodation, Transportation, 21 Days Annual Leave, Medical + Insurance",
      category: "healthcare",
    },
    // Canada
    {
      id: 16,
      title: "General Work Roles (Skilled & Unskilled)",
      company: "Aspra Partner - Canada",
      salary: "4000 CAD & Above",
      location: "Canada",
      experience: "Basic qualification",
      description: "LMIA-based job processing for various skilled and unskilled roles in Canada.",
      requirements: "Basic qualification (depends on job role). Processing time: 6 to 8 Months.",
      benefits: "Loan facility up to 100%",
      category: "other",
    },
    // Netherlands
    {
      id: 17,
      title: "Warehouse Assistant",
      company: "Aspra Partner - Netherlands",
      salary: "€1800 – €2000",
      location: "Netherlands",
      experience: "Basic education",
      description: "Warehouse assistant role in the Netherlands.",
      requirements: "Basic education. Physically fit. Warehouse / labor experience preferred.",
      benefits: "Accommodation Provided, 8 Hours per day, Overtime Rewarded",
      category: "other",
    },
    // Australia
    {
      id: 18,
      title: "Packing & Cleaning (Sub Class 403)",
      company: "Aspra Partner - Australia",
      salary: "$5,700 to $6,000",
      location: "Australia",
      experience: "Basic education 10+",
      description: "Packing and cleaning roles in Australia under Sub Class 403.",
      requirements: "Basic education 10+. Processing Time: 6 – 8 Months.",
      benefits: "Medical provided, 8 Hours per day, Overtime Rewarded",
      category: "other",
    },
  ];

  const filteredJobs = jobs.filter(job => 
    selectedCategory === 'all' || job.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const selectedJob = selectedJobId ? jobs.find(j => j.id === selectedJobId) : null;

  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#06143d_0%,#020A2E_45%,#0f255f_100%)] py-14 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,74,138,0.12),transparent_30%)]" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative w-full max-w-2xl overflow-hidden rounded-[36px] p-0">
                <img
                  src="/jobs.png"
                  alt="Job opportunities illustration"
                  className="relative z-10 hidden h-64 w-full rounded-[30px] object-contain md:block md:h-80 lg:h-[26rem]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#ffb6d1]">Careers Abroad</span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
                Global Job <span className="bg-gradient-to-r from-[#ff5aa5] via-[#d93d7b] to-[#7c3aed] bg-clip-text text-transparent">Opportunities</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">Explore premium roles, fast-track placements, and trusted international career openings across healthcare, engineering, and business sectors.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
                {['18+ Active Countries', 'Trusted Recruiters', 'Fast Visa Support'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_8px_24px_rgba(2,10,46,0.25)]">{item}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gradient-to-b from-[#020A2E] to-[#16306c] py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[28px] p-5 md:p-6"
          >
            <div className="mb-4 flex flex-col items-start gap-2 text-left md:items-start">
              <p className="text-xs uppercase tracking-[0.35em] text-[#ffb6d1]">Browse roles</p>
              <h3 className="text-2xl font-semibold text-white md:text-[1.75rem]">Filter by Category</h3>
              <p className="text-sm text-white/60">Showing {categoryLabels[selectedCategory]}</p>
            </div>
            <div className="-mx-1 overflow-x-auto pb-1 md:overflow-visible md:pb-0">
              <div className="flex min-w-max gap-2 md:flex-wrap md:gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex min-w-0 items-center justify-between rounded-xl border px-2.5 py-1.5 text-[11px] font-semibold shadow-[0_10px_24px_rgba(2,10,46,0.25)] transition-all duration-300 md:px-3 md:py-2 md:text-xs ${
                      selectedCategory === category
                        ? 'border-[#E84A8A] bg-[#E84A8A] text-white shadow-[0_14px_36px_rgba(232,74,138,0.35)]'
                        : 'border-white/10 bg-white/10 text-white/80 hover:border-white/20 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-1.5 md:gap-2">
                      <span className={`text-sm md:text-base ${categoryGlow[category]}`}>{categoryIcons[category]}</span>
                      <span className="truncate">{categoryLabels[category]}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center text-white/60">No jobs found in this category.</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredJobs.map((job, index) => (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedJobId(job.id)}
                  className="group cursor-pointer rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_18px_45px_rgba(2,10,46,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#E84A8A]/40 hover:bg-[linear-gradient(180deg,rgba(232,74,138,0.14),rgba(255,255,255,0.06))]"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#ffb6d1]">{categoryLabels[job.category]}</span>
                    <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-200">Open</span>
                  </div>

                  <div className="mb-6 space-y-2">
                    <h3 className="text-xl font-bold text-white transition group-hover:text-[#ffb6d1]">{job.title}</h3>
                    <p className="text-sm font-semibold text-white/70">{job.company}</p>
                  </div>

                  <div className="space-y-3 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#ffb6d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#ffb6d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#ffb6d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.experience}
                    </div>
                  </div>

                  <button className="mt-6 w-full rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#E84A8A] hover:text-white">View Details</button>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedJobId(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-h-[90vh] max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b1f5b_0%,#020A2E_100%)] p-5 shadow-[0_25px_60px_rgba(2,10,46,0.55)] md:p-7"
          >
            <div className="p-2 md:p-1">
              {/* Close Button */}
              <button
                onClick={() => setSelectedJobId(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white"
                aria-label="Close job details"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <p className="mb-1 text-[11px] uppercase tracking-[0.35em] text-[#ffb6d1]">{categoryLabels[selectedJob.category]}</p>
              <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">{selectedJob.title}</h2>
              <p className="mb-6 text-lg text-white/70">{selectedJob.company}</p>

              <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <p className="text-white/60 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">{selectedJob.location}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-sm text-white/60">Salary</p>
                  <p className="text-white font-semibold">{selectedJob.salary}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-sm text-white/60">Experience</p>
                  <p className="text-white font-semibold">{selectedJob.experience}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-sm text-white/60">Category</p>
                  <p className="text-white font-semibold capitalize">{selectedJob.category}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Description</h3>
                <p className="text-white/70 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Requirements</h3>
                <p className="text-white/70 leading-relaxed">{selectedJob.requirements}</p>
              </div>

              {selectedJob.benefits && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Benefits</h3>
                  <p className="text-white/70 leading-relaxed">{selectedJob.benefits}</p>
                </div>
              )}

              <div className="flex justify-end">
                <Link href={`/contact?jobId=${selectedJob.id}`}>
                  <a className="cta-button-lg inline-flex min-w-[140px] items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold md:min-w-[150px] md:px-6 md:py-3.5 md:text-base">
                    Apply Now
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
