"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Monitor, Smartphone, Tablet, Save, Download, Eye, Undo, Redo } from "lucide-react"
import Link from "next/link"
import { useBuilderStore } from "@/store/useBuilderStore"

import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function BuilderHeader() {
    const { undo, redo } = useBuilderStore.temporal.getState()
    const { viewMode, setViewMode } = useBuilderStore()
    const router = useRouter()

    const handlePublish = async () => {
        const path = window.location.pathname
        const siteId = path.split("/").pop()
        if (!siteId) return

        try {
            const response = await fetch(`/api/sites/${siteId}/publish`, {
                method: "PUT",
            })

            if (!response.ok) {
                throw new Error("Failed to publish")
            }

            const site = await response.json()
            toast.success("Site published successfully!", {
                description: `Your site is live at ${site.publishedUrl}`,
            })
        } catch (error) {
            toast.error("Something went wrong", {
                description: "Failed to publish site. Please try again.",
            })
        }
    }

    return (
        <header className="h-14 border-b border-border bg-background flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <Link href="/dashboard">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                </Link>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => undo()}>
                        <Undo className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => redo()}>
                        <Redo className="w-4 h-4" />
                    </Button>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-sm">My Portfolio</span>
                    <span className="text-xs text-muted-foreground">Draft - Last saved just now</span>
                </div>
            </div>

            <div className="flex items-center bg-muted/50 rounded-lg p-1 gap-1">
                <Button
                    variant={viewMode === "desktop" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("desktop")}
                >
                    <Monitor className="w-4 h-4" />
                </Button>
                <Button
                    variant={viewMode === "tablet" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("tablet")}
                >
                    <Tablet className="w-4 h-4" />
                </Button>
                <Button
                    variant={viewMode === "mobile" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("mobile")}
                >
                    <Smartphone className="w-4 h-4" />
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => {
                    const path = window.location.pathname
                    const siteId = path.split("/").pop()
                    if (siteId) {
                        window.open(`/preview/${siteId}`, "_blank")
                    }
                }}>
                    <Eye className="w-4 h-4 mr-2" /> Preview
                </Button>
                <Button size="sm" onClick={handlePublish}>
                    <Save className="w-4 h-4 mr-2" /> Publish
                </Button>
            </div>
        </header>
    )
}
