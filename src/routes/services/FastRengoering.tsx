import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";
import { coreServices } from "@/content/services";

export default function FastRengoering() {
  const service = coreServices.find((s) => s.id === "fast-rengoering");

  if (!service) return null;

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://rendetalje.dk/services/fast-rengoering" />
        <title>{`${service.title} | ${company.name}`}</title>
        <meta name="description" content={`${service.desc} — vi servicerer Aarhus C, Aarhus N, Aarhus V, Risskov, Højbjerg, Viby J, Tilst, Brabrand og Hasselager.`} />
        <meta property="og:title" content={`${service.title} | ${company.name}`} />
        <meta property="og:description" content={`${service.desc} — vi servicerer Aarhus C, Aarhus N, Aarhus V, Risskov, Højbjerg, Viby J, Tilst, Brabrand og Hasselager.`} />
        <meta property="og:url" content="https://rendetalje.dk/services/fast-rengoering" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rendetalje.dk/images/service-fast.webp" />
        <meta property="og:locale" content="da_DK" />
      </Helmet>
      <ServicePageTemplate
        title={service.title}
        intro={service.desc}
        image="/images/service-fast.webp"
        includes={service.includes}
        whoIsItFor={service.whoIsItFor}
        pricingLogic={service.pricingLogic}
        process={service.process}
        faqs={service.faqs}
        areas={service.areas}
      />
    </>
  );
}
