import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await prisma.post.findUnique({
        where: { slug }
    })

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <article className="max-w-3xl mx-auto">
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-8 pl-0 hover:pl-0 hover:bg-transparent hover:text-primary">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Button>
                    </Link>

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
                        <div className="text-muted-foreground">
                            Published on {format(new Date(post.createdAt), "MMMM d, yyyy")}
                        </div>
                    </header>

                    {post.image && (
                        <div className="aspect-video relative rounded-lg overflow-hidden mb-12 border border-border">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}

                    <div className="prose prose-invert max-w-none">
                        {post.content.split('\n').map((paragraph, i) => (
                            <p key={i} className="mb-4 text-lg leading-relaxed text-muted-foreground">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
