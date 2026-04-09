import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string | undefined;
};

export default function CardTable({ children, className }: Props) {
  return (
    <div
      className={`p-4 rounded-2xl bg-card shadow-sm border border-white/5 ${className}`}
    >
      {children}
    </div>
  );
}
