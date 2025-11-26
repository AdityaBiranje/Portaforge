import { BlockRenderer } from "@/components/builder/BlockRenderer"
import { Block } from "@/types/builder"
import { notFound } from "next/navigation"

// Mock data fetcher
async function getSiteData(username: string, slug: string) {
    // In a real app, this would fetch from DB
    if (username === "aditya" && slug === "portfolio") {
        return {
            title: "Aditya's Portfolio",
            blocks: [
                {
                    id: "hero-1",
                    type: "hero",
                    props: {
                        title: "Hello, I'm Aditya",
                        subtitle: "Full Stack Developer & AI Enthusiast",
                        ctaText: "View My Work",
                    },
                },
                {
                    id: "about-1",
                    type: "about",
                    props: {
                        heading: "About Me",
                        content: "I build scalable web applications and explore the frontiers of AI.",
                    },
                },
            ] as Block[],
        }
    }
    return null
}

export default async function PublicSitePage({
    params,
}: {
    params: Promise<{ username: string; slug: string }>
}) {
    const { username, slug } = await params
    const site = await getSiteData(username, slug)

    if (!site) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {site.blocks.map((block) => (
                <BlockRenderer key={block.id} block={block} />
            ))}
        </main>
    )
}
