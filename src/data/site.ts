export const BRAND = "PRLA LOGISTICS ENTERPRISE";
export const BRAND_SENTENCE = "PRLA Logistics Enterprise";
export const TAGLINE = "Moving People. Delivering Possibilities.";

export const PHONE_DISPLAY = "08134144981";
export const PHONE_TEL = "tel:08134144981";
export const WHATSAPP_URL = "https://wa.me/2348134144981";
export const EMAIL = "mbanganim44@gmail.com";
export const EMAIL_HREF = "mailto:mbanganim44@gmail.com";

export function whatsappWith(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

/** Pexels image helper — keeps the bundle light by loading optimised remote assets. */
export function photo(id: number, w = 1200, h?: number) {
  const size = h ? `&fit=crop&w=${w}&h=${h}` : `&w=${w}`;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb${size}`;
}

export const IMAGES = {
  heroRoad: {
    src: photo(31729400, 1920, 1080),
    alt: "Aerial view of a busy multi-lane urban road intersection with vehicles in motion",
  },
  cityTraffic: {
    src: photo(16155218, 1200, 900),
    alt: "Busy African city street with commuters, vehicles and roadside commerce",
  },
  ambulanceNight: {
    src: photo(5458450, 1600, 900),
    alt: "Emergency ambulance with flashing lights on an illuminated city street at night",
  },
  ambulanceSunset: {
    src: photo(9965658, 1400, 900),
    alt: "Ambulance driving through an urban area under evening light",
  },
  ambulanceFleet: {
    src: photo(5364345, 1200, 800),
    alt: "Row of ambulances parked and prepared for emergency healthcare operations",
  },
  stretcher: {
    src: photo(35831382, 1200, 800),
    alt: "Two emergency medical personnel carefully loading a stretcher into an ambulance",
  },
  courierRider: {
    src: photo(33411898, 1200, 800),
    alt: "Motorcycle courier riding along a road carrying delivery packages",
  },
  deliveryVan: {
    src: photo(4391469, 1200, 800),
    alt: "White delivery van parked in front of a modern office building",
  },
  vanFleet: {
    src: photo(35831379, 1400, 900),
    alt: "Large white passenger van parked outside a modern corporate office building",
  },
  freight: {
    src: photo(8360517, 1400, 900),
    alt: "Freight trucks travelling along a highway at sunrise",
  },
  keke: {
    src: photo(37562262, 1200, 800),
    alt: "Street scene with commercial tricycles operating in a busy market area",
  },
  boardroom: {
    src: photo(38649010, 1400, 900),
    alt: "Business professionals reviewing documents during an investment discussion in an office",
  },
  teamwork: {
    src: photo(8547282, 1400, 900),
    alt: "Diverse group of professionals collaborating around a laptop in a modern office",
  },
  driverTech: {
    src: photo(6169129, 1200, 800),
    alt: "Driver using satellite navigation technology inside a delivery vehicle",
  },
  warehouse: {
    src: photo(6169653, 1200, 800),
    alt: "Logistics team organising parcels and shipping documentation in a courier workspace",
  },
};

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Ambulance Quick Response", to: "/ambulance" },
  { label: "Fleet Management", to: "/fleet" },
  { label: "Investment", to: "/investment" },
  { label: "Partnership", to: "/partnership" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
  to: string;
  image?: { src: string; alt: string };
};

export const SERVICES: Service[] = [
  {
    slug: "transportation",
    title: "Transportation Services",
    description:
      "Passenger and commercial transportation solutions for individuals, businesses, and organizations.",
    detail:
      "Structured movement of people and goods for daily commuting, staff mobility, scheduled trips, and commercial transport requirements — coordinated for reliability and accountability.",
    icon: "bus",
    to: "/contact?service=Transportation",
    image: IMAGES.cityTraffic,
  },
  {
    slug: "parcel-courier",
    title: "Parcel & Courier Delivery",
    description: "Reliable movement of parcels, documents, and goods.",
    detail:
      "Pickup and delivery support for parcels, documents, and business consignments, organised around clear handover, dispatch coordination, and delivery confirmation.",
    icon: "package",
    to: "/contact?service=Parcel %26 Courier Delivery",
    image: IMAGES.courierRider,
  },
  {
    slug: "keke-management",
    title: "Keke Management",
    description: "Professional tricycle operations and management for owners and investors.",
    detail:
      "Operational management for commercial tricycles including rider coordination, daily operational oversight, remittance tracking structures, and asset accountability for owners.",
    icon: "tricycle",
    to: "/contact?service=Keke Management",
    image: IMAGES.keke,
  },
  {
    slug: "fleet-management",
    title: "Fleet Management",
    description:
      "Vehicle monitoring, maintenance coordination, driver management, and operational efficiency.",
    detail:
      "End-to-end fleet support covering vehicle monitoring, maintenance scheduling, driver and rider management, documentation, and performance reporting.",
    icon: "gauge",
    to: "/fleet",
    image: IMAGES.vanFleet,
  },
  {
    slug: "ambulance-quick-response",
    title: "Ambulance Quick Response Services",
    description: "Emergency transportation and ambulance support for urgent medical mobility needs.",
    detail:
      "Ambulance quick response and emergency transportation support for urgent medical mobility needs — subject to vehicle availability, location, and operational readiness.",
    icon: "ambulance",
    to: "/ambulance",
    image: IMAGES.ambulanceSunset,
  },
  {
    slug: "patient-transportation",
    title: "Patient Transportation",
    description:
      "Transportation support for patients between homes, hospitals, clinics, and healthcare facilities.",
    detail:
      "Planned and non-emergency patient movement between residences and healthcare facilities, coordinated with families, caregivers, and requesting institutions.",
    icon: "stretcher",
    to: "/ambulance",
    image: IMAGES.stretcher,
  },
  {
    slug: "hospital-clinic-support",
    title: "Hospital & Clinic Support",
    description: "Transportation support for healthcare institutions and medical organizations.",
    detail:
      "Transportation arrangements that support the mobility requirements of hospitals, clinics, and medical organizations, structured through formal service arrangements.",
    icon: "hospital",
    to: "/ambulance",
  },
  {
    slug: "event-medical-transportation",
    title: "Event Medical Transportation Support",
    description: "Ambulance transportation support for approved events and organized activities.",
    detail:
      "Standby ambulance transportation support for approved events and organized activities, arranged in advance and subject to availability and agreed terms.",
    icon: "calendar",
    to: "/ambulance",
  },
  {
    slug: "corporate-emergency-support",
    title: "Corporate & Institutional Emergency Support",
    description: "Emergency transportation arrangements for businesses, institutions, and organizations.",
    detail:
      "Pre-arranged emergency transportation support for corporate organizations and institutions seeking structured mobility arrangements for their people.",
    icon: "shieldBuilding",
    to: "/ambulance",
  },
  {
    slug: "business-corporate-logistics",
    title: "Business & Corporate Logistics",
    description: "Transportation and logistics solutions for businesses, institutions, and organizations.",
    detail:
      "Dedicated logistics support for organizations — staff movement, distribution runs, dispatch coordination, and contract transportation designed around operational needs.",
    icon: "briefcase",
    to: "/contact?service=Corporate Logistics",
    image: IMAGES.warehouse,
  },
  {
    slug: "investment-opportunities",
    title: "Investment Opportunities",
    description:
      "Opportunities for individuals and strategic partners interested in logistics asset ownership and operations.",
    detail:
      "Participation opportunities in transportation and logistics asset ownership and operations, subject to availability, due diligence, and formal agreements.",
    icon: "chart",
    to: "/investment",
    image: IMAGES.boardroom,
  },
];

export const WHY_CHOOSE = [
  {
    title: "Reliability",
    description: "Focused on dependable transportation and logistics solutions.",
    icon: "shieldCheck",
  },
  {
    title: "Safety",
    description: "Safety-conscious transportation and operational practices.",
    icon: "safety",
  },
  {
    title: "Technology",
    description: "Technology-powered approaches to transportation and fleet operations.",
    icon: "cpu",
  },
  {
    title: "Professional Excellence",
    description: "Structured services designed around accountability and quality.",
    icon: "award",
  },
  {
    title: "Customer Focus",
    description: "Solutions designed around customer needs and operational requirements.",
    icon: "users",
  },
  {
    title: "Sustainable Growth",
    description: "Building a scalable mobility business designed for long-term growth across Africa.",
    icon: "growth",
  },
];

export const CORE_VALUES = [
  "Integrity",
  "Reliability",
  "Safety",
  "Accountability",
  "Professional Excellence",
  "Innovation",
  "Customer Satisfaction",
  "Sustainable Growth",
];

export const FLEET_FEATURES = [
  {
    title: "Vehicle Acquisition Support",
    description:
      "Guidance and coordination support for owners and organizations acquiring vehicles for commercial operations.",
    icon: "key",
  },
  {
    title: "Driver & Rider Management",
    description:
      "Structured onboarding, documentation, scheduling, and conduct oversight for drivers and riders.",
    icon: "idCard",
  },
  {
    title: "Maintenance Coordination",
    description:
      "Scheduled servicing coordination and repair follow-up designed to protect vehicle condition and uptime.",
    icon: "wrench",
  },
  {
    title: "Daily Operational Monitoring",
    description:
      "Day-to-day operational oversight of trips, utilisation, and vehicle activity for better control.",
    icon: "radar",
  },
  {
    title: "Asset Protection & Accountability",
    description:
      "Documentation, checks, and accountability structures designed to safeguard fleet assets.",
    icon: "lock",
  },
  {
    title: "Performance Reporting",
    description:
      "Periodic operational reporting to give owners visibility on activity and asset performance.",
    icon: "report",
  },
  {
    title: "Fleet Expansion Planning",
    description:
      "Planning support for owners and organizations working towards structured fleet growth.",
    icon: "expand",
  },
  {
    title: "Ambulance Fleet Management & Operational Coordination",
    description:
      "Operational coordination for ambulance assets, including readiness checks, scheduling, and deployment planning.",
    icon: "ambulance",
  },
];

export const INVESTMENT_CATEGORIES = [
  { asset: "Motorcycle", amount: "₦1,030,000", icon: "bike" },
  { asset: "Tricycle", amount: "₦5,000,000", icon: "tricycle" },
  { asset: "Minibus", amount: "₦5,000,000", icon: "bus" },
  { asset: "Sienna", amount: "₦12,000,000", icon: "car" },
];

export const INVESTMENT_STEPS = [
  "Submit an enquiry.",
  "Receive investment information.",
  "Complete due diligence.",
  "Enter a formal agreement.",
  "Implement the agreed asset and operational arrangements.",
  "Receive updates according to the formal agreement.",
];

export const INVESTMENT_DISCLAIMER =
  "Investment opportunities are subject to availability, formal agreements, due diligence, and applicable laws. Amounts, returns, income, ownership arrangements, and other terms must be confirmed by PRLA Logistics Enterprise before any commitment is made. No guaranteed returns or profits are promised.";

export const PARTNER_CATEGORIES = [
  {
    title: "Vehicle Owners",
    description:
      "Individuals and organizations with vehicles seeking structured management and operational support.",
    icon: "car",
  },
  {
    title: "Drivers & Riders",
    description:
      "Professional drivers and riders interested in structured operational opportunities.",
    icon: "idCard",
  },
  {
    title: "Corporate Clients",
    description: "Businesses requiring dependable transportation and logistics arrangements.",
    icon: "briefcase",
  },
  {
    title: "Logistics Partners",
    description: "Logistics operators seeking collaboration on movement and distribution.",
    icon: "package",
  },
  {
    title: "Hospitals & Clinics",
    description: "Healthcare institutions requiring patient and emergency transportation support.",
    icon: "hospital",
  },
  {
    title: "Event Organizers",
    description: "Organizers requiring transportation and standby ambulance support for approved events.",
    icon: "calendar",
  },
  {
    title: "Strategic Investors",
    description: "Individuals and partners interested in logistics asset ownership and operations.",
    icon: "chart",
  },
];

export const SERVICE_OPTIONS = [
  "Transportation",
  "Parcel & Courier Delivery",
  "Keke Management",
  "Fleet Management",
  "Ambulance Assistance",
  "Patient Transportation",
  "Hospital & Clinic Support",
  "Event Medical Transportation",
  "Corporate Logistics",
  "Investment",
  "Partnership",
  "Other",
];

export const PARTNERSHIP_TYPES = [
  "Vehicle Owner",
  "Driver / Rider",
  "Corporate Client",
  "Logistics Partner",
  "Hospital / Clinic",
  "Event Organizer",
  "Strategic Investor",
  "Other",
];

export const SOCIALS = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "TikTok", icon: "tiktok" },
  { name: "YouTube", icon: "youtube" },
];

export const SAFETY_NOTICE =
  "In a life-threatening emergency, contact the appropriate emergency services immediately. PRLA ambulance response is subject to vehicle availability, location, operational readiness, and applicable medical and emergency-service requirements.";
