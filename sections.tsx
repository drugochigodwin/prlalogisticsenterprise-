import { Link } from "@/lib/router";
import { Icon, type IconName } from "@/components/Icons";
import { Button, Card, IconBadge, Reveal, Section, SectionHeading } from "@/components/ui";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, type Service } from "@/data/site";
import { cn } from "@/utils/cn";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="flex h-full flex-col">
        <IconBadge name={service.icon as IconName} />
        <h3 className="mt-5 font-display text-lg leading-snug font-bold text-royal-900">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a5a78]">{service.description}</p>
        <Link
          to={service.to}
          className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal-700 transition-colors hover:text-royal-900"
        >
          Learn More
          <Icon
            name="arrowRight"
            className="h-4 w-4 text-gold-500 transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </Card>
    </Reveal>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  tone = "light",
}: {
  icon: IconName;
  title: string;
  description: string;
  delay?: number;
  tone?: "light" | "dark";
}) {
  if (tone === "dark") {
    return (
      <Reveal delay={delay} className="h-full">
        <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white/[0.07] sm:p-7">
          <IconBadge name={icon} tone="dark" />
          <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-royal-100/75">{description}</p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className="h-full">
      <Card className="h-full">
        <IconBadge name={icon} />
        <h3 className="mt-5 font-display text-lg leading-snug font-bold text-royal-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#4a5a78]">{description}</p>
      </Card>
    </Reveal>
  );
}

export function EmergencyContactBlock({
  heading = "Need Ambulance Assistance?",
  description = "Speak with PRLA Logistics Enterprise about ambulance quick response and emergency transportation support.",
  callLabel = "Call for Emergency Assistance",
  className,
}: {
  heading?: string;
  description?: string;
  callLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-royal-900 p-7 text-white shadow-lift sm:p-10",
        className,
      )}
    >
      <div className="grid-mesh absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#b3121b] px-3 py-1 text-[0.68rem] font-bold tracking-[0.18em] uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
            Emergency Line
          </span>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-royal-100/80 sm:text-base">{description}</p>
          <a
            href={PHONE_TEL}
            className="mt-6 inline-block font-display text-3xl font-extrabold tracking-tight text-gold-400 underline decoration-gold-500/40 underline-offset-8 transition hover:text-gold-300 sm:text-4xl"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[16rem]">
          <Button href={PHONE_TEL} variant="gold" size="lg" icon="phone" className="w-full">
            {callLabel}
          </Button>
          <Button href={WHATSAPP_URL} variant="whatsapp" size="lg" icon="whatsapp" newTab className="w-full">
            Send WhatsApp Enquiry
          </Button>
          <p className="text-xs leading-relaxed text-royal-100/60">
            Ambulance response is subject to vehicle availability, location, and operational readiness.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CtaBand({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
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
                <SectionHeading eyebrow={eyebrow} title={title} subtitle={description} />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button to={primaryTo} size="lg" iconRight="arrowRight">
                  {primaryLabel}
                </Button>
                {secondaryLabel && secondaryTo ? (
                  <Button to={secondaryTo} size="lg" variant="outline">
                    {secondaryLabel}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
