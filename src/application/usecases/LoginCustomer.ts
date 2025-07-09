import { CustomerRepository } from "../../domain/repositories/CustomerRepository";

export class LoginCustomer {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(email: string, password: string) {
    return this.customerRepository.login(email, password);
  }
} 