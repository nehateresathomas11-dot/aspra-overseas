import { useState } from 'react';
import { motion } from 'framer-motion';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<'jobs' | 'inquiries'>('jobs');
  const [showJobForm, setShowJobForm] = useState(false);

  const { data: jobs, isLoading: jobsLoading, refetch: refetchJobs } = trpc.jobs.list.useQuery();
  const { data: inquiries, isLoading: inquiriesLoading } = trpc.inquiries.list.useQuery();

  const createJob = trpc.jobs.create.useMutation({
    onSuccess: () => {
      toast.success('Job created successfully');
      setShowJobForm(false);
      setFormData({
        title: '',
        company: '',
        role: 'full-time',
        location: '',
        salary: '',
        experience: '',
        category: 'general',
        description: '',
        requirements: '',
        benefits: '',
      });
      refetchJobs();
    },
    onError: (error) => {
      toast.error('Failed to create job: ' + error.message);
    },
  });

  const deleteJob = trpc.jobs.delete.useMutation({
    onSuccess: () => {
      toast.success('Job deleted successfully');
      refetchJobs();
    },
    onError: (error) => {
      toast.error('Failed to delete job: ' + error.message);
    },
  });

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    role: 'full-time',
    location: '',
    salary: '',
    experience: '',
    category: 'general',
    description: '',
    requirements: '',
    benefits: '',
  });

  // Redirect if not authenticated or not admin
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E84A8A] mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center text-white pt-24">
        <div className="glass-lg p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Admin Access Required</h2>
          <p className="text-white/60 mb-6">You need to log in with an admin account to access this page.</p>
          {/* Login button removed */}
        </div>
      </div>
    );
  }

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center text-white pt-24">
        <div className="glass-lg p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-white/60 mb-6">You do not have permission to access the admin panel.</p>
          <a href="/" className="cta-button-lg">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.company || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }
    createJob.mutate(formData);
  };

  const handleDelete = (jobId: number) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      deleteJob.mutate({ id: jobId });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark pt-24">
      {/* Header */}
      <section className="py-8 bg-gradient-to-b from-[#0B1F5B] to-[#020A2E] border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-white/60 mt-2">Welcome, {user?.name}</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-gradient-to-b from-[#020A2E] to-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 border-b border-white/10">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-3 font-semibold smooth-transition ${
                activeTab === 'jobs'
                  ? 'text-[#E84A8A] border-b-2 border-[#E84A8A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Jobs ({jobs?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-6 py-3 font-semibold smooth-transition ${
                activeTab === 'inquiries'
                  ? 'text-[#E84A8A] border-b-2 border-[#E84A8A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Inquiries ({inquiries?.length || 0})
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-gradient-to-b from-[#1E3A8A] to-[#020A2E]">
        <div className="container mx-auto px-4">
          {/* Jobs Tab */}
          {activeTab === 'jobs' && (
            <div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setShowJobForm(!showJobForm)}
                className="cta-button-lg mb-8"
              >
                {showJobForm ? 'Cancel' : 'Add New Job'}
              </motion.button>

              {showJobForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-lg p-8 mb-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Create New Job</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Job Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      />
                      <input
                        type="text"
                        placeholder="Salary"
                        value={formData.salary}
                        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                        className="glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      />
                      <input
                        type="text"
                        placeholder="Experience Required"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      />
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="glass-sm px-4 py-2 text-white bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      >
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="remote">Remote</option>
                      </select>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="glass-sm px-4 py-2 text-white bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#E84A8A]"
                      >
                        <option value="general">General</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="it">IT</option>
                        <option value="finance">Finance</option>
                        <option value="engineering">Engineering</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      className="w-full glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A] resize-none"
                    />
                    <textarea
                      placeholder="Requirements"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      rows={3}
                      className="w-full glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A] resize-none"
                    />
                    <textarea
                      placeholder="Benefits"
                      value={formData.benefits}
                      onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                      rows={3}
                      className="w-full glass-sm px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E84A8A] resize-none"
                    />
                    <button type="submit" disabled={createJob.isPending} className="cta-button-lg w-full">
                      {createJob.isPending ? 'Creating...' : 'Create Job'}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Jobs List */}
              <div className="space-y-4">
                {jobsLoading ? (
                  <div className="text-white/60">Loading jobs...</div>
                ) : jobs && jobs.length > 0 ? (
                  jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass-lg p-6 flex justify-between items-start"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-white">{job.title}</h4>
                        <p className="text-white/60">{job.company} - {job.location}</p>
                        <p className="text-white/50 text-sm mt-2">{job.salary}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(job.id)}
                        disabled={deleteJob.isPending}
                        className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg font-semibold smooth-transition"
                      >
                        Delete
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-white/60">No jobs created yet.</div>
                )}
              </div>
            </div>
          )}

          {/* Inquiries Tab */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              {inquiriesLoading ? (
                <div className="text-white/60">Loading inquiries...</div>
              ) : inquiries && inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <motion.div
                    key={inquiry.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-lg p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{inquiry.name}</h4>
                        <p className="text-white/60">{inquiry.email}</p>
                        {inquiry.phone && <p className="text-white/60">{inquiry.phone}</p>}
                      </div>
                      <span className="px-3 py-1 bg-[#E84A8A]/20 text-[#E84A8A] rounded-full text-sm font-semibold capitalize">
                        {inquiry.inquiryType}
                      </span>
                    </div>
                    <h5 className="text-white font-semibold mb-2">{inquiry.subject}</h5>
                    <p className="text-white/70 mb-4">{inquiry.message}</p>
                    <p className="text-white/50 text-sm">
                      Submitted: {new Date(inquiry.createdAt).toLocaleDateString()}
                    </p>
                  </motion.div>
                ))
              ) : (
                <div className="text-white/60">No inquiries yet.</div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
