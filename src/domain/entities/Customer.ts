export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface Customer {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Address;
} 