"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  location?: string;
  image?: string;
  breadcrumbs?: ReactNode;
}

export function HeroSection({ title, subtitle, location, image, breadcrumbs }: HeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image || "/vet.jpg"}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Solid Dark Blue Overlay - NO GRADIENTS */}
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        {breadcrumbs && (
          <div className="mb-6 flex justify-center">
            {breadcrumbs}
          </div>
        )}

        {location && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6 border border-white/20"
          >
            <MapPin className="h-4 w-4" />
            Serving {location}, FL
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-slate-900 rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all font-semibold">
            <Link href="/contact">Book Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-transparent hover:bg-white/10 text-white border-white">
            <Link href="/services">View Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
