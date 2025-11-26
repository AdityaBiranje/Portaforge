"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useBuilderStore } from "@/store/useBuilderStore"

export function PropertiesPanel() {
    const { blocks, selectedBlockId, updateBlock } = useBuilderStore()
    const selectedBlock = blocks.find((b) => b.id === selectedBlockId)

    if (!selectedBlock) {
        return (
            <div className="w-80 border-l border-border bg-muted/30 flex flex-col h-full items-center justify-center text-muted-foreground p-4 text-center">
                <p>Select a block to edit its properties</p>
            </div>
        )
    }

    const handlePropChange = (key: string, value: string) => {
        updateBlock(selectedBlock.id, { [key]: value })
    }

    return (
        <div className="w-80 border-l border-border bg-muted/30 flex flex-col h-full">
            <div className="p-4 border-b border-border">
                <h2 className="font-semibold text-sm">Properties</h2>
                <p className="text-xs text-muted-foreground capitalize">{selectedBlock.type} Block</p>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase text-muted-foreground">Content</h3>
                        {Object.entries(selectedBlock.props).map(([key, value]) => (
                            <div key={key} className="grid gap-2">
                                <Label htmlFor={key} className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</Label>
                                {key === "content" || key.includes("description") ? (
                                    <Textarea
                                        id={key}
                                        value={value as string}
                                        onChange={(e) => handlePropChange(key, e.target.value)}
                                        rows={4}
                                    />
                                ) : key.toLowerCase().includes("color") || key.toLowerCase().includes("background") ? (
                                    <div className="flex gap-2">
                                        <div className="relative w-10 h-10 rounded-md overflow-hidden border border-input shrink-0">
                                            <input
                                                type="color"
                                                value={value as string}
                                                onChange={(e) => handlePropChange(key, e.target.value)}
                                                className="absolute -top-2 -left-2 w-16 h-16 p-0 border-0 cursor-pointer"
                                            />
                                        </div>
                                        <Input
                                            id={key}
                                            value={value as string}
                                            onChange={(e) => handlePropChange(key, e.target.value)}
                                            className="font-mono"
                                        />
                                    </div>
                                ) : (
                                    <Input
                                        id={key}
                                        value={value as string}
                                        onChange={(e) => handlePropChange(key, e.target.value)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase text-muted-foreground">Settings</h3>
                        <div className="grid gap-2">
                            <Label>Block ID</Label>
                            <Input value={selectedBlock.id} disabled className="font-mono text-xs" />
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}
