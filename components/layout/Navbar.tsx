"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/50 border-b border-border/40"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                    P
                </div>
                <span className="text-xl font-bold tracking-tight">PortaForge</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                </Link>
                <Link href="/templates" className="hover:text-foreground transition-colors">
                    Templates
                </Link>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                </Link>
                <Link href="/showcase" className="hover:text-foreground transition-colors">
                    Showcase
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link href="/auth/signin">
                    <Button variant="ghost" size="sm">
                        Log in
                    </Button>
                </Link>
                <Link href="/auth/signup">
                    <Button size="sm">Get Started</Button>
                </Link>
            </div>
        </motion.header>
    )
}
