import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(120, "Full name must be 120 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number must be 30 characters or fewer."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(200, "Subject must be 200 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(5000, "Message must be 5000 characters or fewer."),
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactApiSchema = contactFormSchema;
