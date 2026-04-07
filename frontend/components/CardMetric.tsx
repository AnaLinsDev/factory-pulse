type Props = {
  title: string;
  value: number | undefined;
  className: string;
};

export default function CardMetric({ title, value, className }: Props) {
  return (
    <div className={`p-4 rounded-xl bg-card shadow-sm ${className}`}>
      <p className="text-sm opacity-70">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
