import { useSeo } from "@/lib/seo";
import type { IconName } from "@/components/Icons";
import { Button, IconBadge, Notice, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { EmergencyContactBlock } from "@/components/sections";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { IMAGES, PHONE_DISPLAY, PHONE_TEL, SAFETY_NOTICE, WHATSAPP_URL } from "@/data/site";

const ambulanceServices = [
  {
    icon: "ambulance",
    title: "Emergency Ambulance Response",
    description:
      "Ambulance transportation support for medical emergencies, subject to availability and operational readiness.",
  },
  {
    icon: "stretcher",
    title: "Patient Transportation",
    description:
      "Transportation of patients between homes, hospitals, clinics, and healthcare facilities.",
  },
  {
    icon: "hospital",
    title: "Hospital & Clinic Support",
    description: "Transportation support for healthcare institutions and medical organizations.",
  },
  {
    icon: "calendar",
    title: "Event Medical Transportation Support",
    description: "Ambulance transportation support for approved events and organized activities.",
  },
  {
    icon: "shieldBuilding",
    title: "Corporate & Institutional Emergency Support",
    description:
      "Emergency transportation arrangements for businesses, institutions, and organizations.",
  },
];

const requestSteps = [
  {
    title: "Share your request",
    text: "Call, send a WhatsApp message, or complete the emergency request form with the key details.",
  },
  {
    title: "Availability is confirmed",
    text: "Our team reviews the request against vehicle availability, location, and operational readiness.",
  },
  {
    title: "Next steps are advised",
    text: "You are advised on what can be arranged, or directed to contact the appropriate emergency services.",
  },
];

export default function Ambulance() {
  useSeo(
    "Ambulance Quick Response Services | PRLA Logistics Enterprise",
    "PRLA Logistics Enterprise provides ambulance quick response and emergency transportation support for individuals, families, hospitals, clinics, and organizations, subject to availability and operational readiness.",
  );

  return (
    <>
      <PageHero
        eyebrow="Emergency Mobility"
        title="AMBULANCE QUICK RESPONSE SERVICES"
        subtitle="When Every Second Matters, We Move With Urgency."
        description="PRLA Logistics Enterprise provides ambulance quick response and emergency transportation support designed to help individuals, families, hospitals, clinics, and organizations respond to urgent medical transportation needs."
        image={IMAGES.ambulanceNight.src}
        imageAlt={IMAGES.ambulanceNight.alt}
      >
        <Button
          variant="gold"
          size="lg"
          icon="ambulance"
          onClick={() =>
            document.getElementById("emergency-request")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Request Ambulance Assistance
        </Button>
        <Button href={PHONE_TEL} variant="light" size="lg" icon="phone">
          Call {PHONE_DISPLAY}
        </Button>
        <Button href={WHATSAPP_URL} variant="onDark" size="lg" icon="whatsapp" newTab>
          WhatsApp Enquiry
        </Button>
      </PageHero>

      {/* Safety notice */}
      <Section tone="white" size="sm">
        <div className="container-px">
          <Reveal>
            <Notice title="Safety Notice" tone="amber">
              {SAFETY_NOTICE}
            </Notice>
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section tone="mist" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Emergency Services"
              title="Ambulance & Emergency Transportation Support"
              subtitle="Structured emergency mobility support for individuals, families, healthcare institutions, event organizers, and corporate organizations."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ambulanceServices.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80} className="h-full">
                <div className="h-full rounded-2xl border border-royal-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift sm:p-7">
                  <IconBadge name={service.icon as IconName} />
                  <h3 className="mt-5 font-display text-lg leading-snug font-bold text-royal-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a5a78]">{service.description}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={160} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-royal-900 p-6 text-white shadow-card sm:p-7">
                <div>
                  <IconBadge name="phone" tone="dark" />
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    Speak With Our Team
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-royal-100/75">
                    Discuss ambulance transportation support for your household, facility, event, or
                    organization.
                  </p>
                </div>
                <a
                  href={PHONE_TEL}
                  className="mt-6 font-display text-2xl font-extrabold text-gold-400 underline decoration-gold-500/40 underline-offset-8"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* How a request is handled */}
      <Section tone="white" size="lg">
        <div className="container-px grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <img
                src={IMAGES.stretcher.src}
                alt={IMAGES.stretcher.alt}
                loading="lazy"
                className="h-72 w-full rounded-3xl object-cover shadow-card sm:h-96"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <SectionHeading
                eyebrow="How It Works"
                title="How an Ambulance Request Is Handled"
                subtitle="A clear, honest process — with availability confirmed before any commitment is made."
              />
            </Reveal>
            <ol className="mt-8 space-y-5">
              {requestSteps.map((step, index) => (
                <Reveal key={step.title} as="li" delay={index * 80}>
                  <div className="flex gap-4 rounded-2xl border border-royal-100 bg-[#f5f7fa] p-5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal-900 font-display text-sm font-bold text-gold-400">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-royal-900">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#4a5a78]">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Emergency contact */}
      <Section tone="mist" size="md">
        <div className="container-px">
          <Reveal>
            <EmergencyContactBlock
              heading="Need Ambulance Assistance?"
              description="Contact PRLA Logistics Enterprise directly for ambulance quick response and emergency transportation enquiries."
            />
          </Reveal>
        </div>
      </Section>

      {/* Emergency request form */}
      <Section tone="white" size="lg" id="emergency-request">
        <div className="container-px grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Emergency Request"
                title="Submit an Emergency Request"
                subtitle="Keep it short. Share only the details needed for our team to assess what support can be arranged."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 space-y-4">
                <Notice title="Safety Notice" tone="amber">
                  {SAFETY_NOTICE}
                </Notice>
                <Notice title="Please Note" tone="royal" icon="alert">
                  This form is a request channel only. It is not a guaranteed emergency dispatch system.
                  For the fastest response, call{" "}
                  <a className="font-bold underline" href={PHONE_TEL}>
                    {PHONE_DISPLAY}
                  </a>
                  .
                </Notice>
                <div className="flex flex-wrap gap-3">
                  <Button href={PHONE_TEL} variant="danger" icon="phone">
                    Call Now
                  </Button>
                  <Button href={WHATSAPP_URL} variant="whatsapp" icon="whatsapp" newTab>
                    Send WhatsApp Enquiry
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <EnquiryForm
                emergency
                subject="PRLA Logistics Enterprise — Emergency Request"
                submitLabel="Submit Emergency Request"
                intro="Complete the short form below. Ambulance support remains subject to vehicle availability, location, and operational readiness."
                fields={[
                  { name: "Full Name", label: "Full Name", required: true, autoComplete: "name", placeholder: "Your full name" },
                  { name: "Phone Number", label: "Phone Number", type: "tel", required: true, autoComplete: "tel", placeholder: "e.g. 08134144981" },
                  { name: "Current Location", label: "Current Location", required: true, placeholder: "Area, landmark, town/city" },
                  { name: "Destination", label: "Destination, if applicable", placeholder: "Hospital, clinic or address" },
                  {
                    name: "Nature of Emergency",
                    label: "Nature of Emergency",
                    type: "textarea",
                    required: true,
                    placeholder: "Briefly describe the situation and any mobility requirements",
                  },
                  {
                    name: "Preferred Contact Method",
                    label: "Preferred Contact Method",
                    type: "select",
                    required: true,
                    options: ["Phone Call", "WhatsApp", "SMS", "Email"],
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section tone="navy" size="md">
        <div className="grid-mesh absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-px relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Related"
              title="Ambulance Fleet Management & Operational Coordination"
              subtitle="Hospitals, clinics, and organizations operating ambulance assets can also engage PRLA Logistics Enterprise for structured fleet coordination support."
              dark
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/fleet" size="lg" variant="gold" iconRight="arrowRight">
              Discuss Fleet Management
            </Button>
            <Button to="/partnership" size="lg" variant="onDark">
              Partner With Us
            </Button>
          </div>
        </div>
      </Section>

    </>
  );
}
