import { Customer } from "../entities/Customer";

export interface CustomerRepository {
  login(email: string, password: string): Promise<{ token: string }>;
  register(customer: Customer): Promise<{ token: string }>;
  getProfile(token: string): Promise<Customer>;
} 