import { Icon } from "@/components/Icons";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PRLA Logistics Enterprise on WhatsApp"
        className="group inline-flex items-center gap-0 rounded-full bg-[#1faa53] p-3.5 text-white shadow-lift ring-1 ring-white/25 transition-all duration-300 hover:gap-2 hover:bg-[#188f45] sm:p-4"
      >
        <Icon name="whatsapp" className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-[9rem]">
          WhatsApp Enquiry
        </span>
      </a>

      <a
        href={PHONE_TEL}
        aria-label={`Call PRLA Logistics Enterprise for assistance on ${PHONE_DISPLAY}`}
        className="group inline-flex items-center gap-0 rounded-full bg-royal-900 p-3.5 text-white shadow-lift ring-1 ring-gold-500/60 transition-all duration-300 hover:gap-2 hover:bg-royal-800 sm:p-4"
      >
        <Icon name="phone" className="h-5 w-5 text-gold-400 sm:h-6 sm:w-6" />
        <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-[10rem]">
          Call {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
}
