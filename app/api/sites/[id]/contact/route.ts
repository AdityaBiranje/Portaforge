import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { z } from "zod"

const contactSchema = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    message: z.string().min(1),
})

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await req.json()
        const { name, email, message } = contactSchema.parse(body)

        // Verify site exists
        const site = await prisma.site.findUnique({
            where: { id },
        })

        if (!site) {
            return NextResponse.json(
                { message: "Site not found" },
                { status: 404 }
            )
        }

        const newMessage = await prisma.message.create({
            data: {
                siteId: id,
                name,
                email,
                content: message,
            },
        })

        return NextResponse.json(newMessage, { status: 201 })
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        )
    }
}
