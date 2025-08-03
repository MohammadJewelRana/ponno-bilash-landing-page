import Lottie from "lottie-react";
import eyeAnimation from "../assets/lottie/runningMan.json";

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white px-4 text-center lg:pb-8 md:pb-6 pb-4 ">
      {/* Animated Lottie running left to right */}

      <div className="w-full overflow-hidden">
        <div className="animate-run-lottie inline-block">
          <div className="w-24 md:w-32">
            <Lottie animationData={eyeAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-6xl md:text-7xl lg:text-[100px] font-extrabold uppercase leading-tight text-gray-800 flex flex-wrap justify-center items-center gap-2 -mt-8 md:-mt-8 lg:-mt-11">
          Coming Soon
        </h2>
      </div>

      {/* Inline styles for horizontal animation */}
      <style>
        {`
          @keyframes runLottie {
            0% {
              transform: translateX(-250%);
            }
            100% {
              transform: translateX(250%);
            }
          }
          .animate-run-lottie {
            animation: runLottie 12s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
