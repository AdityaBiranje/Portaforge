import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-bold">
                            P
                        </div>
                        <span className="font-bold">PortaForge</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Build your dream portfolio in minutes. No coding required.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/templates" className="hover:text-foreground">Templates</Link></li>
                        <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                        <li><Link href="/features" className="hover:text-foreground">Features</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                        <li><Link href="/help" className="hover:text-foreground">Help Center</Link></li>
                        <li><Link href="/community" className="hover:text-foreground">Community</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                        <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} PortaForge. All rights reserved.
            </div>
        </footer>
    )
}
