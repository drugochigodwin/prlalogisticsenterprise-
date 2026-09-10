import { useId, useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { cn } from "@/utils/cn";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL, whatsappWith } from "@/data/site";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  full?: boolean;
  helper?: string;
};

type Props = {
  fields: FieldDef[];
  submitLabel: string;
  subject: string;
  intro?: string;
  emergency?: boolean;
  defaults?: Record<string, string>;
  className?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[0-9+()\s-]{7,20}$/;

export function EnquiryForm({
  fields,
  submitLabel,
  subject,
  intro,
  emergency = false,
  defaults = {},
  className,
}: Props) {
  const formId = useId();
  const initial = useMemo(() => {
    const base: Record<string, string> = {};
    fields.forEach((f) => {
      base[f.name] = defaults[f.name] ?? "";
    });
    return base;
  }, [fields, defaults]);

  const [values, setValues] = useState<Record<string, string>>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentMessage, setSentMessage] = useState<string | null>(null);

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function validate() {
    const next: Record<string, string> = {};
    fields.forEach((field) => {
      const value = (values[field.name] ?? "").trim();
      if (field.required && !value) {
        next[field.name] = `${field.label} is required.`;
        return;
      }
      if (!value) return;
      if (field.type === "email" && !emailPattern.test(value)) {
        next[field.name] = "Enter a valid email address.";
      }
      if (field.type === "tel" && !phonePattern.test(value)) {
        next[field.name] = "Enter a valid phone number.";
      }
    });
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }
    const lines = fields
      .map((field) => {
        const value = (values[field.name] ?? "").trim();
        return value ? `${field.label}: ${value}` : null;
      })
      .filter(Boolean)
      .join("\n");
    setSentMessage(`${subject}\n\n${lines}`);
  }

  if (sentMessage) {
    const name = values["Full Name"] ?? values["fullName"] ?? "";
    return (
      <div
        className={cn(
          "rounded-2xl border p-6 sm:p-8",
          emergency ? "border-gold-300 bg-white shadow-card" : "border-royal-100 bg-white shadow-card",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal-700 text-white">
            <Icon name="check" className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold text-royal-900">
              {name ? `Thank you, ${name.split(" ")[0]}.` : "Details captured."}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4a5a78]">
              Your details have been captured on this device. Online submissions are not yet connected to
              a live backend, so please forward your request using one of the secure options below to make
              sure it reaches PRLA Logistics Enterprise.
            </p>
          </div>
        </div>

        <pre className="mt-5 max-h-56 overflow-auto rounded-xl bg-[#f5f7fa] p-4 text-left font-sans text-[0.82rem] leading-relaxed whitespace-pre-wrap text-royal-900">
          {sentMessage}
        </pre>

        <div className="mt-5 flex flex-wrap gap-3">
          {emergency ? (
            <Button href={PHONE_TEL} variant="danger" icon="phone">
              Call {PHONE_DISPLAY}
            </Button>
          ) : null}
          <Button href={whatsappWith(sentMessage)} variant="whatsapp" icon="whatsapp" newTab>
            Send via WhatsApp
          </Button>
          <Button
            href={`${EMAIL_HREF}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(sentMessage)}`}
            variant="outline"
            icon="mail"
          >
            Send via Email
          </Button>
          <Button variant="light" onClick={() => setSentMessage(null)} className="border border-royal-100">
            Edit details
          </Button>
        </div>
        <p className="mt-4 text-xs text-[#6b7a94]">
          Direct contact: <a className="font-semibold text-royal-700 underline" href={PHONE_TEL}>{PHONE_DISPLAY}</a>{" "}
          ·{" "}
          <a className="font-semibold text-royal-700 underline" href={EMAIL_HREF}>
            {EMAIL}
          </a>
        </p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "rounded-2xl border border-royal-100 bg-white p-6 shadow-card sm:p-8",
        className,
      )}
    >
      {intro ? <p className="mb-6 text-sm leading-relaxed text-[#4a5a78]">{intro}</p> : null}

      {errorCount > 0 ? (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-[#f2c9cc] bg-[#fdf2f3] px-4 py-3 text-sm font-medium text-[#8f0e16]"
        >
          Please correct {errorCount} {errorCount === 1 ? "field" : "fields"} below and submit again.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `${formId}-${field.name}`;
          const errorId = `${id}-error`;
          const hasError = Boolean(errors[field.name]);
          const base = cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-royal-900 shadow-[inset_0_1px_2px_rgba(10,28,77,0.04)] transition-colors duration-200 placeholder:text-[#9aa8bf]",
            hasError
              ? "border-[#d4535c] focus:border-[#b3121b]"
              : "border-royal-100 hover:border-royal-200 focus:border-royal-600",
            "focus:outline-none",
          );

          return (
            <div key={field.name} className={cn(field.full || field.type === "textarea" ? "sm:col-span-2" : "")}>
              <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-royal-900">
                {field.label}
                {field.required ? (
                  <span className="ml-1 text-[#b3121b]" aria-hidden="true">
                    *
                  </span>
                ) : (
                  <span className="ml-1.5 text-xs font-medium text-[#8593ab]">(optional)</span>
                )}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  rows={4}
                  value={values[field.name] ?? ""}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={cn(base, "resize-y")}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  value={values[field.name] ?? ""}
                  required={field.required}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={cn(base, "appearance-none bg-[right_1rem_center] bg-no-repeat pr-10")}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230f2a6b' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="">Please select…</option>
                  {(field.options ?? []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type ?? "text"}
                  inputMode={field.type === "tel" ? "tel" : undefined}
                  value={values[field.name] ?? ""}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required={field.required}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={base}
                />
              )}

              {field.helper && !hasError ? (
                <p className="mt-1.5 text-xs text-[#6b7a94]">{field.helper}</p>
              ) : null}
              {hasError ? (
                <p id={errorId} className="mt-1.5 text-xs font-semibold text-[#b3121b]">
                  {errors[field.name]}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant={emergency ? "danger" : "primary"} size="lg" iconRight="arrowRight">
          {submitLabel}
        </Button>
        <p className="text-xs leading-relaxed text-[#6b7a94]">
          Fields marked <span className="font-semibold text-[#b3121b]">*</span> are required.
        </p>
      </div>
    </form>
  );
}
