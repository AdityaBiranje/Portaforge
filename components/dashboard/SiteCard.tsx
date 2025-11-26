import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, ExternalLink, Edit, Globe } from "lucide-react"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SiteCardProps {
    site: {
        id: string
        title: string
        slug: string
        status: "DRAFT" | "PUBLISHED"
        lastEdited: string
        thumbnail?: string
    }
}

export function SiteCard({ site }: SiteCardProps) {
    return (
        <Card className="group hover:border-primary/50 transition-all duration-300">
            <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                {site.thumbnail ? (
                    <img src={site.thumbnail} alt={site.title} className="object-cover w-full h-full" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/50">
                        <Globe className="w-12 h-12 opacity-20" />
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Link href={`/builder/${site.id}`}>
                        <Button size="sm" variant="secondary">
                            <Edit className="w-4 h-4 mr-2" /> Edit
                        </Button>
                    </Link>
                    {site.status === "PUBLISHED" && (
                        <Link href={`/site/${site.slug}`} target="_blank">
                            <Button size="sm" variant="outline" className="bg-background/20 text-white border-white/20 hover:bg-background/40">
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
            <CardHeader className="p-4 pb-2">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold truncate pr-2">{site.title}</h3>
                        <p className="text-xs text-muted-foreground">{site.slug}.portaforge.app</p>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardFooter className="p-4 pt-2 flex items-center justify-between">
                <Badge variant={site.status === "PUBLISHED" ? "default" : "secondary"} className="text-xs">
                    {site.status}
                </Badge>
                <span className="text-xs text-muted-foreground">Edited {site.lastEdited}</span>
            </CardFooter>
        </Card>
    )
}
