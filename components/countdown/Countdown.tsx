import classNames from "classnames";
import { useCountdown } from "hooks";
import { DateTimeDisplay } from "./DateTimeDisplay";

interface Props {
  targetTime: Date;
  className?: string;
}

export function Countdown({ targetTime, className }: Props) {
  const { days, hours, minutes, seconds } = useCountdown(targetTime);

  const classes = classNames("flex gap-6", className);

  return (
    <div className={classes}>
      <DateTimeDisplay value={days} type="days" />
      <DateTimeDisplay value={hours} type="hours" />
      <DateTimeDisplay value={minutes} type="minutes" />
      <DateTimeDisplay value={seconds} type="seconds" />
    </div>
  );
}

export default Countdown;
