import { HeroSection } from "@/components/hero-section";
import { BLOG_POSTS } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";

export const metadata = constructMetadata({
  title: "Pet Care Blog - Florida Vet Care",
  description: "Expert advice, tips, and news for Florida pet owners. Learn about pet health, safety, and wellness from our veterinary team.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main>
      <HeroSection 
        title="Pet Care Blog"
        subtitle="Expert advice, tips, and news for Florida pet owners. Stay informed about your pet's health."
        image="/veterinarian-writing.jpg"
      />

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-primary font-medium text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection 
        title="Have Questions About Your Pet's Health?"
        subtitle="Our experienced team is here to help. Schedule a consultation today."
      />
    </main>
  );
}
