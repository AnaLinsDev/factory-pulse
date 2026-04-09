import { Order } from "@/types/Order";
import CardOrder from "./CardOrder";

type Props = {
  orders: Order[];
  limit: number;
};

export default function OrdersComponent({ orders, limit = 8 }: Props) {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-2">Orders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
        {orders.slice(0, limit).map((o) => (
          <CardOrder
            key={o.id}
            id={o.id}
            product={o.product}
            status={o.status}
            produced={o.produced}
            quantity={o.quantity}
            updatedAt={o.updatedAt}
          />
        ))}
      </div>
    </div>
  );
}
