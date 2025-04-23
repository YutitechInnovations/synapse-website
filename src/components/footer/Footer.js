const Footer = () => {
  return (
    <footer className="w-full items-center justify-items-center">
      <div className="bg-[var(--primary-light)] p-[100px] w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-[variable(--primary)]">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 w-[365px]">
            <h2 className="text-2xl font-bold">SYNAPSE</h2>
            <p className="mt-5 text-xl font-normal">
              Bringing technology and expertise in orthodontic solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 text-base">
            <h3 className="font-bold ">Quick Links</h3>
            <ul className="mt-[13px] flex-col font-normal">
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Home
                </a>
              </li>
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Education
                </a>
              </li>
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Community
                </a>
              </li>
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  E-Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-6 md:mb-0 text-base">
            <h3 className="font-bold ">Services</h3>
            <ul className="mt-[13px] flex-col font-normal">
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Smile Analysis
                </a>
              </li>
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Patient Management
                </a>
              </li>
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Doctor Rewards
                </a>
              </li>
              <li className="mt-[13px] ">
                <a href="#" className="hover:text-purple-600">
                  Patient Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="align-self-start text-base">
            <h3 className="font-bold">Contact Us</h3>
            <p className="mt-[13px]">+1 (555) 123-4567</p>
            <p className="mt-[13px]">contact@synapse.com</p>
            <p className="mt-[13px]">123 Technology Drive,</p>
            <p>Suite 400 San,</p>
            <p> Francisco, CA 94107</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center w-full h-[108px]  px-25 pt-[30px] pb-[52px]">
        <p className="text-sm font-normal">
          &copy; 2025 Synapse. All rights reserved.
        </p>
        <div className="flex space-x-5">
          <a href="/privacy-policy" className="flex space-x-4 hover:underline">
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="flex space-x-4 hover:underline"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
