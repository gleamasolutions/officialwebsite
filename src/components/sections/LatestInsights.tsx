"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/shared/Button";
import SectionBackground from "@/components/shared/SectionBackground";
import SectionTitle from "@/components/shared/SectionTitle";
import { BLOG_PREVIEWS } from "@/constants/home";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function LatestInsights() {
  return (
    <section
      className="relative bg-white pt-12 pb-20 lg:pt-16 lg:pb-28"
      aria-label="Latest insights"
    >
      <SectionBackground tone="light" />

      <Container className="relative">
        <FadeIn>
          <SectionTitle
            title="Latest Insights"
            subtitle="Perspectives on investment strategy, market trends, and sustainable growth from our team."
            align="center"
            className="mb-14"
          />
        </FadeIn>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          role="list"
          aria-label="Latest blog articles"
        >
          {BLOG_PREVIEWS.map((post, index) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              role="listitem"
              className={cn(
                "group flex flex-col overflow-hidden rounded-xl border border-neutral-100/80 bg-white",
                "premium-card",
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                <Image
                  src={`https://placehold.co/800x500/000080/50C878?text=Insight+${index + 1}`}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="text-heading-sm font-semibold text-primary transition-colors group-hover:text-secondary">
                  <Link
                    href={post.href}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-body-sm leading-relaxed text-neutral-600">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-all group-hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <FadeIn className="mt-12 text-center">
          <Button href="/blog" variant="outline">
            View All Insights
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
