const Footer = () => {
  return (
    <footer className="w-full items-center justify-items-center">
      <div className="bg-[var(--primary)] p-[20px] md:py-[50px] md:py-0 w-full  gap-[50px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-white space-y-8 md:space-y-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Left Section */}
          <div className="mb-6 md:mb-10 w-full md:w-[365px] lg:w-[300px] col-span-2 md:col-span-3 lg:col-span-1">
            <h2 className="text-2xl font-bold">SYNAPSE</h2>
            <p className="mt-5 text-lg md:text-xl font-normal">
              Bringing technology and expertise in orthodontic solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 text-base w-full md:w-auto">
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-[13px] flex flex-col font-normal">
              <li className="mt-[13px]">
                <a href="#" className="pointer">
                  Home
                </a>
              </li>
              <li className="mt-[13px]">
                <a href="#" className="pointer">
                  Education
                </a>
              </li>
              <li className="mt-[13px]">
                <a href="#" className="pointer">
                  Community
                </a>
              </li>
              <li className="mt-[13px]">
                <a href="#" className="pointer">
                  E-Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-6 md:mb-0 text-base w-full md:w-auto">
            <h3 className="font-bold">Services</h3>
            <ul className="mt-[13px] flex flex-col font-normal">
              <li className="mt-[13px]">
                <a href="#" className="">
                  Smile Analysis
                </a>
              </li>
              <li className="mt-[13px]">
                <a href="#" className="">
                  Patient Management
                </a>
              </li>
              <li className="mt-[13px]">
                <a href="#" className="">
                  Doctor Rewards
                </a>
              </li>
              <li className="mt-[13px]">
                <a href="#" className="">
                  Patient Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="align-self-start text-base w-full md:w-auto">
            <h3 className="font-bold">Contact Us</h3>
            <p className="mt-[13px]">+1 (555) 123-4567</p>
            <p className="mt-[13px]">contact@synapse.com</p>
            <p className="mt-[13px]">123 Technology Drive,</p>
            <p>Suite 400 San,</p>
            <p> Francisco, CA 94107</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[108px] px-5 md:px-25 pt-[30px] pb-[52px]">
        <p className="text-sm font-normal text-center md:text-left">
          &copy; 2025 Synapse. All rights reserved.
        </p>
        <div className="flex space-x-5 mt-4 md:mt-0">
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
