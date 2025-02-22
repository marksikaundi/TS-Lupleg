import { Users, FileText, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Contributing() {
  return (
    <div className="min-h-screen bg-white p-4 mt-16 md:p-8">
      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2D1537] mb-4">
              Let&apos;s build the best coding education platform, together
            </h1>
            <p className="text-gray-600 mb-4">
              TS.Lupleg is a{" "}
              <span className="text-[#2D1537]">
                platform entirely developed, to help
              </span>{" "}
              people from all backgrounds with Tech skills. With over one
              hundred dedicated maintainers and thousands of contributors, our
              goal is to create the best, affordable, code learning platform on
              the web. All of our code is open source and we love to have you
              help us build it.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/contribute.svg"
              alt="Contributing to Lupleg"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        <nav className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4 mb-8">
          <Link href="#">
            <button className="flex items-center space-x-2 text-[#2D1537] font-semibold pb-4 border-b-2 border-[#2D1537]">
              <FileText size={20} />
              <span>Getting Started</span>
            </button>
          </Link>
          <Link href="/contributing/tasks">
            <button className="flex items-center space-x-2 text-gray-600 font-semibold">
              <FileText size={20} />
              <span>Explore tasks</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                000
              </span>
            </button>
          </Link>

          <Link href="#contri">
            <button className="flex items-center space-x-2 text-gray-600 font-semibold">
              <Users size={20} />
              <span>Contributors</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                000
              </span>
            </button>
          </Link>

          <Link href="https://github.com/Lupleg/TS-lupleg">
            <button className="flex items-center space-x-2 text-gray-600 font-semibold">
              <HelpCircle size={20} />
              <span>Contributing Help</span>
            </button>
          </Link>
        </nav>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-[#2D1537] text-center mt-6 mb-8">
            How you can help us build TS-Lupleg
          </h2>
          <div className="flex justify-center my-4">
            <svg viewBox="0 0 100 20" className="w-24">
              <path
                d="M0 10 Q25 20 50 10 T100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[#2D1537]"
              />
            </svg>
          </div>
          <p>
            We have a lot of work to do and we need your help to make it happen.
            Here are some ways you can help us build the best coding education
            platform on the web:
          </p>

          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Contribute to our codebase:</strong> We have a lot of code
              that needs to be written and we would love your help. Check out
              our{" "}
              <a
                href="https://github.com/Lupleg/TS-lupleg"
                className="text-[#2D1537] underline"
              >
                GitHub repository
              </a>{" "}
              to see what we are working on and how you can help.
            </li>
            <li>
              <strong>Write documentation:</strong> We need help writing
              documentation for our codebase. If you are good at writing and
              explaining things, we would love your help.
            </li>
            <li>
              <strong>Test our code:</strong> We need help testing our code to
              make sure it works as expected. If you are good at finding bugs
              and writing tests, we would love your help.
            </li>
            <li>
              <strong>Translate our content:</strong> We need help translating
              our content into different languages. If you are fluent in a
              language other than English, we would love your help.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
