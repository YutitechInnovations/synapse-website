"use client";

import Navbar from "@/components/Navbar/Navbar";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8FAF9] flex flex-col items-center py-12 px-4 pt-[140px]">
        <div className="w-full max-w-4xl 3xl:max-w-6xl bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-[#184C3A] mb-4">
            Refund and Cancellation Policy
          </h1>
          
          <div className="space-y-6 text-justify">
            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                1. Order Cancellation
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  Orders once placed can be canceled within 24 hours of purchase, provided the processing or customization has not started.
                </li>
                <li>
                  To cancel an order, please email us at{" "}
                  <a
                    href="mailto:support@synapsehealthtech.in"
                    className="text-blue-600 underline"
                  >
                    support@synapsehealthtech.in
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:18002023282"
                    className="text-blue-600 underline"
                  >
                    1800 202 3282
                  </a>{" "}
                  with your order number.
                </li>
                <li>
                  If the cancellation is approved, the amount will be refunded after deducting any applicable processing fees.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                2. Refund Eligibility
              </h2>
              <p className="text-gray-700 mb-3 text-justify">
                Refunds will be processed only under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3 text-justify">
                <li>The product/service was not delivered or initiated as promised.</li>
                <li>There was a duplicate payment.</li>
                <li>A pre-delivery request for cancellation was made and approved.</li>
              </ul>
              <p className="text-gray-700 text-justify">
                Refunds are not applicable for digital services - oral scan once completed, treatment plans, or personalized items once the design/production has started.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                3. Non-Refundable Items
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>Customized aligners or treatment kits after production has begun.</li>
                <li>Consultation or diagnostic services already rendered.</li>
                <li>Any third-party services procured on your behalf.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                4. Refund Process
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  Once approved, refunds will be processed within 7-10 business days to the original mode of payment.
                </li>
                <li>
                  Razorpay may take an additional 2-3 days for the amount to reflect, depending on your bank.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                5. Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>
                  In case of a payment dispute, you may contact us directly at{" "}
                  <a
                    href="mailto:support@synapsehealthtech.in"
                    className="text-blue-600 underline"
                  >
                    support@synapsehealthtech.in
                  </a>{" "}
                  before initiating a chargeback via Razorpay or your bank.
                </li>
                <li>
                  We aim to resolve all complaints amicably and transparently.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#184C3A] mb-3">
                6. Changes to this Policy
              </h2>
              <p className="text-gray-700 text-justify">
                We reserve the right to modify this policy at any time. Any changes will be reflected on this page with a revised effective date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 