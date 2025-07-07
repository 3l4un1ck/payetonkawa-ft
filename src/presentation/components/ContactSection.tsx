"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="bg-[#f7efe6] py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Infos de contact */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#6F4E37]">Contactez-nous</h2>
                    <p className="text-[#4b3621]">
                        Une question, un besoin particulier ? N'hésitez pas à nous contacter, nous vous répondrons rapidement.
                    </p>
                    <div className="space-y-4 text-[#4b3621]">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#b08b5c]" />
                            <span>support@payetonkawa.fr</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#b08b5c]" />
                            <span>01 23 45 67 89</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#b08b5c]" />
                            <span>123 Rue du Café, Paris, France</span>
                        </div>
                    </div>
                </div>

                {/* Formulaire de contact */}
                <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
                    <div>
                        <label className="block text-[#6F4E37] font-medium mb-1">Nom</label>
                        <input
                            type="text"
                            className="w-full border border-[#d7b899] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b08b5c]"
                            placeholder="Votre nom"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#6F4E37] font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-[#d7b899] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b08b5c]"
                            placeholder="Votre adresse email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#6F4E37] font-medium mb-1">Message</label>
                        <textarea
                            className="w-full border border-[#d7b899] rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#b08b5c]"
                            placeholder="Votre message"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#b08b5c] hover:bg-[#8d735a] text-white font-semibold py-2 px-6 rounded transition"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}
