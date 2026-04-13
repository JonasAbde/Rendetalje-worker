import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { StructuredData } from './StructuredData';
import { BackToTop } from './BackToTop';
import { StickyMobileCTA } from './StickyMobileCTA';
import { CookieConsent } from './CookieConsent';

export function Layout() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-grow pb-20 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
        <StickyMobileCTA />
        <CookieConsent />
      </div>
    </>
  );
}
