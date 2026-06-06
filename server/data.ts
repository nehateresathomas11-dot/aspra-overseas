import { ENV } from "./_core/env";

export type User = {
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  loginMethod: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn: Date;
};

export type Job = {
  id: number;
  title: string;
  company: string;
  role: string;
  salary: string;
  location: string;
  experience: string;
  description: string;
  requirements: string;
  benefits?: string | null;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Country = {
  id: number;
  name: string;
  description?: string | null;
  tuition?: string | null;
  duration?: string | null;
  highlights?: string | null;
  imageUrl?: string | null;
  flagEmoji?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Course = {
  id: number;
  name: string;
  type: string;
  description?: string | null;
  duration?: string | null;
  price?: number | null;
  schedule?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  inquiryType?: string | null;
  status: "new" | "read" | "responded" | "closed";
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Testimonial = {
  id: number;
  name: string;
  title?: string | null;
  country?: string | null;
  content: string;
  imageUrl?: string | null;
  rating: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  imageUrl?: string | null;
  category?: string | null;
  author?: string | null;
  isPublished: boolean;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export type JobApplication = {
  id: number;
  jobId: number;
  name: string;
  email: string;
  phone?: string | null;
  resumeUrl?: string | null;
  coverLetter?: string | null;
  status: "submitted" | "reviewing" | "shortlisted" | "rejected";
  createdAt: Date;
  updatedAt: Date;
};

const now = () => new Date();

const usersStore = new Map<string, User>();
const jobsStore: Job[] = [
  {
    id: 1,
    title: "Healthcare Consultant",
    company: "Aspra Overseas",
    role: "consultant",
    salary: "Competitive",
    location: "Dubai",
    experience: "2+ years",
    description: "Support healthcare recruitment and visa guidance for international candidates.",
    requirements: "Strong communication and healthcare industry knowledge.",
    benefits: "Training and career growth",
    category: "healthcare",
    isActive: true,
    createdAt: now(),
    updatedAt: now(),
  },
];
const countriesStore: Country[] = [];
const coursesStore: Course[] = [];
const inquiriesStore: Inquiry[] = [];
const testimonialsStore: Testimonial[] = [];
const blogPostsStore: BlogPost[] = [];
const applicationsStore: JobApplication[] = [];

let nextId = 1;
const nextEntityId = () => ++nextId;

export async function upsertUser(user: {
  openId: string;
  name?: string | null;
  email?: string | null;
  loginMethod?: string | null;
  role?: "user" | "admin";
  lastSignedIn?: Date;
}): Promise<void> {
  const existing = usersStore.get(user.openId);
  const record: User = {
    id: existing?.id ?? nextEntityId(),
    openId: user.openId,
    name: user.name ?? existing?.name ?? null,
    email: user.email ?? existing?.email ?? null,
    loginMethod: user.loginMethod ?? existing?.loginMethod ?? null,
    role: user.role ?? (user.openId === ENV.ownerOpenId ? "admin" : existing?.role ?? "user"),
    createdAt: existing?.createdAt ?? now(),
    updatedAt: now(),
    lastSignedIn: user.lastSignedIn ?? now(),
  };

  usersStore.set(user.openId, record);
}

export async function getUserByOpenId(openId: string): Promise<User | undefined> {
  return usersStore.get(openId);
}

export async function getActiveJobs(): Promise<Job[]> {
  return jobsStore.filter((job) => job.isActive).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getJobById(id: number): Promise<Job | null> {
  return jobsStore.find((job) => job.id === id) ?? null;
}

export async function getJobsByCategory(category: string): Promise<Job[]> {
  return jobsStore.filter((job) => job.isActive && job.category === category).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function createJob(job: Omit<Job, "id" | "createdAt" | "updatedAt" | "isActive"> & { isActive?: boolean }): Promise<Job> {
  const record: Job = {
    id: nextEntityId(),
    createdAt: now(),
    updatedAt: now(),
    ...job,
    isActive: job.isActive ?? true,
  };
  jobsStore.push(record);
  return record;
}

export async function updateJob(id: number, updates: Partial<Job>): Promise<Job | null> {
  const index = jobsStore.findIndex((job) => job.id === id);
  if (index === -1) return null;
  jobsStore[index] = { ...jobsStore[index], ...updates, updatedAt: now() };
  return jobsStore[index];
}

export async function deleteJob(id: number): Promise<boolean> {
  const index = jobsStore.findIndex((job) => job.id === id);
  if (index === -1) return false;
  jobsStore.splice(index, 1);
  return true;
}

export async function getActiveCountries(): Promise<Country[]> {
  return countriesStore.filter((country) => country.isActive).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getCountryById(id: number): Promise<Country | null> {
  return countriesStore.find((country) => country.id === id) ?? null;
}

export async function getActiveCourses(): Promise<Course[]> {
  return coursesStore.filter((course) => course.isActive).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getCoursesByType(type: string): Promise<Course[]> {
  return coursesStore.filter((course) => course.isActive && course.type === type).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function createInquiry(inquiry: Omit<Inquiry, "id" | "createdAt" | "updatedAt">): Promise<Inquiry> {
  const record: Inquiry = { id: nextEntityId(), createdAt: now(), updatedAt: now(), ...inquiry };
  inquiriesStore.unshift(record);
  return record;
}

export async function getInquiries(limit = 50): Promise<Inquiry[]> {
  return inquiriesStore.slice(0, limit);
}

export async function getInquiryById(id: number): Promise<Inquiry | null> {
  return inquiriesStore.find((item) => item.id === id) ?? null;
}

export async function updateInquiry(id: number, updates: Partial<Inquiry>): Promise<Inquiry | null> {
  const index = inquiriesStore.findIndex((item) => item.id === id);
  if (index === -1) return null;
  inquiriesStore[index] = { ...inquiriesStore[index], ...updates, updatedAt: now() };
  return inquiriesStore[index];
}

export async function getActiveTestimonials(): Promise<Testimonial[]> {
  return testimonialsStore.filter((item) => item.isActive).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getPublishedBlogPosts(limit = 10): Promise<BlogPost[]> {
  return blogPostsStore.filter((item) => item.isPublished).slice(0, limit).sort((a, b) => (b.publishedAt?.getTime() ?? 0) - (a.publishedAt?.getTime() ?? 0));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPostsStore.find((item) => item.slug === slug) ?? null;
}

export async function createJobApplication(application: Omit<JobApplication, "id" | "createdAt" | "updatedAt">): Promise<JobApplication> {
  const record: JobApplication = { id: nextEntityId(), createdAt: now(), updatedAt: now(), ...application };
  applicationsStore.unshift(record);
  return record;
}

export async function getJobApplicationsForJob(jobId: number): Promise<JobApplication[]> {
  return applicationsStore.filter((item) => item.jobId === jobId).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
