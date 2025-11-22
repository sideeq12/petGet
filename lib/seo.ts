import { Metadata } from "next";
import { COMPANY_NAME } from "./data";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  image = "/images/og-default.jpg",
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | ${COMPANY_NAME}`;

  return {
    title: fullTitle,
    description: description,
    openGraph: {
      title: fullTitle,
      description: description,
      url: `https://sunshinevet.com${path}`,
      siteName: COMPANY_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [image],
      creator: "@sunshinevet",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://sunshinevet.com"),
    alternates: {
      canonical: `https://sunshinevet.com${path}`,
    },
  };
}

export function generateLocalBusinessSchema(city: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": `Sunshine Vet - ${city}`,
    "image": "https://sunshinevet.com/veterinarian-clinic-florida.jpg",
    "@id": `https://sunshinevet.com/locations/${city}`,
    "url": `https://sunshinevet.com/locations/${city}`,
    "telephone": "(555) 123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": city,
      "addressRegion": "FL",
      "postalCode": "33101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.6648,
      "longitude": -81.5158
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/sunshinevet",
      "https://www.instagram.com/sunshinevet",
      "https://twitter.com/sunshinevet"
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Sunshine Vet",
    "url": "https://sunshinevet.com",
    "logo": "https://sunshinevet.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(555) 123-4567",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "sameAs": [
    ]
  };
}
