import { useEffect, useState } from "react";

const useCountdown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = round(countDown / (1000 * 60 * 60 * 24));
  const hours = round((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = round((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = round((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Round down if positive number, round up if negative number
function round(value: number) {
  if (value > 0) {
    return Math.floor(value);
  }
  return Math.ceil(value);
}

export { useCountdown };
