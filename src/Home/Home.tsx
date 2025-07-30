import logo from "../assets/logo/logo.png";

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
        <div className="flex-grow flex flex-col justify-center items-center z-10 px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-snug">
              Coming Soon...
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              We’re building Bangladesh’s most customer-loved <br />
              Gadget & Gift destination.
            </p>

            {/* Countdown */}
            {/* <Countdown /> */}
          </div>

          {/* Social Icons */}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#E26626] w-full">
        <div className="text-center py-3 text-sm text-white">
          © {new Date().getFullYear()}, Ponnobilash.com. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Home;
