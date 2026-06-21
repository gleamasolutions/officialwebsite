"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import BlogArticleCard from "@/components/blog/BlogArticleCard";
import SectionBackground from "@/components/shared/SectionBackground";
import { getAllArticles } from "@/constants/blog";

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

export default function BlogListingGrid() {
  const articles = getAllArticles();

  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-label="Featured articles"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 section-fade-top-muted"
        aria-hidden="true"
      />
      <SectionBackground tone="muted" />
      <Container className="relative">
        <FadeIn>
          <p className="mb-10 text-center text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Featured Articles
          </p>
        </FadeIn>

        <motion.div
          className="grid gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          role="list"
          aria-label="Blog articles"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              variants={cardVariants}
              role="listitem"
            >
              <BlogArticleCard
                article={article}
                index={index}
                featured={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
