import { Clock, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { COMPANY } from "@/constants/site";
import { getPublicContactEmail } from "@/lib/env";

export const CONTACT_DETAILS = [
  {
    label: "Phone",
    value: COMPANY.phone,
    href: COMPANY.phoneTel,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: COMPANY.whatsapp,
    href: COMPANY.whatsappUrl,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Email",
    value: getPublicContactEmail(),
    href: `mailto:${getPublicContactEmail()}`,
    icon: Mail,
  },
  {
    label: "Address",
    value: COMPANY.addressLines.join("\n"),
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
