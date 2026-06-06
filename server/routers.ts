import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./data";
import { TRPCError } from "@trpc/server";

const COMPANY_CONTACT_EMAIL = 'aspraconsultancy@gmail.com';

async function sendInquiryEmail(input: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType?: string;
}) {
  try {
    const response = await fetch('https://formsubmit.co/ajax/' + COMPANY_CONTACT_EMAIL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Inquiry: ${input.subject}`,
        _replyto: input.email,
        name: input.name,
        email: input.email,
        phone: input.phone || 'Not provided',
        inquiryType: input.inquiryType || 'general',
        message: input.message,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.warn('[Inquiry Email] Failed to send email:', response.status, detail);
    }
  } catch (error) {
    console.warn('[Inquiry Email] Error sending email:', error);
  }
}

// Admin-only procedure
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Jobs routes
  jobs: router({
    list: publicProcedure.query(async () => {
      return await db.getActiveJobs();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getJobById(input.id);
      }),
    getByCategory: publicProcedure
      .input(z.object({ category: z.string() }))
      .query(async ({ input }) => {
        return await db.getJobsByCategory(input.category);
      }),
    create: adminProcedure
      .input(z.object({
        title: z.string(),
        company: z.string(),
        role: z.string(),
        salary: z.string(),
        location: z.string(),
        experience: z.string(),
        description: z.string(),
        requirements: z.string(),
        benefits: z.string().optional(),
        category: z.string(),
      }))
      .mutation(async ({ input }) => {
        return await db.createJob(input);
      }),
    update: adminProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        company: z.string().optional(),
        role: z.string().optional(),
        salary: z.string().optional(),
        location: z.string().optional(),
        experience: z.string().optional(),
        description: z.string().optional(),
        requirements: z.string().optional(),
        benefits: z.string().optional(),
        category: z.string().optional(),
        isActive: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...updates } = input;
        return await db.updateJob(id, updates);
      }),
    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        return await db.deleteJob(input.id);
      }),
  }),

  // Countries routes
  countries: router({
    list: publicProcedure.query(async () => {
      return await db.getActiveCountries();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getCountryById(input.id);
      }),
  }),

  // Courses routes
  courses: router({
    list: publicProcedure.query(async () => {
      return await db.getActiveCourses();
    }),
    getByType: publicProcedure
      .input(z.object({ type: z.string() }))
      .query(async ({ input }) => {
        return await db.getCoursesByType(input.type);
      }),
  }),

  // Inquiries routes
  inquiries: router({
    create: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string(),
        message: z.string(),
        inquiryType: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const inquiry = await db.createInquiry({
          ...input,
          status: 'new',
        });

        await sendInquiryEmail(input);

        return inquiry;
      }),
    list: adminProcedure.query(async () => {
      return await db.getInquiries();
    }),
    getById: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getInquiryById(input.id);
      }),
    update: adminProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['new', 'read', 'responded', 'closed']).optional(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...updates } = input;
        return await db.updateInquiry(id, updates);
      }),
  }),

  // Testimonials routes
  testimonials: router({
    list: publicProcedure.query(async () => {
      return await db.getActiveTestimonials();
    }),
  }),

  // Blog routes
  blog: router({
    list: publicProcedure.query(async () => {
      return await db.getPublishedBlogPosts();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await db.getBlogPostBySlug(input.slug);
      }),
  }),

  // Job Applications routes
  applications: router({
    create: publicProcedure
      .input(z.object({
        jobId: z.number(),
        name: z.string(),
        email: z.string().email(),
        phone: z.string().optional(),
        resumeUrl: z.string().optional(),
        coverLetter: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await db.createJobApplication({
          ...input,
          status: 'submitted',
        });
      }),
    getForJob: adminProcedure
      .input(z.object({ jobId: z.number() }))
      .query(async ({ input }) => {
        return await db.getJobApplicationsForJob(input.jobId);
      }),
  }),
});

export type AppRouter = typeof appRouter;
