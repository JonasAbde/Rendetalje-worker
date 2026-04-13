import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import FastRengoering from "./routes/services/FastRengoering";
import Flytterengoering from "./routes/services/Flytterengoering";
import Hovedrengoering from "./routes/services/Hovedrengoering";
import Erhvervsrengoering from "./routes/services/Erhvervsrengoering";
import Pricing from "./routes/Pricing";
import ServiceAreas from "./routes/ServiceAreas";
import FAQ from "./routes/FAQ";
import Contact from "./routes/Contact";
import Terms from "./routes/Terms";
import Privacy from "./routes/Privacy";
import Cookies from "./routes/Cookies";
import NotFound from "./routes/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
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
      </Router>
    </HelmetProvider>
  );
}
