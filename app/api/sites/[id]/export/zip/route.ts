import { NextRequest, NextResponse } from "next/server"
import JSZip from "jszip"

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const zip = new JSZip()

    // Mock generating HTML
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Exported Site</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        <div class="p-10">
          <h1 class="text-4xl font-bold">Exported Site ${id}</h1>
          <p>This is a static export of your portfolio.</p>
        </div>
      </body>
    </html>
  `

    zip.file("index.html", htmlContent)
    zip.file("styles.css", "body { background: #f0f0f0; }")

    const content = await zip.generateAsync({ type: "blob" })

    return new NextResponse(content, {
        headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="portfolio-${id}.zip"`,
        },
    })
}
