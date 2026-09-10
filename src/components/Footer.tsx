import { Link } from "@/lib/router";
import { Icon } from "@/components/Icons";
import {
  BRAND,
  EMAIL,
  EMAIL_HREF,
  NAV_ITEMS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIALS,
  TAGLINE,
  WHATSAPP_URL,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-950 text-royal-100">
      <div className="grid-mesh absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px gold-rule" aria-hidden="true" />

      <div className="container-px relative pt-16 pb-10 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20"
                aria-hidden="true"
              >
                <span className="font-display text-lg font-extrabold text-white">P</span>
                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-royal-950 bg-gold-500" />
              </span>
              <div>
                <p className="font-display text-sm font-extrabold tracking-tight text-white">{BRAND}</p>
                <p className="mt-1 text-[0.72rem] font-semibold tracking-[0.14em] text-gold-400 uppercase">
                  {TAGLINE}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-royal-100/75">
              Technology-powered transportation, logistics, fleet management, and emergency mobility
              solutions designed to move people, businesses, and communities forward.
            </p>

            <div className="mt-7">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-white/60 uppercase">
                Social Media
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <span
                    key={social.name}
                    title={`${social.name} — Coming Soon`}
                    aria-label={`${social.name} profile — coming soon`}
                    className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl bg-white/5 text-white/45 ring-1 ring-white/10"
                  >
                    <Icon name={social.icon as never} className="h-4.5 w-4.5" />
                  </span>
                ))}
                <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[0.68rem] font-bold tracking-[0.14em] text-gold-300 uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links" className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold tracking-[0.18em] text-white uppercase">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-royal-100/75 transition-colors duration-200 hover:text-gold-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer service links" className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold tracking-[0.18em] text-white uppercase">
              Solutions
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-royal-100/75">
              <li>
                <Link to="/services" className="transition-colors hover:text-gold-400">
                  Transportation
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-gold-400">
                  Parcel &amp; Courier
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-gold-400">
                  Keke Management
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="transition-colors hover:text-gold-400">
                  Fleet Management
                </Link>
              </li>
              <li>
                <Link to="/ambulance" className="transition-colors hover:text-gold-400">
                  Patient Transportation
                </Link>
              </li>
              <li>
                <Link to="/investment" className="transition-colors hover:text-gold-400">
                  Investment
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold tracking-[0.18em] text-white uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={PHONE_TEL} className="group flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gold-400 ring-1 ring-white/10">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] tracking-[0.16em] text-white/50 uppercase">
                      Phone
                    </span>
                    <span className="font-display text-base font-bold text-white transition group-hover:text-gold-400">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="group flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gold-400 ring-1 ring-white/10">
                    <Icon name="mail" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] tracking-[0.16em] text-white/50 uppercase">
                      Email
                    </span>
                    <span className="block break-all text-sm font-semibold text-white transition group-hover:text-gold-400">
                      {EMAIL}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gold-400 ring-1 ring-white/10">
                    <Icon name="whatsapp" className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] tracking-[0.16em] text-white/50 uppercase">
                      WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-white transition group-hover:text-gold-400">
                      Send an enquiry
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gold-400 ring-1 ring-white/10">
                  <Icon name="mapPin" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[0.7rem] tracking-[0.16em] text-white/50 uppercase">
                    Business Location
                  </span>
                  <span className="text-sm font-semibold text-white/70">To Be Confirmed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 pb-20 sm:flex-row sm:items-center sm:justify-between sm:pb-4">
          <p className="text-xs text-royal-100/60">
            © 2026 PRLA Logistics Enterprise. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <Link to="/privacy-policy" className="text-royal-100/70 transition hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-royal-100/70 transition hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
            <Link to="/contact" className="text-royal-100/70 transition hover:text-gold-400">
              Contact PRLA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
                    }
                    
