import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mt-20 mb-16">
          <h1 className="text-4xl font-bold text-[#2D1637] sm:text-5xl">
            About TS.Lupleg
          </h1>
          <p className="mt-4 text-xl text-[#2D1637]">
            Easy catch for TypeScript
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#2D1637] mb-4">
              Our Mission
            </h2>
            <p className="text-[#2D1637]">
              At TS.Lupleg, we&apos;re after to make content more accessible and
              easy to follow, without special need. Its a journey to help those
              in need.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#2D1637] mb-4">
              Our Vision
            </h2>
            <p className="text-[#2D1637]">
              We want to reach to more users who dont really need to think the
              challenges of how something should be setup, insteady. Everything
              is set for you.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2D1637] mb-4">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#2D1637] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                We run on the web
              </h3>
              <p className="text-white">
                Our platform is developed in way that you have you need to make
                it learn and build with TypeScript programming language.
              </p>
            </div>
            <div className="p-6 bg-[#2D1637] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Learners-First Approach
              </h3>
              <p className="text-white">
                We prioritize the needs of learners, building tools that enhance
                helps all levels of human being to learn.
              </p>
            </div>
            <div className="p-6 bg-[#2D1637] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Continuous Evolution
              </h3>
              <p className="text-white">
                We constantly update our platform to stay ahead of platform
                changes and emerging content trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
