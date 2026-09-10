import { useEffect, useState } from "react";
import { Link, useRoute } from "@/lib/router";
import { cn } from "@/utils/cn";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui";
import { EMAIL, EMAIL_HREF, NAV_ITEMS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

function BrandMark({ light }: { light: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={cn(
          "relative inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-soft transition-colors sm:h-11 sm:w-11",
          light ? "bg-white/10 ring-1 ring-white/25 backdrop-blur-sm" : "bg-royal-900",
        )}
        aria-hidden="true"
      >
        <span className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">P</span>
        <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-gold-500" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.95rem] font-extrabold tracking-tight sm:text-base",
            light ? "text-white" : "text-royal-900",
          )}
        >
          PRLA <span className="text-gold-500">LOGISTICS</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-semibold tracking-[0.28em] uppercase sm:text-[0.6rem]",
            light ? "text-white/70" : "text-[#6b7a94]",
          )}
        >
          Enterprise
        </span>
      </span>
    </span>
  );
}

export function Navbar() {
  const { path } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = path === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          "hidden overflow-hidden bg-royal-950 text-royal-100 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="container-px flex h-10 items-center justify-between text-[0.78rem]">
          <p className="font-medium tracking-wide text-royal-100/80">
            Moving People. Delivering Possibilities.
          </p>
          <div className="flex items-center gap-6">
            <a className="inline-flex items-center gap-2 transition hover:text-gold-400" href={PHONE_TEL}>
              <Icon name="phone" className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-gold-400" href={EMAIL_HREF}>
              <Icon name="mail" className="h-3.5 w-3.5" />
              {EMAIL}
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-gold-400"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "border-b border-royal-100/80 bg-white/95 shadow-soft backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-[76px] sm:px-8 lg:px-10 2xl:max-w-[88rem]">
          <Link to="/" aria-label="PRLA Logistics Enterprise — home" className="shrink-0">
            <BrandMark light={transparent} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-x-3.5 xl:flex">
            {NAV_ITEMS.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[0.8rem] font-semibold tracking-tight whitespace-nowrap transition-colors duration-200",
                    transparent
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-royal-900"
                        : "text-[#42526e] hover:text-royal-800",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-transform duration-200",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
            <Button
              to="/partnership"
              size="sm"
              variant={transparent ? "onDark" : "outline"}
              className="hidden whitespace-nowrap 2xl:inline-flex"
            >
              Partner With Us
            </Button>
            <Button
              to="/contact"
              size="sm"
              variant={transparent ? "gold" : "primary"}
              icon="phone"
              className="whitespace-nowrap"
            >
              Request Assistance
            </Button>
          </div>

          {/* Mobile trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={PHONE_TEL}
              aria-label={`Call PRLA Logistics Enterprise on ${PHONE_DISPLAY}`}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-xl transition",
                transparent
                  ? "border border-white/30 text-white hover:bg-white/10"
                  : "border border-royal-100 text-royal-800 hover:bg-royal-50",
              )}
            >
              <Icon name="phone" className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-xl transition",
                transparent
                  ? "border border-white/30 text-white hover:bg-white/10"
                  : "border border-royal-100 bg-royal-900 text-white hover:bg-royal-800",
              )}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "origin-top overflow-y-auto border-b border-royal-100 bg-white shadow-lift transition-all duration-300",
            open ? "max-h-[calc(100dvh-68px)] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav aria-label="Mobile" className="container-px flex flex-col gap-1 py-5">
            {NAV_ITEMS.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold transition",
                    active
                      ? "bg-royal-50 text-royal-900 ring-1 ring-royal-100"
                      : "text-[#42526e] hover:bg-[#f5f7fa] hover:text-royal-900",
                  )}
                >
                  {item.label}
                  <Icon name="arrowRight" className="h-4 w-4 text-gold-500" />
                </Link>
              );
            })}

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Button to="/contact" variant="primary" icon="phone" className="w-full">
                Request Assistance
              </Button>
              <Button to="/partnership" variant="outline" className="w-full">
                Partner With Us
              </Button>
            </div>

            <div className="mt-5 rounded-2xl bg-royal-950 p-5 text-royal-100">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-gold-400 uppercase">
                Ambulance Enquiries
              </p>
              <a href={PHONE_TEL} className="mt-2 block font-display text-2xl font-extrabold text-white">
                {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_HREF} className="mt-1 block text-sm text-royal-100/80 underline">
                {EMAIL}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

