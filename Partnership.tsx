import { useSeo } from "@/lib/seo";
import type { IconName } from "@/components/Icons";
import { Button, IconBadge, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { IMAGES, PARTNERSHIP_TYPES, PARTNER_CATEGORIES } from "@/data/site";

const benefits = [
  {
    icon: "shieldCheck",
    title: "Structured Engagement",
    text: "Partnerships are established through clear discussions and formal arrangements.",
  },
  {
    icon: "cpu",
    title: "Technology-Enabled Coordination",
    text: "Operations supported by digital tools for communication and tracking.",
  },
  {
    icon: "growth",
    title: "Long-Term Orientation",
    text: "Relationships built for sustainable growth across mobility and logistics.",
  },
];

export default function Partnership() {
  useSeo(
    "Partner With PRLA Logistics Enterprise",
    "PRLA Logistics Enterprise welcomes partnerships with vehicle owners, drivers, riders, corporate clients, logistics partners, hospitals, clinics, event organizers, and strategic investors.",
  );

  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="Let's Build the Future of Mobility Together."
        description="PRLA Logistics Enterprise welcomes partnerships with individuals and organizations interested in transportation, logistics, fleet management, and emergency mobility."
        image={IMAGES.teamwork.src}
        imageAlt={IMAGES.teamwork.alt}
      >
        <Button
          variant="gold"
          size="lg"
          iconRight="arrowRight"
          onClick={() =>
            document.getElementById("partnership-enquiry")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Become a Partner
        </Button>
        <Button to="/contact" variant="onDark" size="lg">
          Contact PRLA
        </Button>
      </PageHero>

      {/* Categories */}
      <Section tone="white" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Work With"
              title="Partnership Categories"
              subtitle="Collaboration opportunities across the mobility value chain — from vehicle owners and riders to institutions and strategic investors."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_CATEGORIES.map((category, index) => (
              <Reveal key={category.title} delay={(index % 3) * 70} className="h-full">
                <div className="group h-full rounded-2xl border border-royal-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift sm:p-7">
                  <IconBadge name={category.icon as IconName} />
                  <h3 className="mt-5 font-display text-lg font-bold text-royal-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a5a78]">{category.description}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={140} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-royal-950 p-6 text-white shadow-card sm:p-7">
                <div>
                  <IconBadge name="route" tone="dark" />
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    Another Partnership Idea?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-royal-100/75">
                    If your organization operates in a related area, share your proposal and our team
                    will review it.
                  </p>
                </div>
                <Button
                  variant="gold"
                  size="sm"
                  className="mt-6 self-start"
                  onClick={() =>
                    document
                      .getElementById("partnership-enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Submit a Proposal
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Why partner */}
      <Section tone="navy" size="md">
        <div className="grid-mesh absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-px relative">
          <Reveal>
            <SectionHeading
              eyebrow="Why Partner With PRLA"
              title="Built on Clarity, Accountability & Shared Value"
              align="center"
              dark
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold-500/40">
                  <IconBadge name={benefit.icon as IconName} tone="dark" />
                  <h3 className="mt-5 font-display text-base font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-royal-100/75">{benefit.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Enquiry form */}
      <Section tone="mist" size="lg" id="partnership-enquiry">
        <div className="container-px grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Partnership Enquiry"
                title="Become a Partner"
                subtitle="Tell us about your organization and the type of partnership you are exploring. Our team will review your enquiry and respond with next steps."
              />
            </Reveal>
            <Reveal delay={80}>
              <img
                src={IMAGES.deliveryVan.src}
                alt={IMAGES.deliveryVan.alt}
                loading="lazy"
                className="mt-8 h-56 w-full rounded-2xl object-cover shadow-card sm:h-72"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <EnquiryForm
                subject="PRLA Logistics Enterprise — Partnership Enquiry"
                submitLabel="Submit Partnership Enquiry"
                fields={[
                  { name: "Full Name", label: "Full Name", required: true, autoComplete: "name" },
                  { name: "Organization", label: "Organization", autoComplete: "organization" },
                  { name: "Phone Number", label: "Phone Number", type: "tel", required: true, autoComplete: "tel" },
                  { name: "Email Address", label: "Email Address", type: "email", required: true, autoComplete: "email" },
                  {
                    name: "Partnership Type",
                    label: "Partnership Type",
                    type: "select",
                    required: true,
                    options: PARTNERSHIP_TYPES,
                  },
                  {
                    name: "Message",
                    label: "Message",
                    type: "textarea",
                    required: true,
                    placeholder: "Describe your partnership interest, assets, coverage areas, or requirements",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
