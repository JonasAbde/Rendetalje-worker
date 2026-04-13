import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Services } from './routes/Services'
import { ServiceFast } from './routes/ServiceFast'
import { ServiceMoveout } from './routes/ServiceMoveout'
import { ServiceDeep } from './routes/ServiceDeep'
import { ServiceBusiness } from './routes/ServiceBusiness'
import { Prices } from './routes/Prices'
import { FAQ } from './routes/FAQ'
import { Contact } from './routes/Contact'
import { Terms } from './routes/Terms'
import { Privacy } from './routes/Privacy'
import { Cookies } from './routes/Cookies'
import { NotFound } from './routes/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="om-os" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/fast-rengoering" element={<ServiceFast />} />
          <Route path="services/flytterengoering" element={<ServiceMoveout />} />
          <Route path="services/hovedrengoering" element={<ServiceDeep />} />
          <Route path="services/erhvervsrengoering" element={<ServiceBusiness />} />
          <Route path="priser" element={<Prices />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="handelsbetingelser" element={<Terms />} />
          <Route path="privatlivspolitik" element={<Privacy />} />
          <Route path="cookiepolitik" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App
