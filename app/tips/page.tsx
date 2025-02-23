import Link from "next/link";
import { typescriptTips } from "@/data/typescript-tips";
import { Badge } from "@/components/ui/badge";

export default function TipsPage() {
  // Group tips by category
  const tipsByCategory = typescriptTips.reduce((acc, tip) => {
    if (!acc[tip.category]) {
      acc[tip.category] = [];
    }
    acc[tip.category].push(tip);
    return acc;
  }, {} as Record<string, typeof typescriptTips>);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#2D1637] ">
        TypeScript Tips Overview
      </h1>
      <p className="mb-8 text-lg">
        Explore our collection of TypeScript tips, organized by category. Click
        on a tip to see more details.
      </p>

      {Object.entries(tipsByCategory).map(([category, tips]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip) => (
              <Link href={`/docs#${tip.id}`} key={tip.id} className="block">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2 text-[#2D1637] ">
                    {tip.title}
                  </h3>
                  <p className="text-sm  mb-2">{tip.description}</p>
                  <Badge>{category}</Badge>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
