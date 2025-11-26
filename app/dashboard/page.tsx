import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { SiteCard } from "@/components/dashboard/SiteCard"
import prisma from "@/lib/prisma"
import { auth } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user) {
        redirect("/auth/signin")
    }

    const sites = await prisma.site.findMany({
        where: {
            ownerId: session.user.id,
        },
        orderBy: {
            updatedAt: "desc",
        },
    })

    return (
        <div>
            <DashboardHeader />

            {sites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sites.map((site: any) => (
                        <SiteCard key={site.id} site={site} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border-2 border-dashed rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">No sites yet</h3>
                    <p className="text-muted-foreground mb-6">Create your first portfolio to get started.</p>
                </div>
            )}
        </div>
    )
}
