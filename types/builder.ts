export type BlockType = "hero" | "about" | "projects" | "skills" | "contact" | "footer"

export interface Block {
    id: string
    type: BlockType
    props: Record<string, any>
    style?: Record<string, any>
}

export interface SiteData {
    id: string
    title: string
    theme: any
    blocks: Block[]
}
