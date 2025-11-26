"use client"

import { useBuilderStore } from "@/store/useBuilderStore"
import { SortableBlock } from "@/components/builder/SortableBlock"
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"

export function Canvas() {
    const { blocks, reorderBlocks, viewMode } = useBuilderStore()

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event

        if (over && active.id !== over.id) {
            const oldIndex = blocks.findIndex((block) => block.id === active.id)
            const newIndex = blocks.findIndex((block) => block.id === over.id)
            reorderBlocks(oldIndex, newIndex)
        }
    }

    return (
        <div className="flex-1 bg-muted/50 p-8 overflow-y-auto h-full flex justify-center">
            <div
                className={`bg-background min-h-[800px] shadow-lg rounded-lg border border-border overflow-hidden transition-all duration-300 mx-auto ${viewMode === "desktop" ? "w-full max-w-4xl" :
                        viewMode === "tablet" ? "w-[768px]" :
                            "w-[375px]"
                    }`}
            >
                {blocks.length === 0 ? (
                    <div className="h-full flex items-center justify-center p-12">
                        <div className="text-center text-muted-foreground border-2 border-dashed border-border rounded-lg p-12 w-full">
                            <p>Drag and drop sections here</p>
                            <p className="text-sm mt-2">or click to add from sidebar</p>
                        </div>
                    </div>
                ) : (
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={blocks.map((b) => b.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <div className="flex flex-col">
                                {blocks.map((block) => (
                                    <SortableBlock key={block.id} block={block} />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                )}
            </div>
        </div>
    )
}
