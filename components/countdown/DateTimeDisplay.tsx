interface Props {
  value: number;
  type: string;
}

export function DateTimeDisplay({ value, type }: Props) {
  return (
    <div className="flex flex-col text-lg">
      <span data-testid={`countdown-${type}`}>{value}</span>
      <span>{type}</span>
    </div>
  );
}
