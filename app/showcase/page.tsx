import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ShowcasePage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Made with PortaForge
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Explore stunning portfolios built by our community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Mock Showcase Items */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/30">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="secondary" asChild>
                                        <Link href="#">View Site</Link>
                                    </Button>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t border-border">
                                    <h3 className="font-semibold text-sm">Portfolio {item}</h3>
                                    <p className="text-xs text-muted-foreground">by User {item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
