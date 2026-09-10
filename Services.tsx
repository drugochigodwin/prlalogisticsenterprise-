import { useSeo } from "@/lib/seo";
import { Link } from "@/lib/router";
import { Icon, type IconName } from "@/components/Icons";
import { Button, IconBadge, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { EmergencyContactBlock } from "@/components/sections";
import { IMAGES, SERVICES } from "@/data/site";

/** Maps each service to the matching option in the contact form's service dropdown. */
const enquiryMap: Record<string, string> = {
  transportation: "Transportation",
  "parcel-courier": "Parcel & Courier Delivery",
  "keke-management": "Keke Management",
  "fleet-management": "Fleet Management",
  "ambulance-quick-response": "Ambulance Assistance",
  "patient-transportation": "Patient Transportation",
  "hospital-clinic-support": "Hospital & Clinic Support",
  "event-medical-transportation": "Event Medical Transportation",
  "corporate-emergency-support": "Ambulance Assistance",
  "business-corporate-logistics": "Corporate Logistics",
  "investment-opportunities": "Investment",
};

export default function Services() {
  useSeo(
    "Transportation & Logistics Services | PRLA Logistics Enterprise",
    "Explore transportation, parcel and courier delivery, keke management, fleet management, ambulance quick response, patient transportation, corporate logistics, and investment services from PRLA Logistics Enterprise.",
  );

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Integrated Transportation, Logistics & Emergency Mobility Services"
        description="Solutions designed around reliability, safety, and operational efficiency — for individuals, families, hospitals, clinics, corporate organizations, event organizers, vehicle owners, drivers, riders, and institutional partners."
        image={IMAGES.courierRider.src}
        imageAlt={IMAGES.courierRider.alt}
      >
        <Button to="/contact" variant="gold" size="lg" iconRight="arrowRight">
          Request a Service
        </Button>
        <Button to="/ambulance" variant="onDark" size="lg" icon="ambulance">
          Ambulance Quick Response
        </Button>
      </PageHero>

      <Section tone="white" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Our Services"
              subtitle="Integrated transportation, logistics, fleet management, and emergency mobility solutions designed around reliability, safety, and operational efficiency."
              align="center"
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 2) * 60}>
                <article className="group grid gap-6 overflow-hidden rounded-3xl border border-royal-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-royal-200 hover:shadow-lift sm:p-8 lg:grid-cols-12 lg:gap-10">
                  <div className={service.image ? "lg:col-span-8" : "lg:col-span-12"}>
                    <div className="flex items-start gap-4">
                      <IconBadge name={service.icon as IconName} className="shrink-0" />
                      <div>
                        <p className="text-[0.68rem] font-bold tracking-[0.18em] text-gold-600 uppercase">
                          {String(index + 1).padStart(2, "0")} · Service
                        </p>
                        <h2 className="mt-1.5 font-display text-xl leading-snug font-extrabold text-royal-900 sm:text-2xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-5 text-base leading-relaxed font-medium text-royal-800">
                      {service.description}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4a5a78]">{service.detail}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button to={service.to} size="sm" iconRight="arrowRight">
                        Learn More
                      </Button>
                      <Button
                        to={`/contact?service=${encodeURIComponent(
                          enquiryMap[service.slug] ?? "Other",
                        )}`}
                        size="sm"
                        variant="outline"
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>

                  {service.image ? (
                    <div className="lg:col-span-4">
                      <img
                        src={service.image.src}
                        alt={service.image.alt}
                        loading="lazy"
                        className="h-48 w-full rounded-2xl object-cover shadow-soft transition-transform duration-500 group-hover:scale-[1.02] lg:h-full"
                      />
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Enquiry CTA */}
      <Section tone="mist" size="md">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-royal-100 bg-white p-8 shadow-card sm:p-12">
              <div
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-royal-700 to-gold-500"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <SectionHeading
                    eyebrow="Let's Talk"
                    title="Need a Transportation or Logistics Solution?"
                    subtitle="Share your requirement and our team will respond with the options available for your location, timeline, and operational needs."
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button to="/contact" size="lg" iconRight="arrowRight">
                    Request a Service
                  </Button>
                  <Button to="/fleet" size="lg" variant="outline">
                    Discuss Fleet Management
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <EmergencyContactBlock />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { to: "/fleet", icon: "gauge", label: "Fleet Management Solutions" },
                { to: "/investment", icon: "chart", label: "Investment Opportunities" },
                { to: "/partnership", icon: "users", label: "Partnership Opportunities" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-royal-100 bg-white px-6 py-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-royal-200 hover:shadow-card"
                >
                  <span className="flex items-center gap-3">
                    <Icon name={item.icon as IconName} className="h-5 w-5 text-royal-600" />
                    <span className="font-display text-sm font-bold text-royal-900">{item.label}</span>
                  </span>
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
