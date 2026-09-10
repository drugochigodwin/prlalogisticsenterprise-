import type { ReactNode } from "react";
import { useSeo } from "@/lib/seo";
import { Button, Notice, PageHero, Reveal, Section } from "@/components/ui";
import { EMAIL, EMAIL_HREF, IMAGES, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

type Clause = { heading: string; body: ReactNode };

function LegalLayout({
  eyebrow,
  title,
  intro,
  clauses,
  notice,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  clauses: Clause[];
  notice: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        image={IMAGES.freight.src}
        imageAlt={IMAGES.freight.alt}
      />

      <Section tone="white" size="lg">
        <div className="container-px grid gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-royal-100 bg-[#f5f7fa] p-6">
                <h2 className="font-display text-sm font-bold tracking-[0.16em] text-royal-900 uppercase">
                  On This Page
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {clauses.map((clause, index) => (
                    <li key={clause.heading}>
                      <a
                        href={`#${eyebrow.toLowerCase().replace(/\s+/g, "-")}-${index}`}
                        className="text-[#4a5a78] transition-colors hover:text-royal-800"
                        onClick={(event) => {
                          event.preventDefault();
                          document
                            .getElementById(`${eyebrow.toLowerCase().replace(/\s+/g, "-")}-${index}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {index + 1}. {clause.heading}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2 border-t border-royal-100 pt-5 text-sm">
                  <p className="font-semibold text-royal-900">Questions?</p>
                  <a href={PHONE_TEL} className="block text-royal-700 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={EMAIL_HREF} className="block break-all text-royal-700 hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>

          <div className="lg:col-span-8">
            <Reveal>
              <Notice title="Placeholder Document" tone="amber">
                {notice}
              </Notice>
            </Reveal>

            <div className="mt-10 space-y-10">
              {clauses.map((clause, index) => (
                <Reveal key={clause.heading} delay={40}>
                  <article id={`${eyebrow.toLowerCase().replace(/\s+/g, "-")}-${index}`}>
                    <h2 className="font-display text-xl font-extrabold text-royal-900 sm:text-2xl">
                      {index + 1}. {clause.heading}
                    </h2>
                    <div className="mt-3 space-y-3 text-base leading-relaxed text-[#4a5a78]">
                      {clause.body}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-12 flex flex-wrap gap-3">
                <Button to="/contact" size="lg" iconRight="arrowRight">
                  Contact PRLA
                </Button>
                <Button to="/" size="lg" variant="outline">
                  Back to Home
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

export function PrivacyPolicy() {
  useSeo(
    "Privacy Policy | PRLA Logistics Enterprise",
    "Privacy Policy placeholder for PRLA Logistics Enterprise. The full policy will be published once finalised.",
  );

  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="How PRLA Logistics Enterprise intends to handle information shared through this website and our enquiry channels."
      notice="This page is a professional placeholder. The final Privacy Policy for PRLA Logistics Enterprise is subject to confirmation and will be published here once finalised. No legal registrations, certifications, or regulatory approvals are represented on this page."
      clauses={[
        {
          heading: "Introduction",
          body: (
            <p>
              This Privacy Policy explains, in general terms, how PRLA Logistics Enterprise approaches
              information shared through this website. Detailed provisions are to be confirmed.
            </p>
          ),
        },
        {
          heading: "Information We May Collect",
          body: (
            <p>
              Information you choose to provide through enquiry forms — such as your name, phone number,
              email address, location details, service requirements, and any message content — may be
              used to respond to your request.
            </p>
          ),
        },
        {
          heading: "How Information May Be Used",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to service, partnership, or investment enquiries.</li>
              <li>To coordinate transportation, logistics, fleet, or emergency mobility requests.</li>
              <li>To improve service quality and communication with customers and partners.</li>
            </ul>
          ),
        },
        {
          heading: "Information Sharing",
          body: (
            <p>
              Information is not sold. Any circumstances in which information may be shared with service
              providers or required by law are subject to confirmation in the final policy.
            </p>
          ),
        },
        {
          heading: "Data Retention & Security",
          body: (
            <p>
              Retention periods and specific security measures are to be confirmed. PRLA Logistics
              Enterprise intends to apply reasonable measures appropriate to the information handled.
            </p>
          ),
        },
        {
          heading: "Your Choices",
          body: (
            <p>
              You may contact PRLA Logistics Enterprise to ask about the information you have shared or
              to request that it no longer be used for follow-up communication.
            </p>
          ),
        },
        {
          heading: "Cookies & Analytics",
          body: (
            <p>
              Any use of cookies or analytics tools on this website is to be confirmed and will be
              described here once implemented.
            </p>
          ),
        },
        {
          heading: "Updates to This Policy",
          body: <p>This placeholder will be replaced by the finalised Privacy Policy when available.</p>,
        },
        {
          heading: "Contact",
          body: (
            <p>
              For privacy questions, contact PRLA Logistics Enterprise on{" "}
              <a className="font-semibold text-royal-700 underline" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>{" "}
              or{" "}
              <a className="font-semibold text-royal-700 underline" href={EMAIL_HREF}>
                {EMAIL}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}

export function Terms() {
  useSeo(
    "Terms & Conditions | PRLA Logistics Enterprise",
    "Terms & Conditions placeholder for PRLA Logistics Enterprise. Final terms will be published once confirmed.",
  );

  return (
    <LegalLayout
      eyebrow="Terms Conditions"
      title="Terms & Conditions"
      intro="General terms relating to the use of this website and enquiries made to PRLA Logistics Enterprise."
      notice="This page is a professional placeholder. Final Terms & Conditions for PRLA Logistics Enterprise are subject to confirmation. Nothing on this page constitutes a binding service agreement, and no legal registrations, licences, or approvals are represented."
      clauses={[
        {
          heading: "Website Use",
          body: (
            <p>
              This website provides general information about PRLA Logistics Enterprise services.
              Content may be updated at any time and should not be treated as a formal offer.
            </p>
          ),
        },
        {
          heading: "Service Enquiries",
          body: (
            <p>
              Submitting an enquiry does not create a service agreement. Services are provided only
              after requirements, availability, and terms have been confirmed by PRLA Logistics
              Enterprise.
            </p>
          ),
        },
        {
          heading: "Ambulance & Emergency Transportation",
          body: (
            <p>
              Ambulance quick response and emergency transportation support is subject to vehicle
              availability, location, operational readiness, and applicable medical and emergency-service
              requirements. In a life-threatening emergency, contact the appropriate emergency services
              immediately.
            </p>
          ),
        },
        {
          heading: "Investment Information",
          body: (
            <p>
              Investment categories and amounts shown on this website are proposed for information
              purposes only. They are subject to availability, formal agreements, due diligence, and
              applicable laws. No guaranteed returns or profits are promised.
            </p>
          ),
        },
        {
          heading: "Partnerships",
          body: (
            <p>
              Partnership discussions are subject to review, documentation, and formal agreement before
              any operational arrangement begins.
            </p>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <p>
              The PRLA Logistics Enterprise name, brand marks, and website content are intended for use
              by PRLA Logistics Enterprise. Detailed provisions are to be confirmed.
            </p>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <p>
              Liability provisions are to be confirmed in the finalised Terms & Conditions. Website
              information is provided in good faith and without warranty of completeness.
            </p>
          ),
        },
        {
          heading: "Governing Law",
          body: <p>Governing law and dispute resolution provisions: To Be Confirmed.</p>,
        },
        {
          heading: "Contact",
          body: (
            <p>
              For questions about these terms, contact PRLA Logistics Enterprise on{" "}
              <a className="font-semibold text-royal-700 underline" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>{" "}
              or{" "}
              <a className="font-semibold text-royal-700 underline" href={EMAIL_HREF}>
                {EMAIL}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
