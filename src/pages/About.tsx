import { useSeo } from "@/lib/seo";
import { Icon } from "@/components/Icons";
import { Button, Card, IconBadge, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { CORE_VALUES, IMAGES } from "@/data/site";

const valueIcons = [
  "shieldCheck",
  "check",
  "safety",
  "lock",
  "award",
  "cpu",
  "users",
  "growth",
] as const;

export default function About() {
  useSeo(
    "About PRLA Logistics Enterprise | African Mobility & Logistics",
    "PRLA Logistics Enterprise is a technology-powered transportation, logistics, fleet management, and emergency mobility company focused on connecting people, businesses, and communities across Africa.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Moving Africa Forward Through Smarter Mobility"
        description="A technology-powered transportation, logistics, fleet management, and emergency mobility company built around reliability, safety, and long-term value."
        image={IMAGES.freight.src}
        imageAlt={IMAGES.freight.alt}
      >
        <Button to="/services" variant="gold" size="lg" iconRight="arrowRight">
          Explore Our Services
        </Button>
        <Button to="/contact" variant="onDark" size="lg">
          Work With PRLA
        </Button>
      </PageHero>

      {/* Who We Are */}
      <Section tone="white" size="lg">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Who We Are" title="A Mobility Company Built for Africa's Movement" />
            <div className="mt-5 space-y-5 text-base leading-relaxed text-[#4a5a78]">
              <p>
                PRLA Logistics Enterprise is a technology-powered transportation, logistics, fleet
                management, and emergency mobility company focused on connecting people, businesses, and
                communities.
              </p>
              <p>
                Our work spans passenger and commercial transportation, parcel and courier delivery,
                keke management, structured fleet operations, and ambulance quick response support —
                delivered through clear processes and accountable operations.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: "globe", title: "African Focus", text: "Mobility solutions designed for local realities." },
                { icon: "cpu", title: "Technology-Led", text: "Coordination supported by digital tools." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-royal-100 bg-[#f5f7fa] p-5">
                  <Icon name={item.icon as never} className="h-6 w-6 text-royal-600" />
                  <p className="mt-3 font-display text-sm font-bold text-royal-900">{item.title}</p>
                  <p className="mt-1 text-sm text-[#4a5a78]">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative">
              <img
                src={IMAGES.teamwork.src}
                alt={IMAGES.teamwork.alt}
                loading="lazy"
                className="h-[24rem] w-full rounded-3xl object-cover shadow-card sm:h-[30rem]"
              />
              <div className="absolute -bottom-6 -left-2 hidden rounded-2xl bg-royal-950 p-5 text-white shadow-lift sm:left-6 sm:block">
                <p className="text-[0.68rem] font-bold tracking-[0.18em] text-gold-400 uppercase">
                  Our Promise
                </p>
                <p className="mt-2 max-w-[15rem] font-display text-sm leading-snug font-bold">
                  Moving People. Delivering Possibilities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section tone="mist" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Direction"
              title="Our Vision & Mission"
              subtitle="Clear intent guiding how PRLA Logistics Enterprise builds and operates."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full border-l-4 border-l-royal-700">
                <IconBadge name="eye" />
                <h3 className="mt-5 font-display text-xl font-extrabold text-royal-900">Our Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-[#4a5a78]">
                  To become a leading technology-powered logistics, transportation, and emergency
                  mobility company in Africa, connecting people, businesses, and communities through
                  reliable, efficient, and innovative mobility solutions.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card className="h-full border-l-4 border-l-gold-500">
                <IconBadge name="target" tone="gold" />
                <h3 className="mt-5 font-display text-xl font-extrabold text-royal-900">Our Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-[#4a5a78]">
                  To provide safe, reliable, affordable, and technology-driven transportation, logistics,
                  fleet management, and ambulance quick response services that create value for
                  customers, drivers, investors, and communities.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Core values */}
      <Section tone="white" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="What Guides Us"
              title="Our Core Values"
              subtitle="The principles that shape our operations, relationships, and service standards."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, index) => (
              <Reveal key={value} delay={(index % 4) * 70} className="h-full">
                <div className="group h-full rounded-2xl border border-royal-100 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift">
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700 ring-1 ring-royal-100 transition-colors duration-300 group-hover:bg-royal-900 group-hover:text-gold-400">
                    <Icon name={valueIcons[index] ?? "check"} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-royal-900">{value}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Focus areas */}
      <Section tone="navy" size="md">
        <div className="grid-mesh absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-px relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="Our Focus"
                title="Structured Operations Across Every Service Line"
                subtitle="From daily passenger movement to emergency mobility support, our services are organised around documented processes, accountable teams, and technology-enabled coordination."
                dark
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "bus", title: "Transportation" },
                  { icon: "package", title: "Logistics & Courier" },
                  { icon: "gauge", title: "Fleet Management" },
                  { icon: "ambulance", title: "Emergency Mobility" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold-500/40"
                  >
                    <Icon name={item.icon as never} className="h-6 w-6 text-gold-400" />
                    <p className="mt-3 font-display text-sm font-bold text-white">{item.title}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get Started"
        title="Work With PRLA"
        description="Talk to our team about transportation, logistics, fleet management, ambulance support, partnership, or investment information."
        primaryLabel="Contact PRLA"
        primaryTo="/contact"
        secondaryLabel="Become a Partner"
        secondaryTo="/partnership"
      />
    </>
  );
                }
        
