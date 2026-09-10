import type { ReactNode } from "react";
import { RouterProvider, useRoute } from "@/lib/router";
import { useSeo } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Button, PageHero, Section } from "@/components/ui";
import { IMAGES } from "@/data/site";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Ambulance from "@/pages/Ambulance";
import Fleet from "@/pages/Fleet";
import Investment from "@/pages/Investment";
import Partnership from "@/pages/Partnership";
import Contact from "@/pages/Contact";
import { PrivacyPolicy, Terms } from "@/pages/Legal";

function NotFound() {
  useSeo(
    "Page Not Found | PRLA Logistics Enterprise",
    "The page you requested could not be found. Explore PRLA Logistics Enterprise transportation, logistics, fleet management, and ambulance quick response services.",
  );
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        description="The page you requested is not available. Use the links below to continue exploring PRLA Logistics Enterprise."
        image={IMAGES.heroRoad.src}
        imageAlt={IMAGES.heroRoad.alt}
      >
        <Button to="/" variant="gold" size="lg" iconRight="arrowRight">
          Back to Home
        </Button>
        <Button to="/contact" variant="onDark" size="lg">
          Contact PRLA
        </Button>
      </PageHero>
      <Section tone="white" size="md">
        <div className="container-px flex flex-wrap gap-3">
          <Button to="/services" variant="outline">
            Our Services
          </Button>
          <Button to="/ambulance" variant="outline">
            Ambulance Quick Response
          </Button>
          <Button to="/fleet" variant="outline">
            Fleet Management
          </Button>
          <Button to="/investment" variant="outline">
            Investment
          </Button>
          <Button to="/partnership" variant="outline">
            Partnership
          </Button>
        </div>
      </Section>
    </>
  );
}

const routes: Record<string, () => ReactNode> = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/ambulance": Ambulance,
  "/fleet": Fleet,
  "/investment": Investment,
  "/partnership": Partnership,
  "/contact": Contact,
  "/privacy-policy": PrivacyPolicy,
  "/terms": Terms,
};

function Routes() {
  const { path } = useRoute();
  const Page = routes[path] ?? NotFound;
  return <Page />;
}

export default function App() {
  return (
    <RouterProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-royal-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Routes />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </RouterProvider>
  );
}
