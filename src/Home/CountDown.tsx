import { useEffect, useState } from "react";

// Helper function to format time values as 2-digit strings
const formatDigit = (value: number): string => value.toString().padStart(2, "0");

// Set your target date here
const TARGET_DATE = new Date().getTime() + 100 * 24 * 60 * 60 * 1000; // 100 days from now

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(TARGET_DATE - new Date().getTime());

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

  const renderDigits = (value: number) =>
    formatDigit(value).split("").map((digit, idx) => (
      <div
        key={idx}
        className="bg-[#BDEDFF] rounded-md w-12 h-16 flex items-center justify-center"
      >
        <p className="text-[#E26626] font-bold text-4xl">{digit}</p>
      </div>
    ));

  const timeSections = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {timeSections.map((section) => (
        <div key={section.label} className="px-2 py-2">
          <div className="flex gap-2">
            {renderDigits(section.value)}
          </div>
          <p className="font-bold uppercase text-xl text-black text-center">
            {section.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountDown;
