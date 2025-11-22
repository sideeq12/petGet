import { MetadataRoute } from 'next'
import { LOCATIONS, SERVICES, BLOG_POSTS } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sunshinevet.com'

    // Static pages
    const routes = [
        '',
        '/about',
        '/services',
        '/locations',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }))

    // Dynamic Location Pages
    const locationRoutes = LOCATIONS.map((city) => ({
        url: `${baseUrl}/locations/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic Service Pages
    const serviceRoutes = SERVICES.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic Blog Posts
    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...locationRoutes, ...serviceRoutes, ...blogRoutes]
}
