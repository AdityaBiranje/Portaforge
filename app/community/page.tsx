import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Twitter, MessageSquare, Users } from "lucide-react"

export default function CommunityPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Join the Community</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Connect with other creators, share your work, and help shape the future of PortaForge.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="hover:border-primary transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Github className="w-6 h-6" /> GitHub
                            </CardTitle>
                            <CardDescription>
                                Contribute to the codebase, report bugs, and request features.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" variant="outline" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    Star us on GitHub
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MessageSquare className="w-6 h-6" /> Discord
                            </CardTitle>
                            <CardDescription>
                                Chat with the community, get real-time help, and share your portfolio.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" variant="outline" asChild>
                                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                                    Join Discord Server
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Twitter className="w-6 h-6" /> Twitter
                            </CardTitle>
                            <CardDescription>
                                Follow us for the latest updates, tips, and featured portfolios.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" variant="outline" asChild>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    Follow @PortaForge
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-6 h-6" /> Showcase
                            </CardTitle>
                            <CardDescription>
                                Explore amazing portfolios built by the community.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" variant="outline" asChild>
                                <a href="/showcase">
                                    View Showcase
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}
