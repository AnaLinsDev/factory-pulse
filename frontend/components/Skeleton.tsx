type Props = { className?: string };

export default function Skeleton({ className = "" }: Props) {
  return (
    <div className={`w-50 ${className}`}>
      <div className="h-4 w-20 mb-1 bg-gray-300 dark:bg-gray-300 animate-pulse rounded" />
      <div className="h-6 w-16 bg-gray-300 dark:bg-gray-300 animate-pulse rounded" />
    </div>
  );
}
