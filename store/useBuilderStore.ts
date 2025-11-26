import { create } from "zustand"
import { Block } from "@/types/builder"
import { temporal } from "zundo"

interface BuilderState {
    blocks: Block[]
    selectedBlockId: string | null
    addBlock: (block: Block) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateBlock: (id: string, props: any) => void
    removeBlock: (id: string) => void
    reorderBlocks: (startIndex: number, endIndex: number) => void
    selectBlock: (id: string | null) => void
    setBlocks: (blocks: Block[]) => void
    viewMode: "desktop" | "tablet" | "mobile"
    setViewMode: (mode: "desktop" | "tablet" | "mobile") => void
}

interface BuilderStore extends BuilderState {
    temporal: {
        undo: () => void
        redo: () => void
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pastStates: any[]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        futureStates: any[]
    }
}

export const useBuilderStore = create<BuilderState>()(
    temporal(
        (set) => ({
            blocks: [],
            selectedBlockId: null,
            viewMode: "desktop",
            addBlock: (block) => set((state) => ({ blocks: [...state.blocks, block], selectedBlockId: block.id })),
            updateBlock: (id, props) =>
                set((state) => ({
                    blocks: state.blocks.map((b) => (b.id === id ? { ...b, props: { ...b.props, ...props } } : b)),
                })),
            removeBlock: (id) => set((state) => ({ blocks: state.blocks.filter((b) => b.id !== id), selectedBlockId: null })),
            reorderBlocks: (startIndex, endIndex) =>
                set((state) => {
                    const result = Array.from(state.blocks)
                    const [removed] = result.splice(startIndex, 1)
                    result.splice(endIndex, 0, removed)
                    return { blocks: result }
                }),
            selectBlock: (id) => set({ selectedBlockId: id }),
            setBlocks: (blocks) => set({ blocks }),
            setViewMode: (mode) => set({ viewMode: mode }),
        }),
        {
            partialize: (state) => ({ blocks: state.blocks }),
        }
    )
)
