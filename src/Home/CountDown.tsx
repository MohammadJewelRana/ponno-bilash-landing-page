import { useEffect, useState } from "react";

// Helper to format time values
const formatDigit = (value: number): string => value.toString().padStart(2, "0");

// Target date: 99 days from today
const TARGET_DATE = new Date().getTime() + 99 * 24 * 60 * 60 * 1000;

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(TARGET_DATE - new Date().getTime());
  const [prevDigits, setPrevDigits] = useState<string[][]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;
      setTimeLeft(Math.max(difference, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const currentDigits = [
    formatDigit(days),
    formatDigit(hours),
    formatDigit(minutes),
    formatDigit(seconds),
  ].map((str) => str.split(""));

  useEffect(() => {
    setPrevDigits(currentDigits);
  }, [timeLeft]);

  const timeSections = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  const renderDigits = (value: number, sectionIdx: number) =>
    formatDigit(value)
      .split("")
      .map((digit, digitIdx) => {
        const prevDigit = prevDigits?.[sectionIdx]?.[digitIdx];
        const animate = prevDigit !== digit;

        return (
          <div
            key={digitIdx}
            className={`bg-[#BDEDFF] rounded-md w-14 h-14 flex items-center justify-center ${
              animate ? "flip" : ""
            }`}
          >
            <p className="text-[#E26626] font-bold text-4xl">{digit}</p>
          </div>
        );
      });

  return (
    <div className="px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 justify-center items-center">
        {timeSections.map((section, index) => (
          <div
            key={section.label}
            className="px-2 py-2 flex flex-col items-center border-2 border-sky-100 rounded-md bg-sky-50"
          >
            <div className="flex gap-2">{renderDigits(section.value, index)}</div>
            <p className="font-bold uppercase text-xl text-black text-center pt-2">
              {section.label}
            </p>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style>{`
        .flip {
          animation: flip-down 0.5s ease-in-out;
        }

        @keyframes flip-down {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(-90deg);
            opacity: 0.5;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }

      `}</style>
    </div>
  );
};

export default CountDown;
