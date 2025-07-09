"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";
import { ApiOrderRepository } from "../../infrastructure/repositories/ApiOrderRepository";
import { GetCustomerOrders } from "../../application/usecases/GetCustomerOrders";
import { Order } from "../../domain/entities/Order";

const orderRepository = new ApiOrderRepository();
const getCustomerOrders = new GetCustomerOrders(orderRepository);

export default function OrdersPage() {
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated || !token) {
      router.replace("/login");
      return;
    }
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getCustomerOrders.execute(token);
        setOrders(data);
      } catch (err: any) {
        setError(err.message || "Erreur lors du chargement des commandes");
      } finally {
        setLoading(false);
      }
    })();
  }, [isAuthenticated, token, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#f7efe6] py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-[#6F4E37] mb-6 text-center">Mes Commandes</h2>

        {loading && <div className="text-center text-[#6F4E37]">Chargement...</div>}

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        {!loading && orders.length === 0 && (
          <div className="text-center text-[#6F4E37]">Aucune commande trouvée.</div>
        )}

        {!loading && orders.length > 0 && (
          <ul className="space-y-6">
            {orders.map((order) => (
              <li key={order.id} className="border border-[#d7b899] rounded-md p-4 bg-[#fdfbf9]">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-[#4b3621]">
                    Commande #{order.id}
                  </span>
                  <span className="text-sm text-[#6F4E37]">
                    {new Date(order.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="text-[#6F4E37] mb-2">
                  <span className="font-medium">Statut :</span> {order.status}
                </div>
                <div className="text-[#6F4E37] mb-2">
                  <span className="font-medium">Total :</span> {order.total.toFixed(2)} €
                </div>

                <ul className="pl-4 list-disc text-[#4b3621]">
                  {order.items.map((item) => (
                    <li key={item.productId} className="text-sm">
                      {item.name} x{item.quantity} – {item.price.toFixed(2)} €/u
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
