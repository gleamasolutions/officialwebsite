import type { DirectorBiographySections } from "@/constants/directors";

interface DirectorBiographyProps {
  sections: DirectorBiographySections;
  headingId?: string;
}

function BiographyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="not-first:mt-8">
      <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
        {title}
      </h3>
      <div className="mt-3 space-y-4 text-body-md text-neutral-600 [&_p]:leading-[1.8]">
        {children}
      </div>
    </section>
  );
}

export default function DirectorBiography({
  sections,
  headingId,
}: DirectorBiographyProps) {
  return (
    <div id={headingId}>
      <BiographyBlock title="Profile Summary">
        <p>{sections.profileSummary}</p>
      </BiographyBlock>

      <BiographyBlock title="Professional Biography">
        {sections.professionalBiography.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </BiographyBlock>

      <BiographyBlock title="Current Position">
        <p>{sections.currentPosition}</p>
      </BiographyBlock>

      <BiographyBlock title="Leadership Philosophy">
        <p>{sections.leadershipPhilosophy}</p>
      </BiographyBlock>
    </div>
  );
}
