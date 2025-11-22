import Link from "next/link";
import { LOCATIONS, SERVICES } from "@/lib/data";
import { PawPrint, Facebook, Instagram, Twitter } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-1.5 text-white">
                <PawPrint className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">Sunshine Vet</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Providing compassionate, top-tier veterinary care across the Sunshine State.
              Your pet's health is our priority.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Top Locations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {LOCATIONS.slice(0, 6).map((city) => (
                <li key={city}>
                  <Link href={`/locations/${city}`} className="hover:text-primary transition-colors">
                    Vet in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block font-medium text-foreground">Emergency Line:</span>
                (555) 123-4567
              </li>
              <li>
                <span className="block font-medium text-foreground">Email:</span>
                care@sunshinevet.com
              </li>
              <li>
                <span className="block font-medium text-foreground">Hours:</span>
                Mon-Fri: 8am - 6pm<br />
                Sat: 9am - 2pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sunshine Vet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
