"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

interface Template {
    id: string
    name: string
    category: string
    thumbnail: string
}

export function TemplateCard({ template }: { template: Template }) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleUseTemplate = async () => {
        setLoading(true)
        try {
            // Generate a random slug for demo purposes
            // In a real app, we'd ask the user for a name/slug first via a modal
            const randomSlug = `site-${Math.floor(Math.random() * 10000)}`

            const res = await fetch("/api/sites/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${template.name} Copy`,
                    slug: randomSlug,
                    templateId: template.id
                })
            })

            if (res.ok) {
                const site = await res.json()
                toast.success("Site created successfully!")
                router.push(`/builder/${site.id}`)
            } else {
                const data = await res.json()
                toast.error(data.message || "Failed to create site")
            }
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card className="overflow-hidden group hover:border-primary transition-colors">
            <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="secondary">{template.category}</Badge>
                </div>
            </CardHeader>
            <CardFooter>
                <Button className="w-full" onClick={handleUseTemplate} disabled={loading}>
                    {loading ? "Creating..." : "Use Template"}
                </Button>
            </CardFooter>
        </Card>
    )
}
