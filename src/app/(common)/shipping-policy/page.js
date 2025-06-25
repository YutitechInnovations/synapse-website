"use client";

import Navbar from "@/components/Navbar/Navbar";

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8FAF9] flex flex-col items-center py-12 px-4 pt-[140px]">
        <div className="w-full max-w-4xl 3xl:max-w-6xl bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-[#184C3A] mb-4">
            Shipping and Delivery Policy
          </h1>
          
          <div className="space-y-6 text-justify">
            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                1. Shipping Coverage
              </h2>
              <p className="text-gray-700 text-justify">
                We currently offer shipping across all serviceable pin codes within India. International shipping is not available at this time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                2. Order Processing Time
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  All orders are processed within 3–5 business days after the treatment plan approval and payment confirmation.
                </li>
                <li>
                  For customized medical devices (e.g., clear aligners), processing may take 7–10 business days, depending on clinical validation and production stages.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                3. Shipping Timeline
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  Once dispatched, your order will be delivered within 3–7 business days via our trusted logistics partners.
                </li>
                <li>
                  You will receive a shipping confirmation email or SMS with tracking details as soon as the order is dispatched.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                4. Shipping Charges
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  We offer free standard shipping for most orders unless otherwise specified.
                </li>
                <li>
                  Any expedited shipping requests may attract additional charges, which will be communicated before dispatch.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                5. Delivery Delays
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  While we strive to deliver on time, certain delays may occur due to factors beyond our control (e.g., natural calamities, courier delays, regional lockdowns).
                </li>
                <li>
                  In such cases, we will keep you informed proactively.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                6. Address Accuracy
              </h2>
              <p className="text-gray-700 text-justify">
                Please ensure that all delivery information (address, phone number, pincode) provided at the time of purchase is accurate. Synapse HealthTech will not be liable for failed deliveries due to incorrect or incomplete addresses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                7. Failed Delivery Attempts
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  In case of a failed delivery attempt due to unavailability of the recipient or incorrect address, the courier will re-attempt delivery as per their standard policy.
                </li>
                <li>
                  If the order is returned to us after repeated attempts, re-shipping will be chargeable.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                8. Product Inspection
              </h2>
              <p className="text-gray-700 text-justify">
                We recommend customers inspect the package upon receipt. In case of tampered packaging, please refuse the delivery and contact our support immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                9. Contact Us
              </h2>
              <p className="text-gray-700 mb-3 text-justify">
                For shipping-related queries, please contact:
              </p>
              <div className="space-y-2 text-justify">
                <p className="text-gray-700">
                  <a
                    href="mailto:support@synapsehealthtech.in"
                    className="text-blue-600 underline"
                  >
                    support@synapsehealthtech.in
                  </a>
                </p>
                <p className="text-gray-700">
                  <a
                    href="tel:18002023282"
                    className="text-blue-600 underline"
                  >
                    1800 202 3282
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