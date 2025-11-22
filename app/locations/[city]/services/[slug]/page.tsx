import { HeroSection } from "@/components/hero-section";
import { SERVICES, LOCATIONS } from "@/lib/data";
import { constructMetadata, generateLocalBusinessSchema } from "@/lib/seo";
import { notFound } from 'next/navigation';
import Script from "next/script";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from 'lucide-react';
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface PageProps {
  params: { city: string; slug: string };
}

export async function generateStaticParams() {
  const params = [];
  for (const city of LOCATIONS) {
    for (const service of SERVICES) {
      params.push({ city, slug: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const city = decodeURIComponent(params.city);
  const service = SERVICES.find(s => s.slug === params.slug);

  if (!LOCATIONS.includes(city) || !service) return {};

  return constructMetadata({
    title: `${service.title} in ${city}, FL`,
    description: `Best ${service.title.toLowerCase()} in ${city}. Trusted by local pet owners. Book your appointment today at Florida Vet Care ${city}.`,
    path: `/locations/${city}/services/${params.slug}`
  });
}

export default function LocationServicePage({ params }: PageProps) {
  const city = decodeURIComponent(params.city);
  const service = SERVICES.find(s => s.slug === params.slug);

  if (!LOCATIONS.includes(city) || !service) {
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
        title={`${service.title} in ${city}`}
        subtitle={`Top-rated ${service.title.toLowerCase()} services for pets in ${city}, Florida. Professional care you can trust.`}
        location={city}
        image={`/placeholder.svg?height=800&width=800&query=${service.slug}+${city}`}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/#locations" },
              { label: city, href: `/locations/${city}` },
              { label: service.title }
            ]}
          />
        }
      />

      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our {service.title} Service</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Florida Vet Care in {city}, we understand that your pet is family. Our {service.title.toLowerCase()} service
                is designed to provide the highest standard of care using modern techniques and equipment.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you live in downtown {city} or the surrounding neighborhoods, our clinic is conveniently located
                to serve your pet's needs.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Book Appointment in {city}</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-xl mb-6">Why {city} Pet Owners Trust Us</h3>
              <ul className="space-y-4">
                {[
                  `Convenient ${city} location`,
                  "Same-day appointments available",
                  "5-star rated by local pet owners",
                  "Modern, clean facility",
                  "Compassionate, expert staff"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Local Testimonial Placeholder */}
          <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 text-center mb-16">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
              "I've been taking my dog to Florida Vet Care in {city} for years. Their {service.title.toLowerCase()} service is exceptional!"
            </blockquote>
            <cite className="not-italic text-muted-foreground font-medium">- Sarah M., {city} Resident</cite>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Other Services in {city}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES.filter(s => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/locations/${city}/services/${s.slug}`}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Book Your ${service.title} in ${city}`}
        subtitle={`We're ready to help your pet feel their best. Visit our ${city} clinic today.`}
      />
    </main>
  );
}
