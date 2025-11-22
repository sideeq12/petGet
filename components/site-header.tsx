"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PawPrint, Phone, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[hsl(222,47%,11%)] shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white rounded-full p-1.5 text-[hsl(222,47%,11%)]">
            <PawPrint className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Sunshine Vet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          <Link href="/services" className="hover:text-[hsl(199,89%,48%)] transition-colors">Services</Link>
          <Link href="/locations" className="hover:text-[hsl(199,89%,48%)] transition-colors">Locations</Link>
          <Link href="/about" className="hover:text-[hsl(199,89%,48%)] transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-[hsl(199,89%,48%)] transition-colors">Pet Health Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:5551234567" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-white hover:text-[hsl(199,89%,48%)] transition-colors">
            <Phone className="h-4 w-4 text-[hsl(199,89%,48%)]" />
            <span>(555) 123-4567</span>
          </a>
          <Button asChild className="hidden md:inline-flex bg-[hsl(199,89%,48%)] hover:bg-[hsl(199,89%,48%)]/90 text-white rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all border-none">
            <Link href="/contact">Book Appointment</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[hsl(222,47%,11%)] border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-white flex items-center gap-2">
                  <div className="bg-white rounded-full p-1.5 text-[hsl(222,47%,11%)]">
                    <PawPrint className="h-4 w-4" />
                  </div>
                  Sunshine Vet
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/services" className="text-lg font-medium hover:text-[hsl(199,89%,48%)] transition-colors">Services</Link>
                <Link href="/locations" className="text-lg font-medium hover:text-[hsl(199,89%,48%)] transition-colors">Locations</Link>
                <Link href="/about" className="text-lg font-medium hover:text-[hsl(199,89%,48%)] transition-colors">About Us</Link>
                <Link href="/blog" className="text-lg font-medium hover:text-[hsl(199,89%,48%)] transition-colors">Pet Health Blog</Link>
                <Link href="/contact" className="text-lg font-medium hover:text-[hsl(199,89%,48%)] transition-colors">Contact</Link>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <a href="tel:5551234567" className="flex items-center gap-2 text-lg font-medium hover:text-[hsl(199,89%,48%)] transition-colors">
                    <Phone className="h-5 w-5" />
                    (555) 123-4567
                  </a>
                </div>
                <Button asChild className="mt-4 bg-[hsl(199,89%,48%)] hover:bg-[hsl(199,89%,48%)]/90 text-white rounded-full w-full font-semibold">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
