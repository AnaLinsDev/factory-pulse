type Props = {
  title: string;
  value: number | undefined;
  className: string;
};

export default function CardMetric({ title, value, className }: Props) {
  return (
    <div
      className={`lg:p-4 lg:block p-2 flex justify-around rounded-xl bg-card shadow-sm ${className}`}
    >
      <p className="my-auto  text-sm opacity-70">{title}</p>
      <h2 className="text-lg lg:text-2xl font-bold">{value}</h2>
    </div>
  );
}
