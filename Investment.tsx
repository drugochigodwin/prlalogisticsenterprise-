import { useSeo } from "@/lib/seo";
import { Icon, type IconName } from "@/components/Icons";
import { Button, Notice, PageHero, Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { IMAGES, INVESTMENT_CATEGORIES, INVESTMENT_DISCLAIMER, INVESTMENT_STEPS } from "@/data/site";

export default function Investment() {
  useSeo(
    "Investment Opportunities | PRLA Logistics Enterprise",
    "PRLA Logistics Enterprise provides opportunities for individuals and strategic partners to participate in transportation and logistics asset ownership and operations, subject to due diligence and formal agreements.",
  );

  return (
    <>
      <PageHero
        eyebrow="Investment"
        title="Investment Opportunities"
        description="PRLA Logistics Enterprise provides opportunities for individuals and strategic partners to participate in transportation and logistics asset ownership and operations."
        image={IMAGES.boardroom.src}
        imageAlt={IMAGES.boardroom.alt}
      >
        <Button
          variant="gold"
          size="lg"
          iconRight="arrowRight"
          onClick={() =>
            document.getElementById("investment-enquiry")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Request Investment Information
        </Button>
        <Button to="/partnership" variant="onDark" size="lg">
          Partnership Opportunities
        </Button>
      </PageHero>

      {/* Proposed categories */}
      <Section tone="white" size="lg">
        <div className="container-px grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Proposed Investment Categories"
                title="Asset Participation Overview"
                subtitle="The categories below are proposed for information purposes. They are not offers, products, or guarantees, and all terms must be confirmed by PRLA Logistics Enterprise."
              />
            </Reveal>
            <Reveal delay={80}>
              <ul className="mt-7 space-y-3">
                {[
                  "Subject to availability and formal agreements",
                  "Due diligence completed before any commitment",
                  "No guaranteed returns, income, or profits promised",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-royal-900">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-3xl border border-royal-100 shadow-card">
                <div className="flex items-center justify-between gap-4 bg-royal-950 px-6 py-5 sm:px-8">
                  <div>
                    <p className="text-[0.68rem] font-bold tracking-[0.18em] text-gold-400 uppercase">
                      Proposed Investment Categories
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-white">
                      Assets &amp; proposed amounts
                    </p>
                  </div>
                  <Icon name="chart" className="hidden h-8 w-8 shrink-0 text-gold-400 sm:block" />
                </div>

                <div className="overflow-x-auto bg-white">
                  <table className="w-full min-w-[22rem] border-collapse text-left">
                    <caption className="sr-only">
                      Proposed investment categories and proposed amounts
                    </caption>
                    <thead>
                      <tr className="border-b border-royal-100 bg-[#f5f7fa]">
                        <th
                          scope="col"
                          className="px-6 py-4 text-[0.7rem] font-bold tracking-[0.16em] text-royal-800 uppercase sm:px-8"
                        >
                          Asset
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-right text-[0.7rem] font-bold tracking-[0.16em] text-royal-800 uppercase sm:px-8"
                        >
                          Proposed Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {INVESTMENT_CATEGORIES.map((row) => (
                        <tr
                          key={row.asset}
                          className="border-b border-royal-100 transition-colors last:border-0 hover:bg-royal-50/60"
                        >
                          <th scope="row" className="px-6 py-5 font-semibold text-royal-900 sm:px-8">
                            <span className="flex items-center gap-3">
                              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-royal-50 text-royal-700 ring-1 ring-royal-100">
                                <Icon name={row.icon as IconName} className="h-5 w-5" />
                              </span>
                              {row.asset}
                            </span>
                          </th>
                          <td className="px-6 py-5 text-right font-display text-base font-extrabold text-royal-800 sm:px-8 sm:text-lg">
                            {row.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="border-t border-royal-100 bg-[#f5f7fa] px-6 py-4 text-xs leading-relaxed text-[#6b7a94] sm:px-8">
                  Labelled as proposed investment categories. These are not guaranteed investment
                  products, and amounts are subject to confirmation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="mist" size="lg">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="How It Works"
              subtitle="A structured six-step process from first enquiry through to formal agreement and ongoing updates."
              align="center"
            />
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INVESTMENT_STEPS.map((step, index) => (
              <Reveal key={step} as="li" delay={(index % 3) * 80} className="h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-royal-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <span
                    className="absolute -top-4 right-4 font-display text-6xl font-extrabold text-royal-50"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-royal-900 font-display text-sm font-bold text-gold-400">
                    {index + 1}
                  </span>
                  <p className="relative mt-5 font-display text-base leading-snug font-bold text-royal-900">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="mt-12 flex justify-center">
              <Button
                size="lg"
                iconRight="arrowRight"
                onClick={() =>
                  document.getElementById("investment-enquiry")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Request Investment Information
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section tone="white" size="sm">
        <div className="container-px">
          <Reveal>
            <Notice title="Investment Disclaimer" tone="amber">
              {INVESTMENT_DISCLAIMER}
            </Notice>
          </Reveal>
        </div>
      </Section>

      {/* Enquiry form */}
      <Section tone="mist" size="lg" id="investment-enquiry">
        <div className="container-px grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Enquiry"
                title="Request Investment Information"
                subtitle="Submit your details to receive investment information. No commitment is created by submitting this enquiry."
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-7 space-y-4">
                <Notice title="Before You Proceed" tone="royal" icon="alert">
                  Amounts, returns, income, ownership arrangements, and other terms must be confirmed by
                  PRLA Logistics Enterprise before any commitment is made.
                </Notice>
                <img
                  src={IMAGES.keke.src}
                  alt={IMAGES.keke.alt}
                  loading="lazy"
                  className="h-48 w-full rounded-2xl object-cover shadow-soft sm:h-60"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <EnquiryForm
                subject="PRLA Logistics Enterprise — Investment Information Request"
                submitLabel="Request Investment Information"
                intro="Complete the form and our team will follow up with the available information."
                fields={[
                  { name: "Full Name", label: "Full Name", required: true, autoComplete: "name" },
                  { name: "Organization", label: "Organization", autoComplete: "organization" },
                  { name: "Phone Number", label: "Phone Number", type: "tel", required: true, autoComplete: "tel" },
                  { name: "Email Address", label: "Email Address", type: "email", required: true, autoComplete: "email" },
                  {
                    name: "Investment Interest",
                    label: "Investment Interest",
                    type: "select",
                    required: true,
                    options: [
                      "Motorcycle",
                      "Tricycle",
                      "Minibus",
                      "Sienna",
                      "Multiple Assets",
                      "General Information",
                    ],
                  },
                  {
                    name: "Message",
                    label: "Message",
                    type: "textarea",
                    placeholder: "Share any questions or information you would like to receive",
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
