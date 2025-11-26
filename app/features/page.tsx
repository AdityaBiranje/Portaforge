import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Box, Share2, Download, Zap, Code, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
    const features = [
        {
            title: "Visual Builder",
            description: "Our drag-and-drop builder makes it easy to create stunning layouts without writing any code. Choose from a variety of pre-built blocks or create your own.",
            icon: Layout,
            href: "/dashboard"
        },
        {
            title: "Premium Templates",
            description: "Get a head start with our professionally designed templates. Whether you're a developer, designer, or photographer, we have a template for you.",
            icon: Palette,
            href: "/templates"
        },
        {
            title: "3D Elements",
            description: "Impress your visitors with interactive 3D elements. Our builder integrates seamlessly with Three.js to bring your site to life.",
            icon: Box,
            href: "/dashboard"
        },
        {
            title: "Instant Publish",
            description: "Publish your site with a single click. We handle the hosting and SSL certificates so you can focus on creating.",
            icon: Share2,
            href: "/dashboard"
        },
        {
            title: "Export Anywhere",
            description: "Don't want to be locked in? You can export your site as static HTML/CSS or a PDF resume at any time.",
            icon: Download,
            href: "/help"
        },
        {
            title: "Blazing Fast",
            description: "PortaForge sites are built on Next.js, ensuring top-tier performance and SEO rankings right out of the box.",
            icon: Zap,
            href: "/templates"
        },
        {
            title: "Clean Code",
            description: "We generate clean, semantic code that is easy to read and maintain. No spaghetti code here.",
            icon: Code,
            href: "/help"
        },
        {
            title: "Mobile Responsive",
            description: "All sites created with PortaForge are fully responsive and look great on any device, from mobile phones to desktops.",
            icon: Smartphone,
            href: "/templates"
        },
        {
            title: "Custom Domains",
            description: "Connect your own custom domain to give your portfolio a professional touch.",
            icon: Globe,
            href: "/help"
        }
    ]

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Features</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover the tools that make PortaForge the best place to build your portfolio.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <Link key={i} href={feature.href} className="block h-full">
                            <Card className="hover:border-primary transition-colors h-full hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
