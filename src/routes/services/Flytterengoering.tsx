import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { Helmet } from "react-helmet-async";
import Canonical from "@/components/Canonical";
import { company } from "@/content/company";
import { coreServices } from "@/content/services";

export default function Flytterengoering() {
  const service = coreServices.find((s) => s.id === "flytterengoering");

  if (!service) return null;

  return (
    <>
      <Helmet>
      <Canonical path="/services/flytterengoering" />
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
