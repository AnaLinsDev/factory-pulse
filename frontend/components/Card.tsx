import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string | undefined;
};

export default function Card({ children, className }: Props) {
  return (
    <div className={`p-4 rounded-xl shadow border ${className}`}>
      {children}
    </div>
  );
}
