"use client";

import { Link2, Share2 } from "lucide-react";
import { SITE_URL } from "@/constants/site";

interface BlogShareButtonsProps {
  title: string;
  path: string;
}

export default function BlogShareButtons({ title, path }: BlogShareButtonsProps) {
  const url = `${SITE_URL}${path}`;

  const shareLinks = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "Share on Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "Copy link",
      href: url,
      copy: true,
    },
  ];

  return (
    <div
      className="flex flex-wrap items-center gap-3"
      role="group"
      aria-label="Share this article"
    >
      <span className="text-sm font-medium text-neutral-600">Share:</span>
      {shareLinks.map((link, index) => {
        const Icon = index === 2 ? Link2 : Share2;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.copy ? undefined : "_blank"}
            rel={link.copy ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-secondary/40 hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            aria-label={link.label}
            onClick={
              link.copy
                ? (e) => {
                    e.preventDefault();
                    void navigator.clipboard?.writeText(url);
                  }
                : undefined
            }
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {link.label.replace("Share on ", "").replace("Copy link", "Copy Link")}
          </a>
        );
      })}
    </div>
  );
}
