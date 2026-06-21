import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SectionBackground from "@/components/shared/SectionBackground";

export default function ContactSections() {
  return (
    <>
      <section
        className="relative bg-[#F8FAFC] py-16 lg:py-24"
        aria-labelledby="contact-info-heading"
      >
        <SectionBackground tone="muted" />
        <Container className="relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="contact-info-heading"
              className="text-heading-lg font-bold text-primary"
            >
              Get In Touch
            </h2>
            <p className="mt-3 text-body-lg text-neutral-600">
              We welcome inquiries from investors, partners, and institutions
              seeking long-term value creation.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
            <ContactInfo />
            <div aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading" className="sr-only">
                Contact form
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
