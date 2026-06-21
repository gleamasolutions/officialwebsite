import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogArticle } from "@/constants/blog";
import { getArticlePath } from "@/constants/blog";
import { cn } from "@/lib/utils";

interface BlogArticleCardProps {
  article: BlogArticle;
  index: number;
  featured?: boolean;
}

export default function BlogArticleCard({
  article,
  index,
  featured = false,
}: BlogArticleCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white",
        "shadow-premium transition-all duration-500",
        "hover:-translate-y-1 hover:border-secondary/30 hover:shadow-premium-hover",
        featured && "lg:flex-row lg:items-stretch",
      )}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative overflow-hidden bg-primary/5",
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[320px] lg:w-[42%]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 42vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          loading={index === 0 ? "eager" : "lazy"}
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"
          aria-hidden="true"
        />

        <span
          className="absolute top-4 left-4 rounded-full border border-accent/30 bg-primary/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase backdrop-blur-sm"
        >
          {article.category}
        </span>

        <span
          className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm"
          aria-label={`${article.readingTimeMinutes} minute read`}
        >
          <Clock className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
          {article.readingTimeMinutes} min
        </span>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col px-7 py-8 lg:px-10 lg:py-10",
          featured && "lg:w-[58%] lg:justify-center",
        )}
      >
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-600">
            <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <time dateTime={article.publishedDate}>
              {article.publishedDateDisplay}
            </time>
          </span>
          <span className="hidden items-center gap-1.5 rounded-full bg-secondary/10 px-3.5 py-1.5 text-xs font-medium text-secondary sm:inline-flex">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTimeMinutes} min read
          </span>
        </div>

        <h2
          className={cn(
            "font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-secondary",
            featured ? "text-heading-lg" : "text-heading-sm",
          )}
        >
          <Link
            href={getArticlePath(article.slug)}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            {article.title}
          </Link>
        </h2>

        <p className="mt-4 flex-1 text-body-md leading-relaxed text-neutral-600">
          {article.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-neutral-100 pt-6">
          <span className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
            {article.category}
          </span>
          <Link
            href={getArticlePath(article.slug)}
            className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            aria-label={`Read more: ${article.title}`}
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
