import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company, geography, seoKeywords } from "@/content/company";

// --- Breadcrumb mapping: path segment → label ---
const breadcrumbLabels: Record<string, string> = {
  "om-os": "Om os",
  services: "Services",
  "fast-rengoering": "Fast rengøring",
  flytterengoering: "Flytterengøring",
  hovedrengoering: "Hovedrengøring",
  erhvervsrengoering: "Erhvervsrengøring",
  priser: "Priser",
  "service-omraade": "Serviceområde",
  faq: "FAQ",
  kontakt: "Kontakt",
  handelsbetingelser: "Handelsbetingelser",
  privatlivspolitik: "Privatlivspolitik",
  cookiepolitik: "Cookiepolitik",
};

const SITE_URL = "https://rendetalje.dk";

function getBreadcrumbItems(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const items: { name: string; path: string }[] = [{ name: "Hjem", path: "/" }];

  let currentPath = "";
  for (const seg of segments) {
    currentPath += `/${seg}`;
    const name = breadcrumbLabels[seg] || seg.charAt(0).toUpperCase() + seg.slice(1);
    items.push({ name, path: currentPath });
  }

  return items;
}

export default function StructuredData() {
  const { pathname } = useLocation();
  const breadcrumbItems = getBreadcrumbItems(pathname);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  const areaNames = geography.areas.map((a) => a.city);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: "https://rendetalje.dk/logo.webp",
    url: SITE_URL,
    telephone: "+45 22 65 02 26",
    email: company.email,
    priceRange: "$$",
    description:
      "Professionel rengøring i Aarhus med fokus på detaljen. Fast rengøring, flytterengøring, hovedrengøring og erhvervsrengøring.",
    keywords: seoKeywords.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gammel Viborgvej 40",
      addressLocality: "Tilst",
      postalCode: "8381",
      addressCountry: "DK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 56.1902,
      longitude: 10.1029,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    areaServed: areaNames.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Aarhus Kommune",
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 56.1629,
        longitude: 10.2039,
      },
      geoRadius: "15000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rengøringsydelser",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fast rengøring",
            description:
              "Regelmæssig rengøring til private og erhverv. Støvsugning, gulvvask, aftørring af overflader, rengøring af badeværelse og køkken. Perfekt til travle familier og professionelle.",
            serviceType: "House Cleaning",
            provider: { "@type": "Organization", name: company.name },
            areaServed: areaNames.map((city) => ({
              "@type": "City",
              name: city,
            })),
            offers: {
              "@type": "Offer",
              price: "698",
              priceCurrency: "DKK",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: 399,
                priceCurrency: "DKK",
                unitText: "HOUR",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flytterengøring",
            description:
              "Grundig rengøring ved fraflytning. Omfatter alle rum, hvidevarer, skabe, skuffer, afkalkning af badeværelse og aftørring af døre og karme. Sikrer dit depositum ved fraflytning.",
            serviceType: "Move Out Cleaning",
            provider: { "@type": "Organization", name: company.name },
            areaServed: areaNames.map((city) => ({
              "@type": "City",
              name: city,
            })),
            offers: {
              "@type": "Offer",
              price: "1047",
              priceCurrency: "DKK",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: 399,
                priceCurrency: "DKK",
                unitText: "HOUR",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hovedrengøring",
            description:
              "Dybdegående rengøring af hele boligen. Paneler, døre, karme, grundig afkalkning af badeværelse, aftørring af alle overflader. Perfekt som opstart på fast ordning eller før højtider.",
            serviceType: "Deep Cleaning",
            provider: { "@type": "Organization", name: company.name },
            areaServed: areaNames.map((city) => ({
              "@type": "City",
              name: city,
            })),
            offers: {
              "@type": "Offer",
              price: "1047",
              priceCurrency: "DKK",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: 399,
                priceCurrency: "DKK",
                unitText: "HOUR",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Erhvervsrengøring",
            description:
              "Professionel rengøring til kontorer og virksomheder. Støvsugning, gulvvask, aftørring af skriveborde, rengøring af personalekøkken og toiletter. Fleksible aftaler og månedlig faktura.",
            serviceType: "Commercial Cleaning",
            provider: { "@type": "Organization", name: company.name },
            areaServed: areaNames.map((city) => ({
              "@type": "City",
              name: city,
            })),
            offers: {
              "@type": "Offer",
              price: "698",
              priceCurrency: "DKK",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: 399,
                priceCurrency: "DKK",
                unitText: "HOUR",
              },
            },
          },
        },
      ],
    },
    paymentAccepted: ["Kontant", "Bankoverførsel", "MobilePay"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: SITE_URL,
    inLanguage: "da-DK",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: "https://rendetalje.dk/logo.webp",
    foundingDate: String(company.founded),
    taxID: company.cvr,
    sameAs: ["https://www.instagram.com/rendetalje/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+45 22 65 02 26",
      contactType: "customer service",
      availableLanguage: ["Danish"],
    },
  };

  useEffect(() => {
    const schemas = [localBusinessSchema, websiteSchema, organizationSchema, breadcrumbSchema];
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      script.setAttribute("data-structured", "");
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-structured]').forEach((s) => s.remove());
    };
  }, [pathname]);

  return null;
}
