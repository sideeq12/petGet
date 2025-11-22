import { HeroSection } from "@/components/hero-section";
import { constructMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = constructMetadata({
    title: "Contact Us | Book an Appointment",
    description: "Get in touch with our veterinary team. Book an appointment, ask a question, or find our clinic locations.",
    path: "/contact"
});

export default function ContactPage() {
    return (
        <main>
            <HeroSection
                title="Contact Us"
                subtitle="We're here to help. Reach out to us for appointments, emergencies, or general inquiries."
                image="/veterinarian-hugging-dog.jpg"
            />

            <section className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                                    <Input id="name" placeholder="John Doe" className="rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="pet-name" className="text-sm font-medium text-slate-700">Pet's Name</label>
                                    <Input id="pet-name" placeholder="Max" className="rounded-xl" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">How can we help?</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your pet's needs or your preferred appointment time..."
                                    className="min-h-[150px] rounded-xl"
                                />
                            </div>

                            <Button size="lg" className="w-full rounded-full font-semibold text-lg h-12">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                Have a question or need to schedule a visit? Our team is ready to assist you and your furry friends.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                                    <p className="text-slate-600 mb-2">Mon-Fri from 8am to 6pm.</p>
                                    <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">(555) 123-4567</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                    <p className="text-slate-600 mb-2">Our friendly team is here to help.</p>
                                    <a href="mailto:care@sunshinevet.com" className="text-primary font-semibold hover:underline">care@sunshinevet.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Main Office</h3>
                                    <p className="text-slate-600 mb-2">Come say hello at our office headquarters.</p>
                                    <p className="text-slate-900 font-medium">123 Vet Street, Orlando, FL 32801</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Hours</h3>
                                    <div className="space-y-1 text-slate-600">
                                        <p><span className="font-medium text-slate-900 w-24 inline-block">Mon-Fri:</span> 8:00 AM - 6:00 PM</p>
                                        <p><span className="font-medium text-slate-900 w-24 inline-block">Sat:</span> 9:00 AM - 4:00 PM</p>
                                        <p><span className="font-medium text-slate-900 w-24 inline-block">Sun:</span> Closed (Emergency Only)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
