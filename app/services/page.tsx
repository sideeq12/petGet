import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { SERVICES } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import Image from "next/image";
import { Stethoscope, Microscope, Heart, Star, CheckCircle2 } from 'lucide-react';
import { CTASection } from "@/components/cta-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = constructMetadata({
  title: "Our Veterinary Services",
  description: "Comprehensive veterinary care including vaccinations, surgery, dental care, and emergency services for pets in Florida.",
  path: "/services"
});

export default function ServicesIndexPage() {
  return (
    <main>
      <HeroSection
        title="World-Class Veterinary Services"
        subtitle="From routine check-ups to complex surgeries, we offer a full range of medical services for your pets."
        image="/veterinarian-writing.jpg"
      />

      <section className="py-20 container mx-auto px-4">
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

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Approach to Veterinary Care</h2>
              <p className="text-lg text-slate-600">
                We believe in a proactive approach to pet health. By focusing on preventative care and early detection, we help your pets live longer, happier lives.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized wellness plans for every life stage",
                  "Fear-free handling techniques to reduce stress",
                  "Comprehensive diagnostics for accurate treatment",
                  "Transparent communication and education"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/veterinarian-hugging-dog.jpg"
                  alt="Veterinarian examining a dog"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Advanced Medical Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Radiology",
                desc: "High-resolution X-rays for quick and accurate diagnosis of internal issues.",
                icon: <Stethoscope className="w-8 h-8 text-primary" />
              },
              {
                title: "In-House Laboratory",
                desc: "Complete blood work and diagnostics with results in minutes, not days.",
                icon: <Microscope className="w-8 h-8 text-primary" />
              },
              {
                title: "Surgical Suite",
                desc: "State-of-the-art monitoring equipment for the safest possible procedures.",
                icon: <Heart className="w-8 h-8 text-primary" />
              }
            ].map((tech, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{tech.title}</h3>
                <p className="text-slate-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Trusted by Florida Pet Parents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The level of care here is unmatched. They saved my dog's life during an emergency.",
                author: "Robert T.",
                location: "Miami"
              },
              {
                quote: "Finally a vet clinic that listens. They explained everything clearly and gave me options.",
                author: "Sarah L.",
                location: "Orlando"
              },
              {
                quote: "Clean, modern, and the staff is just wonderful. My cat actually likes going to the vet now!",
                author: "Jennifer P.",
                location: "Tampa"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "How often should my pet have a check-up?",
                a: "We recommend annual wellness exams for adult pets and bi-annual exams for seniors (7+ years). Puppies and kittens need more frequent visits for vaccinations."
              },
              {
                q: "Do you accept pet insurance?",
                a: "Yes, we work with all major pet insurance providers. We can help you with the necessary documentation for your claims."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, cash, and financing options like CareCredit and Scratchpay."
              },
              {
                q: "Do I need to prepare for my pet's surgery?",
                a: "Yes, typically we require fasting the night before. We will provide you with specific pre-surgical instructions when you book the procedure."
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
        title="Give Your Pet the Best Care"
        subtitle="Schedule an appointment today at one of our convenient Florida locations."
      />
    </main>
  );
}
