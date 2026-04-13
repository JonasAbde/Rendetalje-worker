import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "../CookieConsent";
import StructuredData from "../StructuredData";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-green-100 selection:text-green-900">
      <StructuredData />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
