import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getPublicContactEmail } from "@/lib/env";

export const CONTACT_DETAILS = [
  {
    label: "Phone",
    value: "+94 11 000 0000",
    href: "tel:+94110000000",
    icon: Phone,
  },
  {
    label: "Email",
    value: getPublicContactEmail(),
    href: `mailto:${getPublicContactEmail()}`,
    icon: Mail,
  },
  {
    label: "Address",
    value: "Level 12, East Tower, World Trade Center, Colombo 01, Sri Lanka",
    icon: MapPin,
  },
  {
    label: "Business Hours",
    value: "Monday – Friday: 8:30 AM – 5:30 PM (IST)",
    icon: Clock,
  },
] as const;

export const CONTACT_SUBJECTS = [
  "Business Inquiry",
  "Partnership Opportunity",
  "General Corporate Inquiry",
  "Investment Inquiry",
  "Private Equity",
] as const;
