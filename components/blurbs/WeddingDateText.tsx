import classNames from "classnames";

interface Props {
  className?: string;
}

export function WeddingDateText({ className }: Props) {
  const classes = classNames(
    "px-8 pb-4 text-3xl text-center sm:text-5xl font-great-vibes",
    className
  );
  return <div className={classes}>September 9, 2022</div>;
}
