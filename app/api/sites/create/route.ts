import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { auth } from "@/app/api/auth/[...nextauth]/route"
import { z } from "zod"

const createSiteSchema = z.object({
    name: z.string().min(1),
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with dashes"),
    templateId: z.string().optional(),
})

export async function POST(req: Request) {
    try {
        const session = await auth()
        if (!session?.user?.id) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const body = await req.json()
        const { name, slug, templateId } = createSiteSchema.parse(body)

        // Check if slug is taken by this user
        const existingSite = await prisma.site.findUnique({
            where: {
                ownerId_slug: {
                    ownerId: session.user.id,
                    slug,
                },
            },
        })

        if (existingSite) {
            return NextResponse.json(
                { message: "Site with this slug already exists" },
                { status: 400 }
            )
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const initialData: any = {
            ownerId: session.user.id,
            slug,
            title: name,
            theme: {},
            blocks: [],
        }

        if (templateId) {
            const template = await prisma.template.findUnique({
                where: { id: templateId },
            })

            if (template) {
                initialData.theme = template.theme
                initialData.blocks = template.blocks
            }
        }

        const site = await prisma.site.create({
            data: initialData,
        })

        return NextResponse.json(site, { status: 201 })
    } catch (error) {
        console.error("Create site error:", error)
        if (error instanceof z.ZodError) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return NextResponse.json({ message: "Invalid input", errors: (error as any).errors }, { status: 400 })
        }
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        )
    }
}
