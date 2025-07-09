import { Customer } from "../../domain/entities/Customer";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";

export class RegisterCustomer {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(customer: Customer) {
    return this.customerRepository.register(customer);
  }
} 