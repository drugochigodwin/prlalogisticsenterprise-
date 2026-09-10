import { useRoute } from "@/lib/router";
import { useSeo } from "@/lib/seo";
import { Icon } from "@/components/Icons";
import { Button, Card, IconBadge, Notice, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { EmergencyContactBlock } from "@/components/sections";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import {
  EMAIL,
  EMAIL_HREF,
  IMAGES,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_OPTIONS,
  SOCIALS,
  WHATSAPP_URL,
} from "@/data/site";

export default function Contact() {
  const { query } = useRoute();
  const requested = query.get("service") ?? "";
  const preselected = SERVICE_OPTIONS.find(
    (option) => option.toLowerCase() === requested.trim().toLowerCase(),
  );

  useSeo(
    "Contact PRLA Logistics Enterprise",
    "Contact PRLA Logistics Enterprise for transportation, logistics support, fleet management, ambulance assistance, partnership, or investment information. Phone 08134144981 · mbanganim44@gmail.com",
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We Are Ready to Hear From You."
        description="Whether you need transportation, logistics support, fleet management, ambulance assistance, or partnership information, contact PRLA Logistics Enterprise."
        image={IMAGES.warehouse.src}
        imageAlt={IMAGES.warehouse.alt}
      >
        <Button href={PHONE_TEL} variant="gold" size="lg" icon="phone">
          Call {PHONE_DISPLAY}
        </Button>
        <Button href={WHATSAPP_URL} variant="onDark" size="lg" icon="whatsapp" newTab>
          Send WhatsApp Enquiry
        </Button>
      </PageHero>

      {/* Contact channels */}
      <Section tone="white" size="lg">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <a href={PHONE_TEL} className="block h-full">
                <Card className="h-full">
                  <IconBadge name="phone" />
                  <h2 className="mt-5 font-display text-lg font-bold text-royal-900">Phone</h2>
                  <p className="mt-2 text-sm text-[#4a5a78]">Click to call our team directly.</p>
                  <p className="mt-4 font-display text-xl font-extrabold text-royal-700">
                    {PHONE_DISPLAY}
                  </p>
                </Card>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <a href={EMAIL_HREF} className="block h-full">
                <Card className="h-full">
                  <IconBadge name="mail" />
                  <h2 className="mt-5 font-display text-lg font-bold text-royal-900">Email</h2>
                  <p className="mt-2 text-sm text-[#4a5a78]">Send detailed enquiries and documents.</p>
                  <p className="mt-4 break-all font-display text-base font-extrabold text-royal-700">
                    {EMAIL}
                  </p>
                </Card>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full">
                  <IconBadge name="whatsapp" tone="gold" />
                  <h2 className="mt-5 font-display text-lg font-bold text-royal-900">WhatsApp</h2>
                  <p className="mt-2 text-sm text-[#4a5a78]">Quick enquiries and follow-ups.</p>
                  <p className="mt-4 font-display text-base font-extrabold text-royal-700">
                    +234 813 414 4981
                  </p>
                </Card>
              </a>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* General contact form */}
      <Section tone="mist" size="lg" id="contact-form">
        <div className="container-px grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Enquiry Form"
                title="Send Us Your Requirement"
                subtitle="Share what you need and our team will respond with the options available for your location, timeline, and operational requirements."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-royal-100 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-sm font-bold tracking-[0.16em] text-royal-900 uppercase">
                    Business Hours
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <Icon name="clock" className="h-5 w-5 text-gold-500" />
                    <p className="text-sm font-semibold text-[#4a5a78]">
                      Business hours to be confirmed.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-royal-100 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-sm font-bold tracking-[0.16em] text-royal-900 uppercase">
                    Social Media
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    {SOCIALS.map((social) => (
                      <span
                        key={social.name}
                        title={`${social.name} — Coming Soon`}
                        aria-label={`${social.name} profile — coming soon`}
                        className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl bg-[#f5f7fa] text-[#9aa8bf] ring-1 ring-royal-100"
                      >
                        <Icon name={social.icon as never} className="h-4.5 w-4.5" />
                      </span>
                    ))}
                    <span className="rounded-full bg-gold-100 px-3 py-1 text-[0.68rem] font-bold tracking-[0.14em] text-gold-600 uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-[#6b7a94]">
                    Official social media profiles will be published once confirmed.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <EnquiryForm
                subject="PRLA Logistics Enterprise — General Enquiry"
                submitLabel="Submit Enquiry"
                defaults={preselected ? { "Service Required": preselected } : undefined}
                fields={[
                  { name: "Full Name", label: "Full Name", required: true, autoComplete: "name" },
                  { name: "Phone Number", label: "Phone Number", type: "tel", required: true, autoComplete: "tel" },
                  { name: "Email Address", label: "Email Address", type: "email", required: true, autoComplete: "email" },
                  {
                    name: "Service Required",
                    label: "Service Required",
                    type: "select",
                    required: true,
                    options: SERVICE_OPTIONS,
                  },
                  {
                    name: "Message",
                    label: "Message",
                    type: "textarea",
                    required: true,
                    placeholder: "Tell us about your transportation, logistics, or mobility requirement",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Emergency block */}
      <Section tone="white" size="md">
        <div className="container-px">
          <Reveal>
            <EmergencyContactBlock
              heading="Need Ambulance Assistance?"
              description="For ambulance quick response and emergency transportation enquiries, contact PRLA Logistics Enterprise directly."
              callLabel="Call Now"
            />
          </Reveal>
          <Reveal>
            <div className="mt-6">
              <Notice title="Safety Notice" tone="amber">
                In a life-threatening emergency, contact the appropriate emergency services immediately.
                PRLA ambulance response is subject to vehicle availability, location, operational
                readiness, and applicable medical and emergency-service requirements.
              </Notice>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Location */}
      <Section tone="mist" size="lg" id="location">
        <div className="container-px grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Find Us"
                title="Our Location"
                subtitle="Our business location details will be published here once confirmed."
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-royal-100 bg-white p-6 shadow-soft">
                  <IconBadge name="mapPin" />
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-[0.18em] text-[#6b7a94] uppercase">
                      Business Location
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-royal-900">
                      To Be Confirmed
                    </p>
                    <p className="mt-2 text-sm text-[#4a5a78]">
                      Contact us by phone, email, or WhatsApp for service coverage enquiries.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={PHONE_TEL} icon="phone">
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
            <Reveal delay={100}>
              {/*
                GOOGLE MAPS PLACEHOLDER
                Replace the block below with the official Google Maps embed once the
                business location is confirmed, for example:
                <iframe title="PRLA Logistics Enterprise location" src="https://www.google.com/maps/embed?pb=..." loading="lazy" />
              */}
              <div
                role="img"
                aria-label="Google Maps placeholder — business location to be confirmed"
                className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-royal-100 bg-royal-950 shadow-card sm:h-96"
              >
                <div className="grid-mesh absolute inset-0 opacity-50" aria-hidden="true" />
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,162,39,0.18),transparent_60%)]"
                  aria-hidden="true"
                />
                <div className="relative px-6 text-center">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold-400 ring-1 ring-white/15">
                    <Icon name="mapPin" className="h-7 w-7" />
                  </span>
                  <p className="mt-5 font-display text-lg font-bold text-white">
                    Google Maps Embed Placeholder
                  </p>
                  <p className="mt-2 text-sm text-royal-100/70">
                    Business Location: To Be Confirmed
                  </p>
                  <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-royal-100/50">
                    A Google Maps embed can be inserted here once the official business address is
                    confirmed.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
