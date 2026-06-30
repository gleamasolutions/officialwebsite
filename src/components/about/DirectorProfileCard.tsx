"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import DirectorProfileModal from "@/components/about/DirectorProfileModal";
import { getDirectorProfilePath, type Director } from "@/constants/directors";
import { cn } from "@/lib/utils";

interface DirectorProfileCardProps {
  director: Director;
}

const DESKTOP_QUERY = "(min-width: 1024px)";

export default function DirectorProfileCard({ director }: DirectorProfileCardProps) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const profilePath = getDirectorProfilePath(director.slug);

  const handleProfileClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia(DESKTOP_QUERY).matches;

    if (isDesktop) {
      event.preventDefault();
      setModalOpen(true);
      router.prefetch(profilePath);
    }
    // On mobile/tablet, allow normal navigation to the profile page.
  };

  return (
    <>
      <article
        className={cn(
          "group relative flex h-full flex-col items-center rounded-xl border border-neutral-200/60 bg-white p-6 text-center shadow-premium sm:p-8",
          "premium-card transition-all duration-300 hover:-translate-y-1",
        )}
      >
        <div
          className="absolute top-0 right-6 left-6 h-px gold-accent-bar opacity-80"
          aria-hidden="true"
        />

        <div className="relative mt-2 mb-6">
          <div
            className={cn(
              "relative overflow-hidden rounded-full border-4 border-white bg-primary/5 shadow-md ring-2 ring-accent/20",
              "h-32 w-32 sm:h-40 sm:w-40 lg:h-[13.5rem] lg:w-[13.5rem]",
              "transition-shadow duration-300 group-hover:shadow-lg group-hover:ring-accent/40",
            )}
          >
            <Image
              src={director.image}
              alt={`${director.name}, ${director.position}`}
              width={400}
              height={400}
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 216px"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-heading-md font-semibold text-primary">
            {director.name}
          </h3>
          <p className="mt-2 text-sm font-semibold tracking-wide text-accent uppercase">
            {director.position}
          </p>
          <p className="mt-5 line-clamp-3 flex-1 text-body-sm leading-relaxed text-neutral-600">
            {director.shortDescription}
          </p>

          <div className="mt-6">
            <Link
              href={profilePath}
              onClick={handleProfileClick}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border-2 border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary",
                "transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              )}
              aria-label={`See full profile of ${director.name}`}
            >
              See Full Profile
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </article>

      <DirectorProfileModal
        director={director}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
