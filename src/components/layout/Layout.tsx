import { Outlet, Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent, { useCookieConsent } from "../CookieConsent";
import StructuredData from "../StructuredData";
import { loadAnalytics, unloadAnalytics } from "../../lib/analytics";
import { useEffect } from "react";

export default function Layout() {
  const { hasConsent } = useCookieConsent();
  const analyticsConsent = hasConsent("analytics");

  useEffect(() => {
    if (analyticsConsent) {
      loadAnalytics();
      return;
    }

    unloadAnalytics();
  }, [analyticsConsent]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-green-100 selection:text-green-900">
      <StructuredData />
      <Header />
      <main className="flex-grow pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden h-16 bg-green-600 border-t border-green-700 shadow-lg">
        <div className="flex h-full items-stretch">
          <a
            href="tel:+4522650226"
            className="flex flex-1 items-center justify-center gap-2 text-white text-sm font-semibold active:bg-green-700 transition-colors"
          >
            <Phone size={18} />
            Ring til os
          </a>
          <div className="w-px bg-green-500" />
          <Link
            to="/kontakt"
            className="flex flex-1 items-center justify-center gap-2 text-white text-sm font-semibold active:bg-green-700 transition-colors"
          >
            <MessageSquare size={18} />
            Få tilbud
          </Link>
        </div>
      </div>
    </div>
  );
}
