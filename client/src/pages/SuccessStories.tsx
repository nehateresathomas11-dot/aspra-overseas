import { motion } from 'framer-motion';

export default function SuccessStories() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Registered Nurse in Germany",
      country: "Germany",
      content: "Aspra Overseas helped me through the entire process of moving to Germany. Their guidance on language training and visa processing was invaluable. I'm now working in a top hospital in Berlin.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmed Khan",
      title: "Senior Architect in Dubai",
      country: "UAE",
      content: "I found my dream job in Dubai thanks to the team at Aspra. They connected me with top firms and handled all the documentation smoothly. The salary package was exactly as discussed.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Medical Officer in Mauritius",
      country: "Mauritius",
      content: "The bulk hiring opportunity in Mauritius was a great start for my international career. The benefits package, including accommodation and transportation, is excellent.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Chen",
      title: "Warehouse Assistant in Netherlands",
      country: "Netherlands",
      content: "I was looking for an entry-level opportunity in Europe, and Aspra found me a warehouse role in the Netherlands. The processing was transparent and timely.",
      rating: 5,
    },
    {
      id: 5,
      name: "Priya Sharma",
      title: "Community Nurse in Qatar",
      country: "Qatar",
      content: "Working in a government hospital in Qatar has been a fantastic experience. Aspra's interview preparation was key to my success in the direct interview.",
      rating: 5,
    },
    {
      id: 6,
      name: "David Smith",
      title: "General Worker in Canada",
      country: "Canada",
      content: "Moving to Canada was always my dream. Aspra handled my LMIA-based work permit efficiently, and I'm now happily settled here with a great job.",
      rating: 5,
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Success Stories</h1>
            <p className="text-white/70 text-lg">Inspiring journeys of our successful candidates</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-lg p-8 hover:bg-white/15 smooth-transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-white/60 text-sm">{testimonial.title}</p>
                    {testimonial.country && (
                      <p className="text-white/50 text-sm">{testimonial.country}</p>
                    )}
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">{testimonial.content}</p>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                <p className="text-white/50 text-sm italic">
                  "Their guidance was invaluable in achieving my dreams"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-white/70 text-lg">Numbers that speak to our commitment</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '10,000+', label: 'Successful Placements' },
              { number: '50+', label: 'Countries Covered' },
              { number: '500+', label: 'Partner Institutions' },
              { number: '98%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-lg p-8 text-center hover:bg-white/15 smooth-transition"
              >
                <h3 className="text-4xl font-bold text-[#E84A8A] mb-2">{stat.number}</h3>
                <p className="text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be the Next Success Story</h2>
            <p className="text-white/70 text-lg mb-8">Join thousands of students and professionals who have achieved their dreams</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cta-button-lg">
                Get Started Today
              </a>
              <a href="/jobs" className="px-8 py-4 rounded-lg font-bold text-white border border-white/20 hover:bg-white/10 smooth-transition">
                Explore Opportunities
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
