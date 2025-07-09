export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt: string;
} 