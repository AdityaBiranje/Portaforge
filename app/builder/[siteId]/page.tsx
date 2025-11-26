import { Sidebar } from "@/components/builder/Sidebar"
import { Canvas } from "@/components/builder/Canvas"
import { PropertiesPanel } from "@/components/builder/PropertiesPanel"
import { BuilderInitializer } from "@/components/builder/BuilderInitializer"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function BuilderPage({ params }: { params: Promise<{ siteId: string }> }) {
    // In Next.js 15 params is a promise.
    const { siteId } = await params

    const site = await prisma.site.findUnique({
        where: { id: siteId },
    })

    if (!site) {
        notFound()
    }

    // Ensure blocks is typed correctly as Block[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks = (site.blocks as any) || []

    return (
        <>
            <BuilderInitializer blocks={blocks} />
            <Sidebar />
            <Canvas />
            <PropertiesPanel />
        </>
    )
}
