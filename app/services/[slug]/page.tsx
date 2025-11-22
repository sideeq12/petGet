import { HeroSection } from "@/components/hero-section";
import { LocationGrid } from "@/components/location-grid";
import { SERVICES, LOCATIONS } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.title} Services in Florida`,
    description: `Professional ${service.title.toLowerCase()} services for pets in Florida. ${service.description}`,
    path: `/services/${slug}`
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const SERVICE_IMAGES: Record<string, string> = {
    "dog-vaccination": "/dog-vet-checkup.jpg",
    "cat-vaccination": "/cat-exam.jpg",
    "pet-surgery": "/veterinarian-man.jpg",
    "emergency-vet-care": "/veterinarian-hugging-dog.jpg",
    "dental-care": "/happy-dog-vet.jpg",
    "spay-and-neuter": "/cat-in-carrier.jpg",
    "pet-diagnostics": "/veterinarian-writing.jpg",
    "grooming": "/dog-in-pool.jpg",
    "microchipping": "/veterinarian-woman-smiling.jpg",
    "pet-wellness-exams": "/veterinarian-woman.jpg"
  };

  const heroImage = SERVICE_IMAGES[slug] || "/vet.jpg";

  return (
    <main>
      <HeroSection
        title={`Expert ${service.title} in Florida`}
        subtitle={service.description}
        image={heroImage}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "Services", href: "/#services" },
              { label: service.title }
            ]}
          />
        }
      />

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us for {service.title}?</h2>
            <div className="space-y-4">
              {[
                "State-of-the-art facilities and equipment",
                "Experienced and compassionate veterinary staff",
                "Stress-free environment for your pets",
                "Affordable and transparent pricing",
                "Comprehensive after-care support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] shadow-xl">
            <Image
              src="/clinic-interior.jpg"
              alt={`${service.title} service`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Available in These Locations</h2>
          <LocationGrid locations={LOCATIONS} currentService={service.slug} />
        </div>
      </section>

      <CTASection
        title={`Schedule ${service.title} Today`}
        subtitle="Expert care for your pet is just an appointment away."
      />
    </main>
  );
}
