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
        <title>
          {service.title} | {company.name}
        </title>
        <meta name="description" content={service.desc} />
      </Helmet>
      <ServicePageTemplate
        title={service.title}
        intro={service.desc}
        includes={service.includes}
        whoIsItFor={service.whoIsItFor}
        pricingLogic={service.pricingLogic}
        process={service.process}
        faqs={service.faqs}
      />
    </>
  );
}
