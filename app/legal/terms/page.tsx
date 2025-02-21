import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-xl  mt-20">
        <Link href="/" className="flex items-center gap-2 text-xl  mt-2">
          <FaArrowLeftLong />
          <span>back</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 mt-20 ">Terms and Conditions</h1>

      <div className="space-y-8">
        <section className="text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to TS.Lupleg (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). By accessing or using our website and services, you
            agree to be bound by these Terms and Conditions. Please read these
            terms carefully before using our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              &quot;Service&quot; refers to TS.Lupleg&apos;s website and AI
              prompt management platform.
            </li>
            <li>
              &quot;User,&quot; &quot;you,&quot; and &quot;your&quot; refer to
              individuals or entities using our Service.
            </li>
            <li>
              &quot;Content&quot; includes text, prompts, images, and other
              materials shared through our Service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Account Registration
          </h2>
          <p className="text-gray-700">
            To use our Service, you must create an account. You agree to provide
            accurate information and maintain its accuracy. You are responsible
            for maintaining the confidentiality of your account credentials and
            all activities under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You must be at least 13 years old to use our Service.</li>
            <li>
              You agree not to use the Service for any illegal or unauthorized
              purpose.
            </li>
            <li>
              You will not violate any laws or third-party rights when using our
              Service.
            </li>
            <li>
              You are responsible for all content you submit or share through
              our Service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Intellectual Property Rights
          </h2>
          <p className="text-gray-700">
            The Service and its original content, features, and functionality
            are owned by TS.Lupleg and are protected by international copyright,
            trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
          <p className="text-gray-700">
            By submitting content to our Service, you grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify, and
            distribute your content for the purpose of providing and improving
            our Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
          <p className="text-gray-700">
            Your use of our Service is also governed by our Privacy Policy.
            Please review our Privacy Policy to understand our practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Subscription and Payments
          </h2>
          <p className="text-gray-700">
            Some features of our Service require a paid subscription. All
            payments are non-refundable unless required by law. We reserve the
            right to modify our pricing with reasonable notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p className="text-gray-700">
            We reserve the right to terminate or suspend your account and access
            to our Service immediately, without prior notice, for any violation
            of these Terms or for any other reason we deem appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            To the maximum extent permitted by law, TS.Lupleg shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use or inability to use the
            Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms at any time. We will
            notify users of any material changes via email or through our
            Service. Continued use of our Service after such modifications
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            12. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at
            support@TS.Lupleg.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
