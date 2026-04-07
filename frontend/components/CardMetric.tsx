type Props = {
  title: string;
  value: number | undefined;
};

export default function CardMetric({ title, value }: Props) {
  return (
    <div className="p-4 rounded-xl shadow border">
      <p className="text-sm font-bold">{title}</p>
      <p className="font-bold">{value ?? "-"}</p>
    </div>
  );
}
