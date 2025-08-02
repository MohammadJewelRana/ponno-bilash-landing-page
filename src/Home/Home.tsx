import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
import CountDown from "./CountDown";
import ComingSoon from "./Coming";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#e2652602] overflow-hidden flex flex-col justify-between">
      {/* Gradient Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#E26626] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#E26626] opacity-10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-7xl  mx-auto">
        {/* Logo */}
        <div className="px-4 pt-6 md:pt-10   z-20 ">
          <img src={logo} alt="ponnoBilash" className="h-8 md:h-12 w-auto" />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col justify-center items-center  ">
          <div className=" text-center py-8 md:py-16">
            {/* <h2 className="text-5xl md:text-[120px] font-bold uppercase text-gray-800 mb-4 leading-snug">
              Coming Soon
            </h2> */}

            <ComingSoon/>
            {/* <h2 className="text-5xl md:text-[120px] font-bold uppercase text-gray-800 mb-4 leading-snug">
              Coming Soon
            </h2> */}
            <p className="px-2  text-lg md:text-[28px] text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed font-bold">
              We’re building Bangladesh’s most customer-loved <br />
              <span className="text-[#E26626] md:text-[32px]">
                {" "}
                Gadget & Gift
              </span>{" "}
              destination.
            </p>

            {/* Countdown */}

            <CountDown />
          </div>
          {/* Social Icons */}
          <div className="flex flex-row items-center gap-2 md:gap-6 mt-6">
            <p className="text-black font-semibold text-[28px]">Follow us on</p>
            <div className="flex items-center gap-4">
              <div className="bg-[#E26626] p-3 rounded-full text-white hover:scale-105 transition-transform cursor-pointer">
                <FaFacebook className="text-xl" />
              </div>
              <div className="bg-[#E26626] p-3 rounded-full text-white hover:scale-105 transition-transform cursor-pointer">
                <FaInstagram className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="bg-[#E26626] w-full">
        <div className="text-center py-3 text-sm text-white">
          © {new Date().getFullYear()}, Ponnobilash.com. All rights reserved.
        </div>
      </div> */}
    </div>
  );
};

export default Home;
