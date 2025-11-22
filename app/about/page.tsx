import { HeroSection } from "@/components/hero-section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS, VALUES, COMPANY_NAME } from "@/lib/data";
import { Heart, Award, Users, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us",
  description: "Learn about Florida Vet Care's mission, our experienced team of veterinarians, and our commitment to providing the best care for your pets.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Caring for Florida's Furry Family Members"
        subtitle="We are a network of compassionate veterinary clinics dedicated to providing top-tier medical care with a warm, local touch. From Miami to Tallahassee, we're here for you."
        image="/veterinarian-hugging-dog.jpg"
      />

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">15+</h3>
              <p className="text-primary-foreground/80 font-medium">Years of Service</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">30+</h3>
              <p className="text-primary-foreground/80 font-medium">Locations</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">100+</h3>
              <p className="text-primary-foreground/80 font-medium">Veterinarians</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">24/7</h3>
              <p className="text-primary-foreground/80 font-medium">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 sticky top-24">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                More than just a clinic. <br />
                We're your <span className="text-primary">partners in health.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2010, Florida Vet Care started with a single clinic in Orlando and a simple mission: to treat every pet with the same love and care we'd give our own.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "State-of-the-art diagnostic technology",
                  "Fear-free certified staff",
                  "Comprehensive wellness plans",
                  "Community outreach programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid gap-6">
              <div className="bg-muted/30 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality veterinary care that enhances the bond between people and their pets, ensuring a lifetime of health and happiness.
                </p>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/modern-vet-clinic-interior.jpg"
                  alt="Modern clinic interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-secondary/20 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-secondary-foreground" />
                  Our Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We promise to always listen, to explain every option clearly, and to never recommend a treatment that isn't in your pet's best interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              These principles guide every interaction we have with you and your pets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => {
              const Icon = {
                Heart,
                Award,
                Users,
                MessageCircle
              }[value.icon] || Heart;

              return (
                <div key={index} className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-muted-foreground text-lg">
                Led by experienced veterinarians who are passionate about animal health.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-muted">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Family?
          </h2>
          <p className="text-primary-foreground/90 text-xl max-w-2xl mx-auto mb-10">
            Experience the difference of compassionate, local care. Book your first wellness exam today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-lg h-12">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
