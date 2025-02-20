"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, ThumbsUp, Share2 } from "lucide-react"
import { TypeScriptPreviewModal } from "./typescript-preview-modal"
import { toast } from "@/components/ui/use-toast"

interface TypeScriptTip {
  id: number
  title: string
  description: string
  code: string
  category: string
}

export function TypeScriptTipCard({ tip }: { tip: TypeScriptTip }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/tip/${tip.id}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: `TypeScript Tip: ${tip.title}`,
          text: tip.description,
          url: shareUrl,
        })
        console.log("Successfully shared")
      } catch (error) {
        console.error("Error sharing:", error)
        await fallbackShare(shareUrl)
      }
    } else {
      await fallbackShare(shareUrl)
    }
  }

  const fallbackShare = async (shareUrl: string) => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast({
        title: "Link copied!",
        description: "The link to this tip has been copied to your clipboard.",
      })
    } catch (error) {
      console.error("Error copying to clipboard:", error)
      toast({
        title: "Sharing failed",
        description: "Unable to share or copy the link. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{tip.title}</CardTitle>
            <Badge variant="secondary">{tip.category}</Badge>
          </div>
          <CardDescription>{tip.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 bg-muted rounded-md overflow-x-auto">
            <code className="text-sm">{tip.code}</code>
          </pre>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>
            <Code2 className="w-4 h-4 mr-2" />
            Try it out
          </Button>
        </CardFooter>
      </Card>
      <TypeScriptPreviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialCode={tip.code} />
    </>
  )
}

