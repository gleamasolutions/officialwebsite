import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import SlideUp from "@/components/animations/SlideUp";
import DirectorBiography from "@/components/about/DirectorBiography";
import SectionBackground from "@/components/shared/SectionBackground";
import type { Director } from "@/constants/directors";

interface DirectorProfilePageProps {
  director: Director;
}

export default function DirectorProfilePage({ director }: DirectorProfilePageProps) {
  return (
    <>
      <section
        className="relative overflow-hidden bg-primary pt-28 pb-16 text-white lg:pt-32 lg:pb-20"
        aria-labelledby="director-hero-name"
      >
        <SectionBackground tone="dark" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px gold-accent-bar opacity-70"
          aria-hidden="true"
        />

        <Container className="relative">
          <Link
            href="/about#board-of-directors"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to About Us
          </Link>

          <div className="mt-10 flex flex-col items-center text-center sm:flex-row sm:items-end sm:gap-8 sm:text-left">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-white/10 ring-2 ring-accent/30 sm:h-44 sm:w-44">
              <Image
                src={director.image}
                alt={`${director.name}, ${director.position}`}
                width={440}
                height={440}
                className="h-full w-full object-cover object-top"
                sizes="176px"
                priority
              />
            </div>
            <div className="mt-6 sm:mt-0">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Board of Directors
              </p>
              <h1
                id="director-hero-name"
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-display-sm"
              >
                {director.name}
              </h1>
              <p className="mt-2 text-body-lg font-medium text-white/80">
                {director.position}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-label="Executive profile">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SlideUp>
              <DirectorBiography sections={director.sections} />
            </SlideUp>

            <SlideUp delay={0.15}>
              <div className="mt-12 border-t border-neutral-100 pt-8">
                <Link
                  href="/about#board-of-directors"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back to About Us
                </Link>
              </div>
            </SlideUp>
          </div>
        </Container>
      </section>
    </>
  );
}
