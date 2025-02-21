import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mt-20 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About TS.Lupleg
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering creators with AI-driven content optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At TS.Lupleg, we&apos;re on a mission to revolutionize content
              creation by making AI-powered optimization accessible to creators
              worldwide. We believe that every creator deserves the tools to
              maximize their content&apos;s potential and reach their target
              audience effectively.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              We envision a future where content creators can seamlessly blend
              their creativity with AI-driven insights, leading to more
              engaging, discoverable, and successful content across all
              platforms.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Powered Innovation
              </h3>
              <p className="text-gray-600">
                Our advanced AI algorithms analyze trends and patterns to
                provide actionable insights for content optimization.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Creator-First Approach
              </h3>
              <p className="text-gray-600">
                We prioritize the needs of creators, building tools that enhance
                rather than replace human creativity.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Continuous Evolution
              </h3>
              <p className="text-gray-600">
                We constantly update our platform to stay ahead of platform
                changes and emerging content trends.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you&apos;re a seasoned content creator or just starting out,
            TS.Lupleg is here to help you achieve your content goals. Join
            thousands of creators who are already using our platform to optimize
            their content and grow their audience.
          </p>
          <div className="text-center">
            <Link
              href="/typescript-tips"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4A976A] hover:bg-[#4A976A]"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
