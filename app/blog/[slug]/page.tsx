import { HeroSection } from "@/components/hero-section";
import { BLOG_POSTS } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import { notFound } from 'next/navigation';
import Image from "next/image";
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} - Florida Vet Care Blog`,
    description: post.excerpt,
    path: `/blog/${params.slug}`
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="bg-secondary/30 pt-12 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]} 
          />
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-6 shadow-sm">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-12 -mt-20">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
            <p className="lead text-xl text-foreground/80 font-medium mb-8">
              {post.excerpt}
            </p>
            
            {/* Placeholder content for the blog post */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2>Understanding the Basics</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 my-8">
              <h3 className="text-primary mt-0">Pro Tip</h3>
              <p className="mb-0">
                Always consult with your veterinarian before making significant changes to your pet's diet or exercise routine.
              </p>
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Regular check-ups are essential for prevention</li>
              <li>Keep vaccinations up to date</li>
              <li>Monitor your pet's behavior for any changes</li>
              <li>Maintain a healthy diet and exercise routine</li>
            </ul>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t flex justify-between items-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </main>
  );
}
