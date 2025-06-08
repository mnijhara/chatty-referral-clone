
import { z } from "zod";

// Authentication validation schemas
export const signInSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name too long"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password confirmation is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Profile validation schema
export const profileUpdateSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters").max(50, "Display name too long"),
});

// Job posting validation schema
export const jobPostSchema = z.object({
  title: z.string().min(3, "Job title must be at least 3 characters").max(100, "Job title too long"),
  company: z.string().min(2, "Company name must be at least 2 characters").max(50, "Company name too long"),
  description: z.string().min(10, "Description must be at least 10 characters").max(2000, "Description too long"),
  location: z.string().min(2, "Location must be at least 2 characters").max(100, "Location too long"),
  salary: z.string().optional(),
});

// Referral request validation schema
export const referralRequestSchema = z.object({
  candidateName: z.string().min(2, "Candidate name must be at least 2 characters").max(50, "Name too long"),
  candidateEmail: z.string().email("Invalid email address"),
  position: z.string().min(3, "Position must be at least 3 characters").max(100, "Position too long"),
  resume: z.string().url("Resume must be a valid URL").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message too long"),
});

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type JobPostInput = z.infer<typeof jobPostSchema>;
export type ReferralRequestInput = z.infer<typeof referralRequestSchema>;
