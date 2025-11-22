import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Syringe, Cat, Stethoscope, Ambulance, Smile, Scissors, Activity, Tag, Heart } from 'lucide-react';

const iconMap: Record<string, any> = {
  Syringe, Cat, Stethoscope, Ambulance, Smile, Scissors, Activity, Tag, Heart
};

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  iconName: string;
  location?: string;
}

export function ServiceCard({ title, description, slug, iconName, location }: ServiceCardProps) {
  const Icon = iconMap[iconName] || Heart;
  const href = location 
    ? `/locations/${location}/services/${slug}`
    : `/services/${slug}`;

  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none bg-white shadow-sm">
        <CardHeader>
          <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center text-sm font-medium text-primary">
            Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
