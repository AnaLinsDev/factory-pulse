import Skeleton from "../Skeleton";

type Props = {
  title: string;
  value: number | undefined;
  className?: string;
  loading: boolean;
};

export default function CardMetric({
  title,
  value,
  className = "",
  loading,
}: Props) {
  const containerClass =
    `lg:p-4 lg:block p-2 flex justify-around rounded-xl bg-card shadow-sm ${className}`;

  if (loading) {
    return (
      <div className={containerClass}>
        <Skeleton className="h-4 w-20 mb-1" />
        <Skeleton className="h-6 w-16" />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <p className="my-auto text-sm opacity-70">{title}</p>
      <h2 className="text-lg lg:text-2xl font-bold">
        {value ?? "--"}
      </h2>
    </div>
  );
}