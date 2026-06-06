import { motion } from 'framer-motion';
import { trpc } from '@/lib/trpc';
import { Link } from 'wouter';

export default function Blog() {
  const { data: posts, isLoading } = trpc.blog.list.useQuery();

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Blog & Updates</h1>
            <p className="text-white/70 text-lg">Latest news and insights from Aspra Overseas</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center text-white/60">Loading blog posts...</div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-lg p-8 hover:bg-white/15 smooth-transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60 text-sm">
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      {post.category && (
                        <span className="px-3 py-1 bg-[#E84A8A]/20 text-white/70 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-white/70 mb-6 line-clamp-3">{post.content}</p>
                  </div>

                  <button className="text-white/60 hover:text-white smooth-transition font-semibold">
                    Read More →
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60">No blog posts available at the moment.</div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-white/70 text-lg">Explore articles by topic</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Study Abroad Tips',
              'Career Guidance',
              'Visa Information',
              'Language Learning',
              'Success Stories',
              'Industry Updates',
            ].map((topic, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-lg p-6 text-center hover:bg-white/15 smooth-transition"
              >
                <h3 className="text-xl font-bold text-white">{topic}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-white/70 text-lg mb-8">Subscribe to our newsletter for the latest updates and insights</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
              />
              <button className="cta-button-lg">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
