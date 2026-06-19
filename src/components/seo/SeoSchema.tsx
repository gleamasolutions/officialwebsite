import { serializeJsonLd } from "@/lib/json-ld";
import type { JsonLdSchema } from "@/types/seo.types";

interface SeoSchemaProps {
  schema: JsonLdSchema | JsonLdSchema[];
}

export default function SeoSchema({ schema }: SeoSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
