import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import prisma from "@/lib/prisma"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

export default async function BlogPage() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" }
    })

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
                        <p className="text-muted-foreground text-lg">
                            Latest news, updates, and tips from the PortaForge team.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`}>
                                <Card className="hover:border-primary transition-colors overflow-hidden">
                                    <div className="md:flex">
                                        {post.image && (
                                            <div className="md:w-1/3 aspect-video md:aspect-auto relative">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1 p-6">
                                            <CardHeader className="p-0 mb-4">
                                                <div className="text-sm text-muted-foreground mb-2">
                                                    {format(new Date(post.createdAt), "MMMM d, yyyy")}
                                                </div>
                                                <CardTitle className="text-2xl">{post.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <CardDescription className="text-base line-clamp-3">
                                                    {post.excerpt}
                                                </CardDescription>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
