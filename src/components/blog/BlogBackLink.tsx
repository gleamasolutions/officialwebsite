import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogBackLink() {
  return (
    <nav aria-label="Blog navigation">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Blog
      </Link>
    </nav>
  );
}
