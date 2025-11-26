"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Layout, Type, Image as ImageIcon, Box, Layers } from "lucide-react"
import { useBuilderStore } from "@/store/useBuilderStore"
import { v4 as uuidv4 } from "uuid"

const sections = [
    { id: "hero", label: "Hero", icon: Layout, defaultProps: { title: "Welcome", subtitle: "Start your journey", ctaText: "Get Started", ctaLink: "#contact" } },
    { id: "about", label: "About", icon: Type, defaultProps: { heading: "About Me", content: "I am a passionate developer..." } },
    { id: "projects", label: "Projects", icon: Box, defaultProps: { title: "Featured Projects", subtitle: "Check out my latest work" } },
    { id: "skills", label: "Skills", icon: Layers, defaultProps: { title: "My Skills", subtitle: "Technologies I work with" } },
    { id: "contact", label: "Contact", icon: ImageIcon, defaultProps: { title: "Get in Touch", subtitle: "We'd love to hear from you", email: "hello@example.com", buttonText: "Send Message" } },
]

export function Sidebar() {
    const { addBlock } = useBuilderStore()

    const handleAddBlock = (section: typeof sections[0]) => {
        addBlock({
            id: uuidv4(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            type: section.id as any,
            props: section.defaultProps,
        })
    }

    return (
        <div className="w-64 border-r border-border bg-muted/30 flex flex-col h-full">
            <div className="p-4 border-b border-border">
                <h2 className="font-semibold text-sm">Sections</h2>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-2">
                    {sections.map((section) => (
                        <Button
                            key={section.id}
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => handleAddBlock(section)}
                        >
                            <section.icon className="w-4 h-4 mr-2" />
                            {section.label}
                        </Button>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
