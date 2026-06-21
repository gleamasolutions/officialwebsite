"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import BlogArticleCard from "@/components/blog/BlogArticleCard";
import SectionTitle from "@/components/shared/SectionTitle";
import type { BlogArticle } from "@/constants/blog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

interface BlogRelatedArticlesProps {
  articles: BlogArticle[];
}

export default function BlogRelatedArticles({
  articles,
}: BlogRelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section
      className="relative bg-[#F8FAFC] py-20 lg:py-28"
      aria-label="Related articles"
    >
      <Container>
        <FadeIn>
          <SectionTitle
            title="Related Articles"
            subtitle="Continue exploring insights from the Gleama editorial team."
            align="center"
            className="mb-12"
          />
        </FadeIn>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          role="list"
          aria-label="Related blog articles"
        >
          {articles.map((article, index) => (
            <motion.div key={article.slug} variants={cardVariants} role="listitem">
              <BlogArticleCard article={article} index={index + 1} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
