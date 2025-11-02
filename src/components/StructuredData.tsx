import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "Organization" | "SoftwareApplication" | "FAQPage" | "Product" | "BreadcrumbList";
  data: any;
}

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SpotzyAI",
    "alternateName": "Spotzy AI Voice Assistants",
    "url": "https://spotzyai.lovable.app",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/x2zPpcnJQFezRv7XmH4l2nluIT33/uploads/1761165690010-favicon.png",
    "description": "SpotzyAI is a no-code AI voice assistant platform that enables businesses to build, deploy, and manage intelligent voice agents for phone calls. Supporting 36 languages with enterprise-grade capabilities.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@spotzyai.com",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.instagram.com/spotzyai/",
      "https://www.facebook.com/spotzyai/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const SoftwareApplicationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpotzyAI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "19.99",
      "highPrice": "599.99",
      "priceCurrency": "USD",
      "priceSpecification": [
        {
          "@type": "UnitPriceSpecification",
          "price": "19.99",
          "priceCurrency": "USD",
          "name": "Starter Plan"
        },
        {
          "@type": "UnitPriceSpecification",
          "price": "99.99",
          "priceCurrency": "USD",
          "name": "Pro Plan"
        },
        {
          "@type": "UnitPriceSpecification",
          "price": "599.99",
          "priceCurrency": "USD",
          "name": "Ultimate Plan"
        }
      ]
    },
    "description": "No-code AI voice assistant platform for automated phone calls. Build intelligent voice agents in minutes with support for 36 languages, real-time integrations, and enterprise-grade security.",
    "featureList": [
      "36 Language Support",
      "No-Code Dashboard",
      "Real-Time Availability Checking",
      "High Concurrency (1000+ simultaneous calls)",
      "SMS Confirmations",
      "Calendar Integration",
      "CRM Integration",
      "Enterprise Security"
    ],
    "screenshot": "https://spotzyai.lovable.app/og-image.png"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const FAQPageSchema = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
