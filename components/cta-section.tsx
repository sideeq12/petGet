"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryAction?: string;
  secondaryAction?: string;
}

export function CTASection({
  title = "Ready to Give Your Pet the Best Care?",
  subtitle = "Join thousands of happy pet owners in Florida who trust us with their furry family members.",
  primaryAction = "Book Appointment",
  secondaryAction = "Call Us Now"
}: CTASectionProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">{primaryAction}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all">
              <a href="tel:5551234567">
                <Phone className="mr-2 h-5 w-5" />
                {secondaryAction}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
