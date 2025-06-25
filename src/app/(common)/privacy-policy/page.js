"use client";

import Navbar from "@/components/Navbar/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8FAF9] flex flex-col items-center py-12 px-4 pt-[140px]">
        <div className="w-full max-w-4xl 3xl:max-w-6xl bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-[#184C3A] mb-4">
            Privacy Policy
          </h1>
          <div className="text-sm text-gray-500 mb-6 space-y-1">
            <p>Effective Date: 01/06/2025</p>
            <p>Last Updated: 25/06/2025</p>
          </div>
          
          <p className="text-gray-700 mb-6">
            Synapse HealthTech Pvt. Ltd. ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website, use our services, or make payments through Razorpay.
          </p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-3">
                We collect the following types of information:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-[#184C3A] mb-2">
                    a. Personal Information
                  </h3>
                  <p className="text-gray-700 mb-2">
                    When you register, book a consultation, or place an order, we may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Full name</li>
                    <li>Date of birth</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Shipping and billing address</li>
                    <li>Medical history or clinical data relevant to treatment (if applicable)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#184C3A] mb-2">
                    b. Payment Information
                  </h3>
                  <p className="text-gray-700">
                    When you make a payment through Razorpay, we do not store your card or net banking details. Razorpay, our trusted payment gateway, securely processes your payment using industry-standard encryption.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#184C3A] mb-2">
                    c. Usage Data
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We collect non-personal data to improve our website and services:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited</li>
                    <li>Referral source</li>
                    <li>Time spent on the site</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide our products and services</li>
                <li>To personalize your treatment experience</li>
                <li>To process and confirm orders and payments</li>
                <li>To provide updates on order status or changes to services</li>
                <li>To improve our website and services</li>
                <li>To respond to inquiries or customer support requests</li>
                <li>For internal analytics and record-keeping</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                3. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-3">
                We do not sell, rent, or trade your personal information. We may share your data only:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
                <li>With Razorpay to securely process payments</li>
                <li>With our logistics and manufacturing partners to fulfill orders</li>
                <li>With healthcare professionals involved in your treatment</li>
                <li>To comply with legal obligations or respond to lawful requests by authorities</li>
              </ul>
              <p className="text-gray-700">
                All third parties are bound by confidentiality and data protection agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-3">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
                <li>Understand user behavior</li>
                <li>Offer a personalized experience</li>
                <li>Improve website performance</li>
              </ul>
              <p className="text-gray-700">
                You may control or delete cookies via your browser settings, but doing so may affect your user experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                5. Data Security
              </h2>
              <p className="text-gray-700 mb-3">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, or disclosure. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>SSL encryption</li>
                <li>Secure servers</li>
                <li>Role-based access controls</li>
                <li>Regular vulnerability assessments</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                6. Retention of Information
              </h2>
              <p className="text-gray-700">
                We retain your data for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fulfill the purposes outlined in this policy</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Resolve disputes or enforce our agreements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                7. Your Rights
              </h2>
              <p className="text-gray-700 mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
                <li>Access the data we hold about you</li>
                <li>Correct inaccurate or outdated data</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request deletion of your data (subject to legal exceptions)</li>
              </ul>
              <p className="text-gray-700">
                You can make these requests by emailing us at{" "}
                <a
                  href="mailto:privacy@synapsehealthtech.in"
                  className="text-blue-600 underline"
                >
                  privacy@synapsehealthtech.in
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                9. Razorpay Disclosure
              </h2>
              <p className="text-gray-700">
                We use Razorpay as our payment gateway. Razorpay may collect and process payment information as per their own Privacy Policy. All transactions are securely encrypted and comply with PCI-DSS standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                10. Contact Us
              </h2>
              <p className="text-gray-700 mb-3">
                If you have any questions or concerns about this Privacy Policy or your data, please contact:
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Synapse HealthTech Pvt. Ltd.</p>
                <p>#10, Flex Coworks, 2nd Floor, 71, 15th Cross Rd., Dollar Layout, JP Nagar 3rd Phase, Bengaluru, Karnataka - 560078</p>
                <p>
                  Toll free:{" "}
                  <a
                    href="tel:18002023282"
                    className="text-blue-600 underline"
                  >
                    1800 202 3282
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:admin@synapsehealthtech.in"
                    className="text-blue-600 underline"
                  >
                    admin@synapsehealthtech.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 