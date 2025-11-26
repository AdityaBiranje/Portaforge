"use client"

import { Palette, Zap, Box, Layout, Share2, Download } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FeatureCard } from "@/components/home/FeatureCard"

const features = [
    {
        title: "Visual Builder",
        description: "Drag and drop blocks to create your perfect layout. Real-time preview on all devices.",
        icon: Layout,
        href: "/dashboard",
    },
    {
        title: "Premium Templates",
        description: "Start with professionally designed templates that stand out from the crowd.",
        icon: Palette,
        href: "/templates",
    },
    {
        title: "3D Elements",
        description: "Add subtle 3D interactions and depth to your site without writing code.",
        icon: Box,
        href: "/features",
    },
    {
        title: "Instant Publish",
        description: "Get a live URL in seconds or connect your own custom domain.",
        icon: Share2,
        href: "/help",
    },
    {
        title: "Export Anywhere",
        description: "Download your site as static HTML/CSS or export a PDF resume.",
        icon: Download,
        href: "/help",
    },
    {
        title: "Blazing Fast",
        description: "Built on Next.js for optimal performance and SEO out of the box.",
        icon: Zap,
        href: "/features",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function Features() {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need</h2>
                    <p className="text-muted-foreground text-lg">
                        Powerful features to help you build, customize, and launch your professional portfolio.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={item} className="h-full">
                            <Link href={feature.href} className="block h-full">
                                <FeatureCard
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
