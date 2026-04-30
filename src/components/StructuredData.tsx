import { useEffect } from "react";
import { company } from "@/content/company";

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": company.name,
    "image": "https://rendetalje.dk/logo.png",
    "url": "https://rendetalje.dk",
    "telephone": "+45 22 65 02 26",
    "email": company.email,
    "priceRange": "$$",
    "description": "Professionel rengøring i Aarhus med fokus på detaljen. Fast rengøring, flytterengøring, hovedrengøring og erhvervsrengøring.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gammel Viborgvej 40",
      "addressLocality": "Tilst",
      "postalCode": "8381",
      "addressCountry": "DK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 56.1902,
      "longitude": 10.1029
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    "areaServed": {
      "@type": "City",
      "name": "Aarhus"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 56.1629,
        "longitude": 10.2039
      },
      "geoRadius": "15000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rengøringsydelser",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fast rengøring",
            "description": "Regelmæssig rengøring til private og erhverv"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flytterengøring",
            "description": "Grundig rengøring ved fraflytning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hovedrengøring",
            "description": "Dybdegående rengøring af hele boligen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Erhvervsrengøring",
            "description": "Professionel rengøring til kontorer og virksomheder"
          }
        }
      ]
    },
    "paymentAccepted": ["Kontant", "Bankoverførsel", "MobilePay"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": company.name,
    "url": "https://rendetalje.dk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rendetalje.dk/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "url": "https://rendetalje.dk",
    "logo": "https://rendetalje.dk/logo.png",
    "sameAs": [
      "https://www.facebook.com/rendetalje",
      "https://www.instagram.com/rendetalje"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+45-22-65-02-26",
      "contactType": "customer service",
      "availableLanguage": ["Danish"]
    }
  };

  useEffect(() => {
    const schemas = [localBusinessSchema, websiteSchema, organizationSchema];
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
  }, []);

  return null;
}
