"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

// const faqItems: FaqItem[] = [
//   {
//     question: "What social platforms do you support?",
//     answer: (
//       <div>
//         Currently we support Twitter/X, Instagram, LinkedIn, Facebook, TikTok,
//         YouTube, Bluesky, Threads, Pinterest for scheduled posting and instant
//         posting. To see all platforms we offer and that are coming soon{" "}
//         <a href="#" className="text-emerald-500 hover:underline">
//           click here
//         </a>
//         . If you have a request please feel free to email us.
//       </div>
//     ),
//   },
//   {
//     question: "How many social accounts can I connect?",
//     answer:
//       "You can connect unlimited social media accounts across all supported platforms with any of our plans.",
//   },
//   {
//     question: "What is a social account?",
//     answer:
//       "A social account is any individual profile or page you manage on social media platforms. For example, your Facebook business page, Instagram profile, or Twitter account each count as one social account.",
//   },
//   {
//     question: "How many posts can I make and schedule per month?",
//     answer:
//       "Our plans offer flexible posting limits. Check our pricing page for detailed information about post limits for each plan. We offer options suitable for individual creators to large enterprises.",
//   },
//   {
//     question: "Will my posts get less reach using this app?",
//     answer:
//       "No, your posts will not get less reach. We use official APIs provided by each platform to ensure your posts are published naturally, just as if you posted directly on the platform.",
//   },
//   {
//     question: "Can I cancel anytime?",
//     answer:
//       "Yes, you can cancel your subscription at any time. There are no long-term contracts or commitments. If you cancel, you'll continue to have access until the end of your billing period.",
//   },
//   {
//     question: "Can I get a refund?",
//     answer:
//       "We offer a 14-day money-back guarantee. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.",
//   },
//   {
//     question: "I have another question",
//     answer:
//       "Please reach out to our support team and we'll be happy to help you with any questions you may have.",
//   },
// ];
//
interface FaqItem {
  question: string;
  // answer: string | JSX.Element;
  answer: React.ReactNode;
  category?: "basics" | "technical" | "billing";
}

const faqItems: FaqItem[] = [
  {
    question: "What's unique about Lupleg's TypeScript approach?",
    answer: (
      <div>
        Lupleg uses a practical, project-based learning approach for TypeScript.
        Key features include:
        <ul className="list-disc pl-5 mt-2">
          <li>
            Hands-on exercises with real-world social media API integration
          </li>
          <li>Progressive type system understanding from basic to advanced</li>
          <li>Best practices for type safety in React applications</li>
        </ul>
      </div>
    ),
    category: "technical",
  },
  {
    question: "How does TypeScript integration work with social platforms?",
    answer: (
      <div>
        We use strongly-typed API interfaces for each supported platform
        (Twitter/X, Instagram, LinkedIn, etc.). This provides:
        <ul className="list-disc pl-5 mt-2">
          <li>Type-safe API responses and requests</li>
          <li>Autocomplete support for platform-specific features</li>
          <li>Runtime type checking for enhanced reliability</li>
        </ul>
        <a href="#" className="text-[#2D1637] hover:underline">
          View our API documentation
        </a>
      </div>
    ),
    category: "technical",
  },
  {
    question: "What TypeScript concepts can I learn through the platform?",
    answer: (
      <div>
        Our platform covers essential TypeScript concepts including:
        <ul className="list-disc pl-5 mt-2">
          <li>Generic Types and Interfaces</li>
          <li>Union and Intersection Types</li>
          <li>Advanced Type Utilities</li>
          <li>Decorators and Metadata</li>
          <li>Async/Await with proper typing</li>
        </ul>
      </div>
    ),
    category: "technical",
  },
  {
    question: "How do you ensure type safety in social media scheduling?",
    answer: (
      <div>
        We implement comprehensive type checking through:
        <ul className="list-disc pl-5 mt-2">
          <li>Strict TypeScript configuration</li>
          <li>Custom type guards for API responses</li>
          <li>Zod schema validation for runtime safety</li>
          <li>Properly typed state management</li>
        </ul>
      </div>
    ),
    category: "technical",
  },
  {
    question: "What development tools are supported?",
    answer: (
      <div>
        Our platform supports modern TypeScript development with:
        <ul className="list-disc pl-5 mt-2">
          <li>VSCode integration with custom snippets</li>
          <li>ESLint with TypeScript rules</li>
          <li>Jest testing framework with TS support</li>
          <li>Debug configurations for TypeScript</li>
        </ul>
      </div>
    ),
    category: "technical",
  },
  {
    question: "Can I use the platform for team learning?",
    answer:
      "Yes, we offer team licenses with additional features like shared type definitions, collaborative coding environments, and team progress tracking.",
    category: "basics",
  },
  {
    question: "What's included in the TypeScript learning subscription?",
    answer: (
      <div>
        Our subscription includes:
        <ul className="list-disc pl-5 mt-2">
          <li>Access to TypeScript course materials</li>
          <li>Practice projects with social media integration</li>
          <li>Type definition examples from real projects</li>
          <li>Community support and code reviews</li>
        </ul>
      </div>
    ),
    category: "billing",
  },
  {
    question: "How do you handle TypeScript version updates?",
    answer:
      "We regularly update our platform to support the latest TypeScript features and versions, providing migration guides and compatibility notes for each major update.",
    category: "technical",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div id="faq" className="space-y-2 mb-8 mt-20">
        <p className="text-[#2D1637] font-medium">FAQ</p>
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 prose-sm">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
