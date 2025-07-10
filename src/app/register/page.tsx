"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";
import { LocalCustomerRepository } from "../../infrastructure/repositories/LocalCustomerRepository";
import { RegisterCustomer } from "../../application/usecases/RegisterCustomer";
import { Customer } from "../../domain/entities/Customer";

const customerRepository = new LocalCustomerRepository();
const registerCustomer = new RegisterCustomer(customerRepository);

const initialAddress = {
  street: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState<Omit<Customer, 'address'> & { address: typeof initialAddress }>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: initialAddress,
  });

  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);
  const setCustomer = useAuthStore((state) => state.setCustomer);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [name.split(".")[1]]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const { token } = await registerCustomer.execute(form as Customer);
      login(token);
      const profile = await customerRepository.getProfile(token);
      setCustomer(profile);
      router.push("/orders");
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7efe6] flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-[#6F4E37] mb-6 text-center">
          Créer un compte
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#6F4E37]">Prénom</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange}
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621] focus:outline-none focus:ring-2 focus:ring-[#b08b5c]" required />
            </div>
            <div>
              <label className="block text-sm text-[#6F4E37]">Nom</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange}
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621] focus:outline-none focus:ring-2 focus:ring-[#b08b5c]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#6F4E37]">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621] focus:outline-none focus:ring-2 focus:ring-[#b08b5c]" required />
          </div>

          <div>
            <label className="block text-sm text-[#6F4E37]">Mot de passe</label>
            <input type="password" name="password" value={form.password} onChange={handleChange}
              className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621] focus:outline-none focus:ring-2 focus:ring-[#b08b5c]" required />
          </div>

          <div>
            <label className="block text-sm text-[#6F4E37]">Téléphone</label>
            <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange}
              className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621] focus:outline-none focus:ring-2 focus:ring-[#b08b5c]" required />
          </div>

          <div className="pt-4">
            <h3 className="text-md font-semibold text-[#6F4E37] mb-2">Adresse</h3>
            <div className="space-y-3">
              <input type="text" name="address.street" value={form.address.street} onChange={handleChange}
                placeholder="Rue"
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621]" required />
              <input type="text" name="address.city" value={form.address.city} onChange={handleChange}
                placeholder="Ville"
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621]" required />
              <input type="text" name="address.state" value={form.address.state} onChange={handleChange}
                placeholder="Région"
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621]" required />
              <input type="text" name="address.country" value={form.address.country} onChange={handleChange}
                placeholder="Pays"
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621]" required />
              <input type="text" name="address.postalCode" value={form.address.postalCode} onChange={handleChange}
                placeholder="Code postal"
                className="w-full px-4 py-2 border border-[#d7b899] rounded-md bg-[#fdfbf9] text-[#4b3621]" required />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#d7b899] hover:bg-[#b08b5c] text-[#6F4E37] font-semibold py-2 px-4 rounded-md transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center text-sm text-[#6F4E37] mt-4">
          Déjà un compte ?{" "}
          <a href="/login" className="underline hover:text-[#b08b5c] font-medium">
            Connexion
          </a>
        </p>
      </div>
    </div>
  );
}
function setCustomer(profile: Customer) {
  throw new Error("Function not implemented.");
}

