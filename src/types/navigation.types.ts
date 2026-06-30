export interface NavLink {
  label: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  badge?: string;
  children?: NavLink[];
}

export interface NavItem extends NavLink {}

export interface FooterSection {
  title: string;
  links: Array<NavLink & { href: string }>;
}
