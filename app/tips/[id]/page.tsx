import { TypeScriptTipCard } from "@/components/typescript-tip-card"
import { typescriptTips } from "@/data/typescript-tips"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function TipPage({ params }: PageProps) {
  params.then(({ id }) => {
    const tipId = Number.parseInt(id, 10)
    const tip = typescriptTips.find((t) => t.id === tipId)

    if (!tip) {
      notFound()
    }

    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">TypeScript Tip</h1>
        <TypeScriptTipCard tip={tip} />
      </div>
    )
  })
}