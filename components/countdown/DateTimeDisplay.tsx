interface Props {
  value: number;
  type: string;
}

export function DateTimeDisplay({ value, type }: Props) {
  return (
    <div className="text-lg">
      <p>{value}</p>
      <p>{type}</p>
    </div>
  );
}
