"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: "What social platforms do you support?",
    answer: (
      <div>
        Currently we support Twitter/X, Instagram, LinkedIn, Facebook, TikTok,
        YouTube, Bluesky, Threads, Pinterest for scheduled posting and instant
        posting. To see all platforms we offer and that are coming soon{" "}
        <a href="#" className="text-emerald-500 hover:underline">
          click here
        </a>
        . If you have a request please feel free to email us.
      </div>
    ),
  },
  {
    question: "How many social accounts can I connect?",
    answer:
      "You can connect unlimited social media accounts across all supported platforms with any of our plans.",
  },
  {
    question: "What is a social account?",
    answer:
      "A social account is any individual profile or page you manage on social media platforms. For example, your Facebook business page, Instagram profile, or Twitter account each count as one social account.",
  },
  {
    question: "How many posts can I make and schedule per month?",
    answer:
      "Our plans offer flexible posting limits. Check our pricing page for detailed information about post limits for each plan. We offer options suitable for individual creators to large enterprises.",
  },
  {
    question: "Will my posts get less reach using this app?",
    answer:
      "No, your posts will not get less reach. We use official APIs provided by each platform to ensure your posts are published naturally, just as if you posted directly on the platform.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or commitments. If you cancel, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We offer a 14-day money-back guarantee. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.",
  },
  {
    question: "I have another question",
    answer:
      "Please reach out to our support team and we'll be happy to help you with any questions you may have.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <div id="faq" className="space-y-2 mb-8 mt-20">
          <p className="text-emerald-500 font-medium">FAQ</p>
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
