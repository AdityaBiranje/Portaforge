"use client"

import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"

const categories = ["All", "Minimal", "Creative", "Photography", "Developer"]

export function TemplateFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get("category") || "All"

    const handleCategoryChange = (category: string) => {
        if (category === "All") {
            router.push("/templates")
        } else {
            router.push(`/templates?category=${category}`)
        }
    }

    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={currentCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category)}
                    className="rounded-full"
                >
                    {category}
                </Button>
            ))}
        </div>
    )
}
