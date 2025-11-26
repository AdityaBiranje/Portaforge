"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface HelpArticle {
    id: string
    title: string
    slug: string
    category: string
    content: string
}

interface HelpContentProps {
    articles: HelpArticle[]
}

export function HelpContent({ articles }: HelpContentProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Group articles by category
    const categories = filteredArticles.reduce((acc, article) => {
        if (!acc[article.category]) {
            acc[article.category] = []
        }
        acc[article.category].push(article)
        return acc
    }, {} as Record<string, typeof articles>)

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Help Center</h1>
                <p className="text-muted-foreground text-lg mb-8">
                    Find answers to your questions and learn how to get the most out of PortaForge.
                </p>
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search for help..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid gap-8">
                {Object.keys(categories).length === 0 ? (
                    <div className="text-center text-muted-foreground py-12">
                        No results found for "{searchQuery}"
                    </div>
                ) : (
                    Object.entries(categories).map(([category, items]) => (
                        <Card key={category}>
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {items.map((article) => (
                                        <AccordionItem key={article.id} value={article.id}>
                                            <AccordionTrigger className="text-left">{article.title}</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground whitespace-pre-line">
                                                {article.content}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}
