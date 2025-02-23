"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully!",
          description: "Check your email for confirmation.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto py-8">
        <Card className="max-w-md mx-auto p-6">
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#2D1637] mb-4" />
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-4">
              Your message has been sent successfully. We&apos;ve sent you a
              confirmation email with the details of your message.
            </p>
            <Button
              className="bg-[#2D1637] hover:bg-[#2D1637] text-white"
              onClick={() => setIsSuccess(false)}
            >
              Send Another Message
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto p-6">
        {/* <h1 className="text-3xl font-bold mb-6">Contact Us</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message"
              className="min-h-[120px]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#2D1637] hover:bg-[#2D1637] text-white "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
