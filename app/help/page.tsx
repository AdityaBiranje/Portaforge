import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import prisma from "@/lib/prisma"
import { HelpContent } from "@/components/help/HelpContent"

export default async function HelpPage() {
    const articles = await prisma.helpArticle.findMany({
        orderBy: { category: "asc" }
    })

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <HelpContent articles={articles} />
            </main>
            <Footer />
        </div>
    )
}
