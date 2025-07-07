"use client";

import { FaShippingFast, FaShieldAlt, FaHeadset, FaUndoAlt } from "react-icons/fa";

export default function PourquoiNousChoisir() {
    const items = [
        {
            icon: <FaShippingFast className="text-white text-2xl" />,
            bg: "#2196F3", // bleu
            title: "Livraison Rapide",
            desc: "Expédition sous 24h partout en France",
        },
        {
            icon: <FaShieldAlt className="text-white text-2xl" />,
            bg: "#2ECC71", // vert
            title: "Garantie Qualité",
            desc: "Produits testés et garantis 2 ans",
        },
        {
            icon: <FaHeadset className="text-[#f1c40f] text-2xl" />,
            bg: "#FFF8E7", // beige clair
            title: "Support 24/7",
            desc: "Service client disponible à tout moment",
        },
        {
            icon: <FaUndoAlt className="text-[#8e44ad] text-2xl" />,
            bg: "#F5EAFE", // violet clair
            title: "Retour Gratuit",
            desc: "30 jours pour changer d'avis",
        },
    ];

    return (
        <section className="py-12  text-center" style={{ backgroundColor: "#fbf8f5" }}>
            <h2 className="text-3xl font-bold text-[#1f2a37] mb-10">Pourquoi Nous Choisir ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <div
                            className="w-16 h-16 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: item.bg }}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-[#1f2a37]">{item.title}</h3>
                        <p className="text-sm text-[#6b7280] max-w-[220px]">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
