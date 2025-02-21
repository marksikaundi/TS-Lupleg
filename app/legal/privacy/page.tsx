import React from "react";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-xl  mt-20">
        <Link href="/" className="flex items-center gap-2 text-xl  mt-2">
          <FaArrowLeftLong />
          <span>back</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 mt-20">Privacy Policy</h1>

      <section className="text-sm my-8 text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </section>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to TS.Lupleg (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our AI prompt management and optimization
            service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">
              2.1 Personal Information
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Name and email address</li>
              <li>Billing information and payment details</li>
              <li>Account credentials</li>
              <li>User-generated content and prompts</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">
              2.2 Usage Information
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Log data and device information</li>
              <li>Usage patterns and preferences</li>
              <li>Performance metrics and analytics</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process your payments and transactions</li>
            <li>To improve our services and user experience</li>
            <li>To communicate with you about updates and changes</li>
            <li>To detect and prevent fraud or abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational security
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction. However, no method
            of transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Data Sharing and Third Parties
          </h2>
          <p className="text-gray-700 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Service providers and business partners who assist in operating
              our service
            </li>
            <li>Legal authorities when required by law</li>
            <li>Other parties with your explicit consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Your Rights and Choices
          </h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Cookies and Tracking
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to improve your
            experience and collect usage data. You can control cookie settings
            through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>

          <p className="text-gray-700">
            <MdEmail className="inline text-xl mr-2 text-gray-700" />
            Email: privacy@TS.Lupleg.com <br />
          </p>

          <p className="text-gray-700">
            <FaLocationDot className="inline text-xl mr-2 text-gray-700" />
            Address: 112 Main Street, Woodlands, <br />
            <span className="text-gray-700 ml-2">Lusaka, Zambia</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
