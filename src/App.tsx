import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

const Home = React.lazy(() => import("./routes/Home"));
const About = React.lazy(() => import("./routes/About"));
const Services = React.lazy(() => import("./routes/Services"));
const FastRengoering = React.lazy(() => import("./routes/services/FastRengoering"));
const Flytterengoering = React.lazy(() => import("./routes/services/Flytterengoering"));
const Hovedrengoering = React.lazy(() => import("./routes/services/Hovedrengoering"));
const Erhvervsrengoering = React.lazy(() => import("./routes/services/Erhvervsrengoering"));
const Pricing = React.lazy(() => import("./routes/Pricing"));
const ServiceAreas = React.lazy(() => import("./routes/ServiceAreas"));
const FAQ = React.lazy(() => import("./routes/FAQ"));
const Contact = React.lazy(() => import("./routes/Contact"));
const Terms = React.lazy(() => import("./routes/Terms"));
const Privacy = React.lazy(() => import("./routes/Privacy"));
const Cookies = React.lazy(() => import("./routes/Cookies"));
const NotFound = React.lazy(() => import("./routes/NotFound"));

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
