import { auth } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session || !session.user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = await params

    try {
        const site = await prisma.site.findUnique({
            where: {
                id,
                ownerId: session.user.id,
            },
        })

        if (!site) {
            return new NextResponse("Site not found", { status: 404 })
        }

        const updatedSite = await prisma.site.update({
            where: {
                id,
            },
            data: {
                status: "PUBLISHED",
                publishedUrl: `https://${site.slug}.portaforge.com`, // Example URL structure
            },
        })

        return NextResponse.json(updatedSite)
    } catch (error) {
        console.error("[SITE_PUBLISH]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
