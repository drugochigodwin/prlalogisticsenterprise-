import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { Link } from "@/lib/router";
import { cn } from "@/utils/cn";
import { Icon, type IconName } from "@/components/Icons";

/* ------------------------------------------------------------------ Reveal */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ Button */

type Variant = "primary" | "gold" | "outline" | "light" | "onDark" | "danger" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-royal-700 text-white shadow-soft hover:bg-royal-800 hover:shadow-card focus-visible:outline-royal-900",
  gold: "bg-gold-500 text-royal-950 shadow-soft hover:bg-gold-400 hover:shadow-card",
  outline:
    "border border-royal-200 bg-white text-royal-800 hover:border-royal-600 hover:bg-royal-50 hover:text-royal-900",
  light: "bg-white text-royal-900 shadow-soft hover:bg-royal-50",
  onDark: "border border-white/35 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/10",
  danger: "bg-[#b3121b] text-white shadow-soft hover:bg-[#8f0e16]",
  whatsapp: "bg-[#1faa53] text-white shadow-soft hover:bg-[#188f45]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: IconName;
  iconRight?: IconName;
  ariaLabel?: string;
  disabled?: boolean;
  newTab?: boolean;
};

export function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  icon,
  iconRight,
  ariaLabel,
  disabled,
  newTab,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-200 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  const inner = (
    <>
      {icon ? <Icon name={icon} className="h-[1.15em] w-[1.15em] shrink-0" /> : null}
      <span>{children}</span>
      {iconRight ? (
        <Icon
          name={iconRight}
          className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} disabled={disabled}>
      {inner}
    </button>
  );
}

/* ----------------------------------------------------------------- Section */

export function Section({
  children,
  className,
  id,
  tone = "white",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "mist" | "navy" | "royal";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    white: "bg-white",
    mist: "bg-[#f5f7fa]",
    navy: "bg-royal-950 text-royal-100",
    royal: "bg-royal-900 text-royal-100",
  };
  const pad = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
  };
  return (
    <section id={id} className={cn("relative", tones[tone], pad[size], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.22em] uppercase",
        dark ? "text-gold-400" : "text-royal-600",
      )}
    >
      <span className={cn("h-px w-6", dark ? "bg-gold-400" : "bg-gold-500")} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <Tag
        className={cn(
          "font-display font-extrabold tracking-tight",
          as === "h1"
            ? "text-3xl leading-[1.1] sm:text-4xl lg:text-5xl"
            : "text-2xl leading-[1.15] sm:text-3xl lg:text-[2.6rem]",
          dark ? "text-white" : "text-royal-900",
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-royal-100/80" : "text-[#4a5a78]",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------- Card shell */

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-royal-100 bg-white p-6 shadow-soft transition-all duration-300 sm:p-7",
        hover && "hover:-translate-y-1 hover:border-royal-200 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  name,
  className,
  tone = "royal",
}: {
  name: IconName;
  className?: string;
  tone?: "royal" | "gold" | "dark";
}) {
  const tones = {
    royal: "bg-royal-50 text-royal-700 ring-royal-100",
    gold: "bg-gold-100 text-gold-600 ring-gold-200",
    dark: "bg-white/10 text-gold-300 ring-white/15",
  };
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-colors duration-300",
        tones[tone],
        className,
      )}
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

/* --------------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <header className="relative isolate overflow-hidden bg-royal-950">
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-royal-950 via-royal-950/85 to-royal-900/50"
        aria-hidden="true"
      />
      <div className="grid-mesh absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-px relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow ? (
            <div className={cn("mb-5", align === "center" && "flex justify-center")}>
              <Eyebrow dark>{eyebrow}</Eyebrow>
            </div>
          ) : null}
          <h1 className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 font-display text-lg font-semibold text-gold-400 sm:text-xl">{subtitle}</p>
          ) : null}
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-royal-100/85 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ Notice */

export function Notice({
  title,
  children,
  tone = "amber",
  icon = "alert",
}: {
  title: string;
  children: ReactNode;
  tone?: "amber" | "royal" | "dark";
  icon?: IconName;
}) {
  const tones = {
    amber: "border-gold-300 bg-gold-100/70 text-[#5c4708]",
    royal: "border-royal-200 bg-royal-50 text-royal-900",
    dark: "border-white/15 bg-white/5 text-royal-100",
  };
  return (
    <div className={cn("rounded-2xl border p-5 sm:p-6", tones[tone])}>
      <div className="flex items-start gap-3">
        <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <h3 className={cn("font-display text-sm font-bold tracking-wide uppercase", tone === "dark" && "text-white")}>
            {title}
          </h3>
          <div className="mt-2 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
      }
        
