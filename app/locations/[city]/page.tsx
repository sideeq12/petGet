import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { SERVICES, LOCATIONS } from "@/lib/data";
import { constructMetadata, generateLocalBusinessSchema } from "@/lib/seo";
import { notFound } from 'next/navigation';
import Script from "next/script";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Image from "next/image";
import { Shield, Heart, Users, Star, CheckCircle2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);
  if (!LOCATIONS.includes(city)) return {};

  return constructMetadata({
    title: `Veterinarian in ${city}, FL`,
    description: `Top-rated veterinary care in ${city}, Florida. Full-service animal hospital providing vaccinations, surgery, and wellness exams for pets in ${city}.`,
    path: `/locations/${city}`
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  if (!LOCATIONS.includes(city)) {
    notFound();
  }

  const jsonLd = generateLocalBusinessSchema(city);

  return (
    <main>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title={`Trusted Veterinarian in ${city}, FL`}
        subtitle={`Providing exceptional pet care to the ${city} community. Book your appointment today for wellness exams, vaccines, and more.`}
        location={city}
        image="/veterinarian-clinic-florida.jpg"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations" },
              { label: city }
            ]}
          />
        }
      />

      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Veterinary Services in {city}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              slug={service.slug}
              iconName={service.icon}
              location={city}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Localized */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/veterinarian-hugging-dog.jpg"
                  alt={`Veterinarian in ${city}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Why Choose Our {city} Clinic?</h2>
              <p className="text-lg text-slate-600">
                We combine the resources of a large veterinary network with the personalized care of a neighborhood clinic.
              </p>
              <ul className="space-y-4">
                {[
                  `Conveniently located in the heart of ${city}`,
                  "Same-day appointments often available",
                  "State-of-the-art diagnostic equipment",
                  "Compassionate, fear-free certified staff"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Team Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet the {city} Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Johnson", role: "Lead Veterinarian", image: "/team-sarah.jpg" },
              { name: "Dr. Michael Chen", role: "Associate Veterinarian", image: "/team-michael.jpg" },
              { name: "Emily Davis", role: "Head Technician", image: "/team-emily.jpg" }
            ].map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 mx-auto max-w-sm bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What {city} Pet Owners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I've never felt more comfortable leaving my dog with a vet. The team here really cares.",
                author: "Jessica M.",
                rating: 5
              },
              {
                quote: "Quick, professional, and affordable. So glad to have this clinic right here in town.",
                author: "David R.",
                rating: 5
              },
              {
                quote: "They treated my cat like royalty. The facility is spotless and the staff is amazing.",
                author: "Amanda K.",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-sm text-slate-500">{city} Resident</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">FAQ for our {city} Clinic</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: `Where is the ${city} clinic located?`,
                a: `We are centrally located in ${city} with ample parking. Please check the map below or call us for specific directions.`
              },
              {
                q: "Do you accept walk-ins?",
                a: "We prioritize scheduled appointments but do our best to accommodate walk-ins for urgent matters. We recommend calling ahead."
              },
              {
                q: "What services do you offer on-site?",
                a: "Our facility is fully equipped for wellness exams, vaccinations, dental cleaning, and general surgery. We also have an in-house pharmacy."
              },
              {
                q: "Do you offer emergency care?",
                a: "We handle urgent cases during business hours. For after-hours emergencies, we refer to our 24/7 partner hospitals in the area."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-slate-50 rounded-2xl border border-slate-100 px-6">
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title={`Best Veterinary Care in ${city}`}
        subtitle={`Join other pet owners in ${city} who trust us with their pets' health.`}
      />
    </main>
  );
}
