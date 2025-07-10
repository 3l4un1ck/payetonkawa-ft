import { CustomerRepository } from '@/domain/repositories/CustomerRepository';
import { Customer } from '@/domain/entities/Customer';

const STORAGE_KEY = 'payetonkawa_customers';

function getAllCustomers(): Customer[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAllCustomers(customers: Customer[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
}

export class LocalCustomerRepository implements CustomerRepository {
  async register(customer: Customer): Promise<{ token: string }> {
    const customers = getAllCustomers();
    if (customers.find(c => c.email === customer.email)) {
      throw new Error('Cet email est déjà utilisé');
    }
    customers.push(customer);
    saveAllCustomers(customers);
    return { token: customer.email }; // On simule le token avec l'email
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const customers = getAllCustomers();
    const user = customers.find(c => c.email === email && c.password === password);
    if (!user) throw new Error('Email ou mot de passe incorrect');
    return { token: user.email };
  }

  async getProfile(token: string): Promise<Customer> {
    const customers = getAllCustomers();
    const user = customers.find(c => c.email === token);
    if (!user) throw new Error('Utilisateur non trouvé');
    return user;
  }
}