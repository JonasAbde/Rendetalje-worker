import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./routes/Home"; // ⚡ Bolt: Eagerly load initial route to improve FCP by avoiding extra network roundtrip
const About = lazy(() => import("./routes/About"));
const Services = lazy(() => import("./routes/Services"));
const FastRengoering = lazy(() => import("./routes/services/FastRengoering"));
const Flytterengoering = lazy(() => import("./routes/services/Flytterengoering"));
const Hovedrengoering = lazy(() => import("./routes/services/Hovedrengoering"));
const Erhvervsrengoering = lazy(() => import("./routes/services/Erhvervsrengoering"));
const Pricing = lazy(() => import("./routes/Pricing"));
const ServiceAreas = lazy(() => import("./routes/ServiceAreas"));
const FlyttesynGuide = lazy(() => import("./routes/FlyttesynGuide"));
const RengoeringPriser = lazy(() => import("./routes/guides/RengoeringPriser"));
const FAQ = lazy(() => import("./routes/FAQ"));
const Contact = lazy(() => import("./routes/Contact"));
const Terms = lazy(() => import("./routes/Terms"));
const Privacy = lazy(() => import("./routes/Privacy"));
const Cookies = lazy(() => import("./routes/Cookies"));
const NotFound = lazy(() => import("./routes/NotFound"));

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent"></div>
      <p className="mt-4 text-sm text-slate-500">Indlæser...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="om-os" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route
              path="services/fast-rengoering"
              element={<FastRengoering />}
            />
            <Route
              path="services/flytterengoering"
              element={<Flytterengoering />}
            />
            <Route
              path="services/hovedrengoering"
              element={<Hovedrengoering />}
            />
            <Route
              path="services/erhvervsrengoering"
              element={<Erhvervsrengoering />}
            />
            <Route path="priser" element={<Pricing />} />
            <Route path="service-omraade" element={<ServiceAreas />} />
            <Route
              path="guides/saadan-bestaar-du-dit-flyttesyn"
              element={<FlyttesynGuide />}
            />
            <Route
              path="guides/hvad-koster-rengoering"
              element={<RengoeringPriser />}
            />
            <Route path="faq" element={<FAQ />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="handelsbetingelser" element={<Terms />} />
            <Route path="privatlivspolitik" element={<Privacy />} />
            <Route path="cookiepolitik" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
