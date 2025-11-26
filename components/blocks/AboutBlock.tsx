export function AboutBlock({ heading, content }: { heading: string, content: string }) {
    return (
        <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">{heading}</h2>
                <div className="prose prose-lg dark:prose-invert">
                    <p>{content}</p>
                </div>
            </div>
        </section>
    )
}
