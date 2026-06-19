export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}
