type Props = { className?: string };

export default function Skeleton({ className = "" }: Props) {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-300 animate-pulse rounded ${className}`}
    />
  );
}
