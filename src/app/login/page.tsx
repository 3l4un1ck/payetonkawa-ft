"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";
import { ApiCustomerRepository } from "../../infrastructure/repositories/ApiCustomerRepository";
import { LoginCustomer } from "../../application/usecases/LoginCustomer";

const customerRepository = new ApiCustomerRepository();
const loginCustomer = new LoginCustomer(customerRepository);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const { token } = await loginCustomer.execute(email, password);
      login(token);
      router.push("/orders");
    } catch (err: any) {
      setError(err.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7efe6] flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#6F4E37] mb-6 text-center">
          Connexion à votre compte
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#6F4E37] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#d7b899] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b08b5c] bg-[#fdfbf9] text-[#4b3621]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6F4E37] mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#d7b899] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b08b5c] bg-[#fdfbf9] text-[#4b3621]"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#d7b899] hover:bg-[#b08b5c] text-[#6F4E37] font-semibold py-2 px-4 rounded-md transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm text-[#6F4E37] mt-4">
          Pas encore de compte ?{" "}
          <a href="/register" className="underline hover:text-[#b08b5c] font-medium">
            Inscription
          </a>
        </p>
      </div>
    </div>
  );
}
