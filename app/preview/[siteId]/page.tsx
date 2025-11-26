import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { BlockRenderer } from "@/components/builder/BlockRenderer"

export default async function PreviewPage({ params }: { params: Promise<{ siteId: string }> }) {
    const { siteId } = await params

    const site = await prisma.site.findUnique({
        where: { id: siteId },
    })

    if (!site) {
        notFound()
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks = (site.blocks as any) || []

    return (
        <div className="min-h-screen bg-background">
            {blocks.map((block: any) => (
                <BlockRenderer key={block.id} block={block} />
            ))}
        </div>
    )
}
