"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TemplateCard } from "@/components/templates/TemplateCard"
import { TemplateFilters } from "@/components/templates/TemplateFilters"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface Template {
    id: string
    name: string
    category: string
    thumbnail: string
}

import { Suspense } from "react"

function TemplatesContent() {
    const [templates, setTemplates] = useState<Template[]>([])
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams()
    const category = searchParams.get("category") || "All"

    useEffect(() => {
        const fetchTemplates = async () => {
            setLoading(true)
            try {
                const query = category !== "All" ? `?category=${category}` : ""
                const res = await fetch(`/api/templates${query}`)
                if (res.ok) {
                    const data = await res.json()
                    setTemplates(data)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchTemplates()
    }, [category])

    return (
        <div className="container mx-auto px-6 pt-32 pb-20 flex-1">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Choose a Template</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Start with a professionally designed template and customize it to fit your brand.
                    All templates are fully responsive and SEO optimized.
                </p>
            </div>

            <TemplateFilters />

            {loading ? (
                <div className="text-center py-20">Loading templates...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template) => (
                        <TemplateCard key={template.id} template={template} />
                    ))}
                    {templates.length === 0 && (
                        <div className="col-span-full text-center py-20 text-muted-foreground">
                            No templates found for this category.
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default function TemplatesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <Suspense fallback={<div className="container mx-auto px-6 pt-32 text-center">Loading...</div>}>
                <TemplatesContent />
            </Suspense>
            <Footer />
        </main>
    )
}
