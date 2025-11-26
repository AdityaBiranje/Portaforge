import { Block } from "@/types/builder"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { AboutBlock } from "@/components/blocks/AboutBlock"
import { ContactBlock } from "@/components/blocks/ContactBlock"
import { ProjectsBlock } from "@/components/blocks/ProjectsBlock"
import { SkillsBlock } from "@/components/blocks/SkillsBlock"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: Record<string, any> = {
    hero: HeroBlock,
    about: AboutBlock,
    contact: ContactBlock,
    projects: ProjectsBlock,
    skills: SkillsBlock,
    // Add other blocks here
}

export function BlockRenderer({ block }: { block: Block }) {
    const Component = blockComponents[block.type]

    if (!Component) {
        return <div className="p-4 border border-destructive text-destructive">Unknown block type: {block.type}</div>
    }

    return (
        <div className="relative group">
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary pointer-events-none z-10 transition-colors" />
            <Component {...block.props} />
        </div>
    )
}
