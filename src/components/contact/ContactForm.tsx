"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-body-md text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-secondary/30 bg-secondary/5 p-8 text-center shadow-premium"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-heading-md font-semibold text-primary">
          Thank you for contacting Gleama.
        </h3>
        <p className="mt-3 text-body-md text-neutral-600">
          Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-xl border border-neutral-200/60 bg-white p-6 shadow-premium sm:p-8"
      aria-label="Contact form"
      noValidate
    >
      {status === "error" && (
        <div
          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
          aria-live="assertive"
        >
          Unable to send message. Please try again later.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-neutral-700">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={cn(inputClasses, errors.fullName && "border-red-400")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={cn(inputClasses, errors.email && "border-red-400")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={cn(inputClasses, errors.phone && "border-red-400")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-700">
            Subject <span className="text-accent">*</span>
          </label>
          <input
            id="subject"
            type="text"
            className={cn(inputClasses, errors.subject && "border-red-400")}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            className={cn(inputClasses, "resize-y", errors.message && "border-red-400")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
