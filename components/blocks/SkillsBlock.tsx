import { Badge } from "@/components/ui/badge"

interface SkillsBlockProps {
    title?: string
    subtitle?: string
    skills?: string[]
}

export function SkillsBlock({ title, subtitle, skills }: SkillsBlockProps) {
    // Default skills if none provided
    const displaySkills = skills || [
        "React", "Next.js", "TypeScript", "Node.js",
        "Tailwind CSS", "PostgreSQL", "GraphQL", "Docker",
        "AWS", "Git", "Figma", "UI/UX Design"
    ]

    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{title || "Skills & Technologies"}</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {subtitle || "My technical toolbox and areas of expertise."}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    {displaySkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-lg py-2 px-4">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    )
}
