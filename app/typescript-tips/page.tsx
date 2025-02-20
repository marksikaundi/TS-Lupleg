import { TypeScriptTipCard } from "@/components/typescript-tip-card"
import { typescriptTips } from "@/data/typescript-tips"

export default function TypeScriptTips() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">30 TypeScript Tips</h1>
      <div className="space-y-6">
        {typescriptTips.map((tip) => (
          <TypeScriptTipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  )
}

