import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { BlockRenderer } from "./BlockRenderer"
import { Block } from "@/types/builder"
import { GripVertical } from "lucide-react"
import { useBuilderStore } from "@/store/useBuilderStore"
import { cn } from "@/lib/utils"

export function SortableBlock({ block }: { block: Block }) {
    const { selectedBlockId, selectBlock } = useBuilderStore()
    const isSelected = selectedBlockId === block.id

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: block.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "relative group border-2 border-transparent transition-all",
                isSelected ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/50"
            )}
            onClick={(e) => {
                e.stopPropagation()
                selectBlock(block.id)
            }}
        >
            <div
                {...attributes}
                {...listeners}
                className="absolute left-2 top-2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded cursor-grab opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
                <GripVertical className="w-4 h-4 text-muted-foreground" />
            </div>
            <BlockRenderer block={block} />
        </div>
    )
}
