"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Editor from "@monaco-editor/react"
import * as ts from "typescript"

interface TypeScriptPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  initialCode: string
}

export function TypeScriptPreviewModal({ isOpen, onClose, initialCode }: TypeScriptPreviewModalProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")

  const runCode = () => {
    try {
      // Compile TypeScript to JavaScript
      const result = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.None },
      })

      // Capture console.log output
      const originalLog = console.log
      const logs: string[] = []
      console.log = (...args) => {
        logs.push(args.join(" "))
      }

      // Execute the compiled code
      // eslint-disable-next-line no-new-func
      new Function(result.outputText)()

      console.log = originalLog
      setOutput(logs.join("\n"))
    } catch (error) {
      setOutput(`Error: ${error}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Try TypeScript Code</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Editor
              height="300px"
              defaultLanguage="typescript"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{ minimap: { enabled: false } }}
            />
          </div>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-semibold mb-2">Output:</h3>
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={runCode}>Run Code</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

