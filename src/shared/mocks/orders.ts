import { Order } from '@/domain/entities/Order';

export const mockOrders: Order[] = [
  {
    id: '1',
    customerEmail: 'demo@payetonkawa.com',
    createdAt: '2023-07-01',
    total: 49.99,
    status: 'Livré',
    items: [
      {
        productId: '1',
        name: 'Café Arabica',
        quantity: 2,
        price: 14.99
      },
      {
        productId: '2',
        name: 'Mug de café',
        quantity: 1,
        price: 19.99
      }
    ]
  },
  {
    id: '2',
    customerEmail: 'demo@payetonkawa.com',
    createdAt: '2023-06-25',
    total: 29.49,
    status: 'En cours',
    items: [
      {
        productId: '3',
        name: 'Café Colombien',
        quantity: 1,
        price: 14.49
      },
      {
        productId: '4',
        name: 'Thé noir',
        quantity: 2,
        price: 7.50
      }
    ]
  }
]; 