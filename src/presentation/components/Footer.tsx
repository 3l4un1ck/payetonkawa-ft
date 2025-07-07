"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#6F4E37] text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo / Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">PayetonKawa</h2>
                    <p className="text-sm">
                        Le meilleur du café en grain, sélectionné avec soin pour les amateurs de qualité. Livraison rapide et service client au top.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Accueil</a></li>
                        <li><a href="/produits" className="hover:underline">Produits</a></li>
                        <li><a href="/a-propos" className="hover:underline">À propos</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>Email : <a href="mailto:support@payetonkawa.fr" className="underline">support@payetonkawa.fr</a></li>
                        <li>Adresse : 123 Rue du Café, Paris</li>
                        <li>Téléphone : 01 23 45 67 89</li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
                    <div className="flex gap-4 text-white text-lg">
                        <a href="#" className="hover:text-[#b08b5c]"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#b08b5c]"><FaInstagram /></a>
                        <a href="#" className="hover:text-[#b08b5c]"><FaTwitter /></a>
                        <a href="mailto:support@payetonkawa.fr" className="hover:text-[#b08b5c]"><FaEnvelope /></a>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 text-xs border-t border-[#b08b5c] bg-[#4b3621]">
                © 2025 PayetonKawa. Tous droits réservés.
            </div>
        </footer>
    );
}
