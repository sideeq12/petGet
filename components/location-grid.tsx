"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface LocationGridProps {
    locations: string[];
    currentService?: string;
}

export function LocationGrid({ locations, currentService }: LocationGridProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredLocations = locations.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search for a city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 rounded-full border-slate-200 shadow-sm focus-visible:ring-primary"
                />
            </div>

            {/* Locations Grid */}
            {filteredLocations.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredLocations.map((city) => {
                        const href = currentService
                            ? `/locations/${city}/services/${currentService}`
                            : `/locations/${city}`;

                        return (
                            <Link
                                key={city}
                                href={href}
                                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-primary/50 hover:shadow-sm transition-all group"
                            >
                                <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-slate-900">{city}</span>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-slate-500">No locations found matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
}
