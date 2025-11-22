import { HeroSection } from "@/components/hero-section";
import { LocationGrid } from "@/components/location-grid";
import { LOCATIONS } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, Heart, Users, Activity, Search, Pill, Apple, Star } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = constructMetadata({
  title: "Veterinary Clinic Locations in Florida | Find a Vet Near You",
  description: "Locate our state-of-the-art veterinary clinics across Florida. From Miami to Orlando, find compassionate pet care and emergency services near you.",
  path: "/locations"
});

export default function LocationsIndexPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        title="World-Class Pet Care, Right in Your Neighborhood"
        subtitle="We are proud to serve pet owners across the entire state of Florida. Find your nearest clinic below and experience the difference."
        image="/veterinarian-clinic-florida.jpg"
      />

      {/* Value Proposition Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">State-of-the-Art Facilities</h3>
              <p className="text-slate-600 leading-relaxed">
                Equipped with the latest diagnostic and surgical technology to ensure your pet receives the best possible care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Compassionate Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Our veterinarians and staff treat every patient like their own, providing gentle and personalized attention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Extended Hours</h3>
              <p className="text-slate-600 leading-relaxed">
                We know pet emergencies don't watch the clock. Many of our locations offer evening and weekend appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Florida Vet Care Advantage</h2>
            <p className="text-slate-600 text-lg">
              When you choose one of our clinics, you get the strength of a statewide network with the personalized feel of a local practice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/veterinarian-writing.jpg"
                alt="Veterinarian updating records"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Shared Medical Records</h3>
                  <p className="text-slate-600">
                    Moving or traveling? Your pet's history travels with them. Any of our clinics can access your pet's complete medical records instantly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Consistent Care Standards</h3>
                  <p className="text-slate-600">
                    Every clinic in our network adheres to the same rigorous medical protocols and high standards of service.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Access to Specialists</h3>
                  <p className="text-slate-600">
                    Need advanced care? We have a network of internal specialists for complex cases, from cardiology to orthopedics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available Everywhere */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Care at Every Location</h2>
            <p className="text-slate-600 text-lg">
              No matter which clinic you visit, you can count on these core services being available.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Wellness Exams", icon: Heart },
              { name: "Vaccinations", icon: Shield },
              { name: "Dental Care", icon: Star },
              { name: "Surgery", icon: Activity },
              { name: "Diagnostics", icon: Search },
              { name: "Microchipping", icon: MapPin },
              { name: "Pharmacy", icon: Pill },
              { name: "Nutrition", icon: Apple }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-900">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-900">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team at the Orlando clinic is simply amazing. They saved my dog's life when he had bloat. I can't thank them enough.",
                author: "Sarah M.",
                location: "Orlando, FL",
                rating: 5
              },
              {
                quote: "I love that I can go to the Miami location or the Tampa one when I visit family, and they all know my cat's history.",
                author: "James P.",
                location: "Miami, FL",
                rating: 5
              },
              {
                quote: "Professional, clean, and so caring. The best veterinary experience I've had in 20 years of owning pets.",
                author: "Emily R.",
                location: "Jacksonville, FL",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Do I need an appointment?",
                a: "We recommend appointments to ensure you're seen promptly, but we do accept walk-ins for urgent cases. You can easily book online for any of our locations."
              },
              {
                q: "Do you treat exotic pets?",
                a: "Most of our locations treat dogs and cats. Select locations have specialists for birds, reptiles, and small mammals. Please check the specific location page for details."
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we accept CareCredit and Scratchpay at all our locations to help manage the cost of your pet's care."
              },
              {
                q: "What if I have an emergency after hours?",
                a: "We have several 24/7 emergency hospitals in our network. If your local clinic is closed, their phone line will direct you to the nearest emergency facility."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border border-slate-200 px-6">
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

      {/* Locations Grid Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Locations</h2>
            <p className="text-slate-600">Select a clinic to view details and book an appointment.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            <span>{LOCATIONS.length} Locations in Florida</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <LocationGrid locations={LOCATIONS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visit Us?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Book your appointment online today. New patients are always welcome at all our locations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all">
            Book an Appointment Now
          </Button>
        </div>
      </section>
    </main>
  );
}
