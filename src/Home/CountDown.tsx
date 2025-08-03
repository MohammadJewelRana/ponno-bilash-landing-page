import { useEffect, useState } from "react";

// Helper function to format time values as 2-digit strings
const formatDigit = (value: number): string => value.toString().padStart(2, "0");

// Set your start and end dates here (use exact date strings or timestamps)
const START_DATE = new Date("2025-08-03T00:00:00").getTime();
const END_DATE = new Date("2025-08-03T00:00:00").getTime(); // For example, 99 days after start

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      setNow(currentTime);

      if (currentTime >= START_DATE && currentTime <= END_DATE) {
        setTimeLeft(END_DATE - currentTime);
      } else {
        setTimeLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (now < START_DATE) {
    return (
      <div className="text-center p-6">
        <p className="text-xl font-semibold text-gray-700">
          Countdown will start on{" "}
          <span className="text-blue-600 font-bold">
            {new Date(START_DATE).toLocaleString()}
          </span>
        </p>
      </div>
    );
  }

if (now > END_DATE) {
  return (
    <div className="text-center p-6">
      <p className="text-2xl font-extrabold text-red-600 mb-2">
        Estimated Timeframe Has Passed
      </p>
      <p className="text-gray-700 text-lg">
        We appreciate your patience. Our website will be launching very soon!
      </p>
    </div>
  );
}




  // Calculate remaining time
  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const timeSections = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  const renderDigits = (value: number) =>
    formatDigit(value).split("").map((digit, idx) => (
      <div
        key={idx}
        className="bg-[#BDEDFF] rounded-md w-14 h-14 flex items-center justify-center"
      >
        <p className="text-[#E26626] font-bold text-4xl">{digit}</p>
      </div>
    ));

  return (
    <div className="px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 justify-center items-center">
        {timeSections.map((section) => (
          <div
            key={section.label}
            className="px-2 py-2 flex flex-col items-center border-2 border-sky-100 rounded-md bg-sky-50"
          >
            <div className="flex gap-2">{renderDigits(section.value)}</div>
            <p className="font-bold uppercase text-xl text-black text-center pt-2">
              {section.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
