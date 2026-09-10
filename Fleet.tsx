import { useSeo } from "@/lib/seo";
import type { IconName } from "@/components/Icons";
import { Button, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { CtaBand, FeatureCard } from "@/components/sections";
import { FLEET_FEATURES, IMAGES } from "@/data/site";

const audiences = [
  { title: "Vehicle Owners", text: "Individuals with one or more vehicles seeking structured management." },
  { title: "Corporate Organizations", text: "Businesses managing staff, distribution, or service vehicles." },
  { title: "Hospitals & Clinics", text: "Institutions operating patient transport or ambulance assets." },
  { title: "Investors & Partners", text: "Partners with assets deployed into transportation operations." },
];

export default function Fleet() {
  useSeo(
    "Fleet Management Solutions | PRLA Logistics Enterprise",
    "PRLA Logistics Enterprise provides structured fleet management support covering vehicle monitoring, driver and rider management, maintenance coordination, asset accountability, and performance reporting.",
  );

  return (
    <>
      <PageHero
        eyebrow="Fleet Management"
        title="Professional Fleet Management Solutions"
        description="PRLA Logistics Enterprise provides structured fleet management support designed to improve vehicle accountability, operational efficiency, and asset performance."
        image={IMAGES.vanFleet.src}
        imageAlt={IMAGES.vanFleet.alt}
      >
        <Button to="/contact?service=Fleet Management" variant="gold" size="lg" iconRight="arrowRight">
          Discuss Fleet Management
        </Button>
        <Button to="/services" variant="onDark" size="lg">
          Explore Our Services
        </Button>
      </PageHero>

      <Section tone="white" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Structured Support Across the Fleet Lifecycle"
              subtitle="From acquisition guidance to daily monitoring and reporting, our fleet management approach is built on documentation, accountability, and consistent operational routines."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET_FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon as IconName}
                title={feature.title}
                description={feature.description}
                delay={(index % 4) * 70}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="mist" size="lg">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={IMAGES.driverTech.src}
                alt={IMAGES.driverTech.alt}
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-card sm:h-72"
              />
              <img
                src={IMAGES.deliveryVan.src}
                alt={IMAGES.deliveryVan.alt}
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-card sm:mt-10 sm:h-72"
              />
              <img
                src={IMAGES.ambulanceFleet.src}
                alt={IMAGES.ambulanceFleet.alt}
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover shadow-card sm:col-span-2 sm:-mt-4"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Who It's For"
              title="Fleet Support Designed Around Your Operation"
              subtitle="Whether you own a single vehicle or coordinate a growing operation, our support is structured to protect the asset and improve day-to-day control."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {audiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-royal-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <h3 className="font-display text-base font-bold text-royal-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5a78]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact?service=Fleet Management" size="lg" iconRight="arrowRight">
                Discuss Fleet Management
              </Button>
              <Button to="/investment" size="lg" variant="outline">
                Investment Opportunities
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy" size="md">
        <div className="grid-mesh absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-px relative">
          <Reveal>
            <SectionHeading
              eyebrow="Operating Approach"
              title="Accountability at Every Level"
              subtitle="Fleet performance depends on consistent routines. Our coordination model focuses on documentation, communication, and clear reporting lines between owners, drivers, riders, and operations."
              align="center"
              dark
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Documented Processes", text: "Onboarding, checks, and handover records kept in order." },
              { title: "Operational Visibility", text: "Trip, utilisation, and maintenance activity tracked." },
              { title: "Owner Reporting", text: "Periodic updates aligned to the agreed arrangement." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold-500/40"
              >
                <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-royal-100/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next Step"
        title="Discuss Fleet Management"
        description="Tell us about your vehicles, locations, and operational goals — we will outline the support options available."
        primaryLabel="Contact PRLA"
        primaryTo="/contact?service=Fleet Management"
        secondaryLabel="Become a Partner"
        secondaryTo="/partnership"
      />
    </>
  );
}
