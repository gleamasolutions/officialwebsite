import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import BlogBackLink from "@/components/blog/BlogBackLink";
import BlogRelatedArticles from "@/components/blog/BlogRelatedArticles";
import BlogShareButtons from "@/components/blog/BlogShareButtons";
import SectionBackground from "@/components/shared/SectionBackground";
import type { BlogArticle } from "@/constants/blog";
import { getArticlePath, getRelatedArticles } from "@/constants/blog";

interface BlogArticleTemplateProps {
  article: BlogArticle;
}

export default function BlogArticleTemplate({
  article,
}: BlogArticleTemplateProps) {
  const path = getArticlePath(article.slug);
  const related = getRelatedArticles(article.slug);

  return (
    <>
      <section
        className="relative overflow-hidden bg-primary pt-28 pb-16 text-white lg:pt-36 lg:pb-20"
        aria-labelledby="article-title"
      >
        <SectionBackground tone="dark" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative">
          <SlideUp>
            <BlogBackLink />
          </SlideUp>

          <SlideUp delay={0.08}>
            <div className="mt-10 max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-accent uppercase backdrop-blur-sm">
                  {article.category}
                </span>
                <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
                <span className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
                  Gleama Insights
                </span>
              </div>

              <h1
                id="article-title"
                className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl xl:text-display-sm"
              >
                {article.title}
              </h1>

              <div
                className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent via-secondary to-accent"
                aria-hidden="true"
              />

              <div
                className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
                role="group"
                aria-label="Article details"
              >
                <span className="inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 backdrop-blur-sm">
                  <Calendar className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="sr-only">Published </span>
                    <time dateTime={article.publishedDate}>
                      {article.publishedDateDisplay}
                    </time>
                  </span>
                </span>

                <span className="inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 backdrop-blur-sm">
                  <Clock className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  <span>{article.readingTimeMinutes} min read</span>
                </span>

                <span className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 backdrop-blur-sm">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent"
                    aria-hidden="true"
                  >
                    GE
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">Written by</span>
                    <span className="font-medium">{article.author}</span>
                  </span>
                </span>
              </div>
            </div>
          </SlideUp>
        </Container>
      </section>

      <section aria-label="Featured article image">
        <Container className="relative -mt-10 lg:-mt-14">
          <SlideUp delay={0.15}>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/20 shadow-premium ring-1 ring-black/5">
              <Image
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-primary/80 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                {article.category}
              </span>
            </div>
          </SlideUp>
        </Container>
      </section>

      <article className="bg-white py-16 lg:py-20" aria-label="Article content">
        <Container>
          <div className="mx-auto max-w-3xl">
            {article.sections.map((section, sectionIndex) => (
              <SlideUp key={section.id} delay={0.05 * sectionIndex}>
                <section
                  id={section.id}
                  className="mb-12 last:mb-0"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-heading-md font-semibold text-primary"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-body-md leading-relaxed text-neutral-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </SlideUp>
            ))}

            <SlideUp delay={0.2}>
              <div className="mt-12 border-t border-neutral-100 pt-8">
                <BlogShareButtons title={article.title} path={path} />
              </div>
            </SlideUp>
          </div>
        </Container>
      </article>

      <BlogRelatedArticles articles={related} />
    </>
  );
}
