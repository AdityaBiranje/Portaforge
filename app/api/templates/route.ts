import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const category = searchParams.get("category")

        const where = category && category !== "All" ? { category } : {}

        const templates = await prisma.template.findMany({
            where,
            orderBy: { createdAt: "desc" },
        })

        return NextResponse.json(templates)
    } catch (error) {
        console.error("Failed to fetch templates:", error)
        return NextResponse.json(
            { message: "Failed to fetch templates" },
            { status: 500 }
        )
    }
}
