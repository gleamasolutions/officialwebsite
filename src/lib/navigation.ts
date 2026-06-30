import type { NavLink } from "@/types/navigation.types";

export function parseNavHref(href: string): { path: string; hash: string } {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return { path: href, hash: "" };
  }

  return {
    path: href.slice(0, hashIndex),
    hash: href.slice(hashIndex),
  };
}

/** Returns true when a nav href matches the current path and optional hash. */
export function isNavLinkActive(
  href: string | undefined,
  pathname: string,
  currentHash = "",
): boolean {
  if (!href) {
    return false;
  }

  const { path, hash } = parseNavHref(href);
  const normalizedHash = currentHash || "";

  if (pathname !== path) {
    return false;
  }

  if (hash) {
    return normalizedHash === hash;
  }

  return normalizedHash === "";
}

/** Returns true if the pathname matches this node or any descendant link. */
export function isNavTreeActive(
  node: NavLink,
  pathname: string,
  currentHash = "",
): boolean {
  if (node.href) {
    const { path, hash } = parseNavHref(node.href);

    if (pathname === path) {
      if (node.children?.length) {
        return true;
      }

      if (hash) {
        return currentHash === hash;
      }

      return currentHash === "";
    }
  }

  if (!node.children?.length) {
    return false;
  }

  return node.children.some((child) =>
    isNavTreeActive(child, pathname, currentHash),
  );
}

export function getNavExpandKey(parentKey: string, node: NavLink): string {
  return `${parentKey}::${node.href ?? "nohref"}::${node.label}`;
}

export function scrollToSection(hash: string, behavior: ScrollBehavior = "smooth") {
  if (!hash || hash === "#") {
    return;
  }

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior, block: "start" });
  }
}
