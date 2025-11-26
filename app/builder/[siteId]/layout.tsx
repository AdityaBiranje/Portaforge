import { BuilderHeader } from "@/components/builder/BuilderHeader"

export default function BuilderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen flex flex-col bg-background overflow-hidden">
            <BuilderHeader />
            <div className="flex-1 flex overflow-hidden">
                {children}
            </div>
        </div>
    )
}
