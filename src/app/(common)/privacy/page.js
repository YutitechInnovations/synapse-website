"use client";

import Navbar from "@/components/navbar/Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8FAF9] flex flex-col items-center py-12 px-4 pt-[100px]">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-[#184C3A] mb-4">
            Synapse HealthTech - Privacy Policy and Terms of Use
          </h1>
          <h2 className="text-xl font-semibold text-[#184C3A] mb-2">
            Privacy Policy
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Effective Date: June 4, 2025
          </p>
          <p className="mb-4">
            Synapse HealthTech Private Limited (&quot;we&quot;, &quot;us&quot;,
            or &quot;our&quot;) operates the website{" "}
            <a
              href="https://www.synapsehealthtech.in"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.synapsehealthtech.in
            </a>
            , a secure digital platform for orthodontists and dental
            professionals to plan, track, and manage aligner treatments and
            other dental services.
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <strong>Information We Collect</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>
                  Doctor Information: Name, email, phone, clinic details, login
                  credentials.
                </li>
                <li>
                  Patient Data: Dental records, images, and treatment progress
                  entered by doctors.
                </li>
                <li>
                  Technical Data: IP address, device info, browser, usage stats
                  (via cookies).
                </li>
                <li>Transaction Data: Reward points earned and redeemed.</li>
              </ul>
            </li>
            <li>
              <strong>How We Use Information</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Enable secure doctor-only access and case management.</li>
                <li>Provide treatment planning and order tracking.</li>
                <li>Support reward point redemption and service updates.</li>
                <li>Enhance platform performance and user experience.</li>
              </ul>
            </li>
            <li>
              <strong>Cookies and Tracking</strong>
              <p className="mt-1">
                We use cookies to maintain session security, monitor usage, and
                improve functionality. You may disable cookies in your browser
                settings.
              </p>
            </li>
            <li>
              <strong>Data Sharing</strong>
              <p className="mt-1">
                We do not sell your data. We may share data with:
              </p>
              <ul className="list-disc pl-6 mt-1">
                <li>
                  Third-party service providers whose servers host this data.
                  The information is used solely for dental purposes and to
                  assist doctors registered on the portal in the assessment and
                  management of dental conditions.
                </li>
                <li>Trusted third-party service providers under NDA.</li>
                <li>Regulatory authorities if legally required.</li>
              </ul>
            </li>
            <li>
              <strong>Patient Data Responsibility</strong>
              <p className="mt-1">
                Doctors are responsible for obtaining patient consent before
                inputting data. Patients cannot log in directly.
              </p>
            </li>
            <li>
              <strong>Data Security</strong>
              <p className="mt-1">
                We use encryption, secure servers, and restricted access to
                protect all data.
              </p>
            </li>
            <li>
              <strong>Data Retention</strong>
              <p className="mt-1">
                We retain data for clinical, legal, or regulatory purposes as
                required under Indian law.
              </p>
            </li>
            <li>
              <strong>User Rights</strong>
              <p className="mt-1">
                Doctors may request access or deletion of their own data.
                Patient data changes must come through the treating doctor.
              </p>
            </li>
            <li>
              <strong>External Links</strong>
              <p className="mt-1">
                We are not responsible for the privacy practices of external
                sites linked on our platform.
              </p>
            </li>
            <li>
              <strong>Contact Us</strong>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:support@synapsehealthtech.in"
                  className="text-blue-600 underline"
                >
                  support@synapsehealthtech.in
                </a>
                <br />
                Address: B4-1102, Elita Promenade, JP Nagar 7th Phase, Bangalore
                South, Karnataka 560078, India
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
