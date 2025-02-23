"use client";

import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { typescriptTips, type TypeScriptTip } from "@/data/typescript-tips";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function DocsPage() {
  const [selectedTip, setSelectedTip] = useState<TypeScriptTip>(
    typescriptTips[0],
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleTipSelect = (tip: TypeScriptTip) => {
    setSelectedTip(tip);
    if (isMobile) {
      setIsSheetOpen(false);
    }
  };

  const TipsList = () => (
    <ScrollArea className="h-[calc(100vh-100px)]">
      {typescriptTips.map((tip) => (
        <Button
          key={tip.id}
          variant={selectedTip.id === tip.id ? "secondary" : "ghost"}
          className="w-full justify-start mb-2"
          onClick={() => handleTipSelect(tip)}
        >
          {tip.title}
        </Button>
      ))}
    </ScrollArea>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar for desktop */}
      {!isMobile && (
        <aside className="w-64 bg-gray-100 p-4 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">TypeScript Tips</h2>
          <TipsList />
        </aside>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        {isMobile && (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="mb-4"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>TypeScript Tips</SheetTitle>
              </SheetHeader>
              <TipsList />
            </SheetContent>
          </Sheet>
        )}

        <article>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {selectedTip.title}
          </h1>{" "}
          <Badge variant="secondary" className="mb-4">
            {selectedTip.category}
          </Badge>
          <p className="text-base md:text-lg mb-6">{selectedTip.description}</p>
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Code Example
            </h2>
            <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto mb-6">
              <code className="text-sm">{selectedTip.code}</code>
            </pre>
          </section>
          {selectedTip.detailedExplanation && (
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {" "}
                Explanation
              </h2>
              <div className="prose max-w-none mb-6">
                {selectedTip.detailedExplanation}
              </div>
            </section>
          )}
          {selectedTip.bestPractices &&
            selectedTip.bestPractices.length > 0 && (
              <section>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Best Practices
                </h2>
                <ul className="list-disc pl-6">
                  {selectedTip.bestPractices.map((practice, index) => (
                    <li key={index} className="mb-2">
                      {practice}
                    </li>
                  ))}
                </ul>
              </section>
            )}
        </article>
      </main>
    </div>
  );
}
