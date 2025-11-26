import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
    title: string
    description: string
    tags: string[]
    link?: string
    github?: string
}

interface ProjectsBlockProps {
    title?: string
    subtitle?: string
    projects?: Project[]
}

export function ProjectsBlock({ title, subtitle, projects, backgroundColor, textColor }: ProjectsBlockProps & { backgroundColor?: string, textColor?: string }) {
    // Default projects if none provided
    const displayProjects = projects || [
        {
            title: "Project Alpha",
            description: "A revolutionary AI platform that changes everything.",
            tags: ["Next.js", "AI", "TypeScript"],
            link: "#",
            github: "#"
        },
        {
            title: "Beta App",
            description: "Mobile-first social network for developers.",
            tags: ["React Native", "Firebase"],
            link: "#"
        },
        {
            title: "Gamma Tools",
            description: "Open source utilities for modern web development.",
            tags: ["Rust", "WASM"],
            github: "#"
        }
    ]

    return (
        <section
            className="py-20 px-6"
            style={{
                backgroundColor: backgroundColor || "transparent",
                color: textColor || "inherit"
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{title || "Featured Projects"}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto" style={{ color: textColor ? `${textColor}cc` : undefined }}>
                        {subtitle || "Here are some of the things I've built."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, i) => (
                        <Card key={i} className="flex flex-col h-full hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm border-border/50">
                            <CardHeader>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription style={{ color: textColor ? `${textColor}99` : undefined }}>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-secondary/50">{tag}</Badge>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-auto pt-4 border-t border-border/20">
                                    {project.link && (
                                        <Button variant="outline" size="sm" asChild className="flex-1">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button variant="ghost" size="sm" asChild className="flex-1">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" /> Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
