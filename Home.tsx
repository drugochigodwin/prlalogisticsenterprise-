import { Link } from "@/lib/router";
import { useSeo } from "@/lib/seo";
import { Icon, type IconName } from "@/components/Icons";
import { Button, Card, Eyebrow, IconBadge, Reveal, Section, SectionHeading } from "@/components/ui";
import { EmergencyContactBlock, FeatureCard, ServiceCard } from "@/components/sections";
import {
  EMAIL,
  EMAIL_HREF,
  FLEET_FEATURES,
  IMAGES,
  INVESTMENT_CATEGORIES,
  PARTNER_CATEGORIES,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  WHATSAPP_URL,
  WHY_CHOOSE,
} from "@/data/site";

const pillars = [
  { icon: "bus", label: "Transportation" },
  { icon: "package", label: "Logistics & Courier" },
  { icon: "gauge", label: "Fleet Management" },
  { icon: "ambulance", label: "Ambulance Quick Response" },
];

export default function Home() {
  useSeo(
    "PRLA Logistics Enterprise | Transportation, Logistics & Emergency Mobility",
    "PRLA Logistics Enterprise provides technology-powered transportation, logistics, fleet management, parcel delivery, and ambulance quick response solutions designed to connect people, businesses, and communities.",
  );

  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[95svh] items-center overflow-hidden bg-royal-950">
        <img
          src={IMAGES.heroRoad.src}
          alt={IMAGES.heroRoad.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-royal-950 via-royal-950/90 to-royal-900/55"
          aria-hidden="true"
        />
        <div className="grid-mesh absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="container-px relative w-full pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow dark>Technology-Powered Mobility · Africa</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[2.1rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
                Moving People.{" "}
                <span className="block text-gold-400">Delivering Possibilities.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-royal-100/85 sm:text-lg">
                Reliable transportation, logistics, fleet management, and ambulance quick response
                services designed to move people, businesses, and communities forward.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button to="/services" size="lg" variant="gold" iconRight="arrowRight">
                  Explore Our Services
                </Button>
                <Button to="/ambulance" size="lg" variant="light" icon="ambulance">
                  Request Emergency Assistance
                </Button>
                <Button to="/partnership" size="lg" variant="onDark">
                  Partner With Us
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <ul className="mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
              {pillars.map((pillar) => (
                <li
                  key={pillar.label}
                  className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3.5 backdrop-blur-sm"
                >
                  <Icon name={pillar.icon as IconName} className="h-5 w-5 shrink-0 text-gold-400" />
                  <span className="text-[0.78rem] leading-tight font-semibold text-white sm:text-sm">
                    {pillar.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <Section tone="white" size="lg">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src={IMAGES.cityTraffic.src}
                  alt={IMAGES.cityTraffic.alt}
                  loading="lazy"
                  className="h-[22rem] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[28rem]"
                />
              </div>
              <div className="absolute -bottom-6 left-4 hidden max-w-xs rounded-2xl border border-royal-100 bg-white p-5 shadow-lift sm:left-8 sm:block">
                <div className="flex items-center gap-3">
                  <IconBadge name="route" tone="gold" className="h-11 w-11" />
                  <div>
                    <p className="font-display text-sm font-bold text-royal-900">
                      Integrated Mobility Network
                    </p>
                    <p className="mt-1 text-xs text-[#6b7a94]">
                      People · Parcels · Fleet · Emergency Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Connecting People, Businesses & Communities"
            />
            <div className="mt-5 space-y-5 text-base leading-relaxed text-[#4a5a78]">
              <p>
                PRLA Logistics Enterprise is a technology-powered transportation, logistics, fleet
                management, and emergency mobility company focused on providing reliable transportation
                solutions, parcel and courier delivery, vehicle management, and ambulance quick response
                services.
              </p>
              <p>
                Our goal is to connect people, businesses, and communities through safe, efficient, and
                innovative mobility solutions.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Safe & structured operations", "Technology-driven coordination", "Accountable asset management", "Customer-focused service design"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-royal-900">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {item}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-8">
              <Button to="/about" size="lg" iconRight="arrowRight">
                Learn More About PRLA
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. SERVICES */}
      <Section tone="mist" size="lg" id="services">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Our Services"
              subtitle="Integrated transportation, logistics, fleet management, and emergency mobility solutions designed around reliability, safety, and operational efficiency."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={(index % 3) * 80} />
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Button to="/services" size="lg" iconRight="arrowRight">
                View All Services
              </Button>
              <Button to="/contact" size="lg" variant="outline">
                Request a Service
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. AMBULANCE QUICK RESPONSE HIGHLIGHT */}
      <section className="relative isolate overflow-hidden bg-royal-950 py-20 sm:py-24 lg:py-28">
        <img
          src={IMAGES.ambulanceNight.src}
          alt={IMAGES.ambulanceNight.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-royal-950 via-royal-950/92 to-royal-900/60"
          aria-hidden="true"
        />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#b3121b] px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] text-white uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
                Ambulance Quick Response
              </span>
              <h2 className="mt-5 font-display text-[1.9rem] leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
                When Every Second Matters, We Move With Urgency.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-royal-100/85 sm:text-lg">
                PRLA Logistics Enterprise provides ambulance quick response and emergency transportation
                support designed to help individuals, families, hospitals, clinics, and organizations
                respond to urgent medical transportation needs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button to="/ambulance" size="lg" variant="gold" icon="ambulance">
                  Request Ambulance Assistance
                </Button>
                <Button href={PHONE_TEL} size="lg" variant="light" icon="phone">
                  Call {PHONE_DISPLAY}
                </Button>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-relaxed text-royal-100/60">
                Ambulance response is subject to vehicle availability, location, operational readiness,
                and applicable medical and emergency-service requirements.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8">
                <h3 className="font-display text-lg font-bold text-white">Emergency Mobility Support</h3>
                <ul className="mt-5 space-y-4">
                  {[
                    { icon: "ambulance", label: "Emergency Ambulance Response" },
                    { icon: "stretcher", label: "Patient Transportation" },
                    { icon: "hospital", label: "Hospital & Clinic Support" },
                    { icon: "calendar", label: "Event Medical Transportation Support" },
                    { icon: "shieldBuilding", label: "Corporate & Institutional Support" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3.5">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-400 ring-1 ring-white/10">
                        <Icon name={item.icon as IconName} className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/ambulance"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition hover:text-gold-300"
                >
                  Explore Ambulance Quick Response
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE PRLA */}
      <Section tone="white" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Our Commitment"
              title="Why Choose PRLA?"
              subtitle="A structured, technology-driven approach to mobility built on accountability, safety, and long-term value."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={item.icon as IconName}
                title={item.title}
                description={item.description}
                delay={(index % 3) * 80}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* 6. FLEET MANAGEMENT */}
      <Section tone="mist" size="lg">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Fleet Management"
              title="Professional Fleet Management Solutions"
              subtitle="PRLA Logistics Enterprise provides structured fleet management support designed to improve vehicle accountability, operational efficiency, and asset performance."
            />
            <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {FLEET_FEATURES.slice(0, 6).map((feature) => (
                <li key={feature.title} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <span className="text-sm font-medium text-royal-900">{feature.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/fleet" size="lg" iconRight="arrowRight">
                Discuss Fleet Management
              </Button>
              <Button to="/services" size="lg" variant="outline">
                Explore Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={IMAGES.vanFleet.src}
                alt={IMAGES.vanFleet.alt}
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-card sm:h-72"
              />
              <img
                src={IMAGES.driverTech.src}
                alt={IMAGES.driverTech.alt}
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-card sm:mt-10 sm:h-72"
              />
              <img
                src={IMAGES.freight.src}
                alt={IMAGES.freight.alt}
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover shadow-card sm:col-span-2 sm:-mt-4"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 7. INVESTMENT OPPORTUNITIES */}
      <Section tone="white" size="lg">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Investment"
              title="Investment Opportunities"
              subtitle="PRLA Logistics Enterprise provides opportunities for individuals and strategic partners to participate in transportation and logistics asset ownership and operations."
            />
            <p className="mt-6 text-sm leading-relaxed text-[#4a5a78]">
              Proposed investment categories are shared for information purposes only. Amounts,
              arrangements, and terms are subject to availability, due diligence, and formal agreements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/investment" size="lg" iconRight="arrowRight">
                Request Investment Information
              </Button>
              <Button to="/partnership" size="lg" variant="outline">
                Become a Partner
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Card hover={false} className="overflow-hidden p-0 sm:p-0">
              <div className="flex items-center justify-between gap-4 border-b border-royal-100 bg-royal-950 px-6 py-5">
                <div>
                  <p className="text-[0.68rem] font-bold tracking-[0.18em] text-gold-400 uppercase">
                    Proposed Investment Categories
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    Asset participation overview
                  </p>
                </div>
                <Icon name="chart" className="h-7 w-7 shrink-0 text-gold-400" />
              </div>
              <ul className="divide-y divide-royal-100">
                {INVESTMENT_CATEGORIES.map((row) => (
                  <li
                    key={row.asset}
                    className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-royal-50/60"
                  >
                    <span className="flex items-center gap-3">
                      <Icon name={row.icon as IconName} className="h-5 w-5 text-royal-600" />
                      <span className="font-semibold text-royal-900">{row.asset}</span>
                    </span>
                    <span className="font-display text-sm font-bold text-royal-800 sm:text-base">
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-royal-100 bg-[#f5f7fa] px-6 py-4 text-xs leading-relaxed text-[#6b7a94]">
                Proposed amounts only. No guaranteed returns or profits are promised. All terms are
                subject to confirmation by PRLA Logistics Enterprise.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* 8. PARTNERSHIP OPPORTUNITIES */}
      <Section tone="navy" size="lg">
        <div className="grid-mesh absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-px relative">
          <Reveal>
            <SectionHeading
              eyebrow="Partnership"
              title="Let's Build the Future of Mobility Together."
              subtitle="PRLA Logistics Enterprise welcomes partnerships with individuals and organizations interested in transportation, logistics, fleet management, and emergency mobility."
              align="center"
              dark
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_CATEGORIES.map((category, index) => (
              <Reveal key={category.title} delay={(index % 4) * 70} className="h-full">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white/[0.07]">
                  <IconBadge name={category.icon as IconName} tone="dark" />
                  <h3 className="mt-4 font-display text-base font-bold text-white">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-royal-100/70">
                    {category.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Button to="/partnership" size="lg" variant="gold" iconRight="arrowRight">
                Become a Partner
              </Button>
              <Button to="/investment" size="lg" variant="onDark">
                Investment Opportunities
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 9. CONTACT / EMERGENCY ASSISTANCE */}
      <Section tone="white" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="We Are Ready to Hear From You."
              subtitle="Whether you need transportation, logistics support, fleet management, ambulance assistance, or partnership information, contact PRLA Logistics Enterprise."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <a href={PHONE_TEL} className="block h-full">
                <Card className="h-full">
                  <IconBadge name="phone" />
                  <h3 className="mt-5 font-display text-lg font-bold text-royal-900">Call Us</h3>
                  <p className="mt-2 text-sm text-[#4a5a78]">Speak directly with our team.</p>
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
                  <h3 className="mt-5 font-display text-lg font-bold text-royal-900">Email Us</h3>
                  <p className="mt-2 text-sm text-[#4a5a78]">Send enquiries and requirements.</p>
                  <p className="mt-4 break-all font-display text-base font-bold text-royal-700">
                    {EMAIL}
                  </p>
                </Card>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full">
                  <IconBadge name="whatsapp" tone="gold" />
                  <h3 className="mt-5 font-display text-lg font-bold text-royal-900">WhatsApp</h3>
                  <p className="mt-2 text-sm text-[#4a5a78]">Chat with us for quick enquiries.</p>
                  <p className="mt-4 font-display text-base font-bold text-royal-700">
                    +234 813 414 4981
                  </p>
                </Card>
              </a>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10">
              <EmergencyContactBlock />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button to="/contact" size="lg" iconRight="arrowRight">
                Contact PRLA
              </Button>
              <Button to="/ambulance" size="lg" variant="outline" icon="ambulance">
                Request Ambulance Assistance
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
