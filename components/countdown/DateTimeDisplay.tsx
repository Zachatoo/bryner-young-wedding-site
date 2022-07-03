interface Props {
  value: number;
  type: string;
}

export function DateTimeDisplay({ value, type }: Props) {
  return (
    <div className="text-lg">
      <p data-testid={`countdown-${type}`}>{value}</p>
      <p>{type}</p>
    </div>
  );
}
