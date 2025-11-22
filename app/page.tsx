import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { LocationGrid } from "@/components/location-grid";
import { SERVICES, LOCATIONS, BLOG_POSTS } from "@/lib/data";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: "Top Rated Veterinary Care in Florida",
  description: "Compassionate, professional veterinary services across Florida. From vaccinations to emergency care, we treat your pets like family.",
  path: "/"
});

export default function HomePage() {
  const jsonLd = generateOrganizationSchema();

  return (
    <main>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title="Expert Veterinary Care Across Florida"
        subtitle="Compassionate care for your furry family members. Top-rated veterinarians serving Miami, Orlando, Tampa, and beyond."
        image="/vet.jpg"
      />

      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Veterinary Services</h2>
          <p className="text-muted-foreground text-lg">Comprehensive care tailored to your pet's unique needs at every stage of life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              slug={service.slug}
              iconName={service.icon}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Pet Care Tips</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay informed with the latest advice from our veterinary experts.
              </p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>



      <CTASection />
    </main>
  );
}
