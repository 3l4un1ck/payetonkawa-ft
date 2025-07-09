import { CustomerRepository } from '../../domain/repositories/CustomerRepository';
import { Customer } from '../../domain/entities/Customer';
import { fetcher } from '../http/fetcher';

export class ApiCustomerRepository implements CustomerRepository {
  async login(email: string, password: string): Promise<{ token: string }> {
    return fetcher<{ token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(customer: Customer): Promise<{ token: string }> {
    return fetcher<{ token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  }

  async getProfile(token: string): Promise<Customer> {
    return fetcher<Customer>('/auth/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
} 