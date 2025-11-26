import { auth } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import { z } from "zod"

const subscriptionSchema = z.object({
    plan: z.enum(["HOBBY", "PRO", "TEAM"]),
})

export async function POST(req: Request) {
    try {
        const session = await auth()

        if (!session?.user?.id) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const json = await req.json()
        const body = subscriptionSchema.parse(json)

        // In a real app, this is where you'd handle Stripe checkout
        // For this demo, we'll just update the database immediately

        const user = await prisma.user.update({
            where: {
                id: session.user.id,
            },
            data: {
                plan: body.plan,
            },
        })

        return NextResponse.json(user)
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify(error.issues), { status: 422 })
        }

        return new NextResponse(null, { status: 500 })
    }
}
