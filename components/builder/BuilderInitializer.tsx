"use client"

import { useEffect, useRef } from "react"
import { useBuilderStore } from "@/store/useBuilderStore"
import { Block } from "@/types/builder"

export function BuilderInitializer({ blocks }: { blocks: Block[] }) {
    const setBlocks = useBuilderStore((state) => state.setBlocks)
    const initialized = useRef(false)

    useEffect(() => {
        if (!initialized.current) {
            setBlocks(blocks)
            initialized.current = true
        }
    }, [blocks, setBlocks])

    return null
}
