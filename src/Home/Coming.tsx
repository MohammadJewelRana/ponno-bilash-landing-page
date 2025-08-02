import React from "react";
import Lottie from "lottie-react";
import eyeAnimation from "../assets/lottie/runningMan.json";
import coolAnimation from "../assets/lottie/coolEmoji.json";

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center bg-white px-4 text-center lg:pb-8 md:pb-6 pb-4">
      <div>
        <h2 className="text-6xl md:text-7xl lg:text-[100px] font-extrabold uppercase leading-tight text-gray-800 flex flex-wrap justify-center items-center gap-2">
          <span>C</span>

          {/* Emoji scales relative to text height */}
          <span className="inline-block w-[1.1em] h-[1.1em] md:w-20 md:h-20">
            <Lottie animationData={eyeAnimation} loop={true} />
          </span>

          <span>MING</span>
          <span className="w-full block sm:hidden" />{" "}
          {/* Force line break on small screens */}
          <span className="md:pl-8 pl-0">S</span>

          {/* Emojis scale relative to text height on small, fixed size on md+ */}
          <span className="inline-block w-[1.1em] h-[1.1em] sm:w-[1.2em] sm:h-[1.2em] md:w-20 md:h-20">
            <Lottie animationData={coolAnimation} loop={true} />
          </span>
          <span className="inline-block w-[1.1em] h-[1.1em] sm:w-[1.2em] sm:h-[1.2em] md:w-20 md:h-20">
            <Lottie animationData={coolAnimation} loop={true} />
          </span>

          <span>N</span>
        </h2>
      </div>
    </div>
  );
};

export default ComingSoon;
