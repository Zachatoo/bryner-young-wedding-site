interface Props {
  targetDate: Date;
}

export function WeddingDate({ targetDate }: Props) {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedWeddingDate = Intl.DateTimeFormat(
    "en-us",
    dateFormatOptions
  ).format(targetDate);

  return (
    <div className="px-8 pb-4 text-3xl text-center sm:text-5xl font-great-vibes">
      {formattedWeddingDate}
    </div>
  );
}
