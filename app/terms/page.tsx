import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-3xl mx-auto prose prose-invert">
                    <h1>Terms of Service</h1>
                    <p className="text-muted-foreground">Last updated: November 26, 2025</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                        If you do not agree with these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on PortaForge&apos;s website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on PortaForge&apos;s website;</li>
                    </ul>

                    <h2>3. Disclaimer</h2>
                    <p>
                        The materials on PortaForge&apos;s website are provided on an &apos;as is&apos; basis. PortaForge makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h2>4. Limitations</h2>
                    <p>
                        In no event shall PortaForge or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                        or due to business interruption) arising out of the use or inability to use the materials on PortaForge&apos;s website.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
