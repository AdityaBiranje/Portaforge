import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Manage your sites and account settings.</p>
            </div>
            <Link href="/templates">
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Site
                </Button>
            </Link>
        </div>
    )
}
