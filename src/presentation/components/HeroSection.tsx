'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { Play } from 'lucide-react'; // Ou un autre icône si tu préfères

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

            {/* Background image + overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/photo-cafe.png"
                    alt="Coffee ambiance"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col-reverse lg:flex-row items-center justify-between">

                {/* Left Text Content */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                        <span className="block">Café frais,</span>
                        <span className="text-[#d7b899]">Grains torréfiés,</span>
                        <span className="block mt-2">Ambiance café</span>
                    </h1>
                    <p className="text-base text-white/80 mt-6 mb-8">
                        Découvrez des Cafés d'Exception Torréfiés avec Passion
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <Link
                            href="/shop"
                            className="px-6 py-3 bg-[#d7b899] text-[#1a120b] hover:bg-[#c9a774] transition rounded-full font-semibold shadow-lg"
                        >
                            Découvrir nos cafés
                        </Link>

                        <Link
                            href="/video"
                            className="flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded-full hover:bg-white/10 transition"
                        >
                            <Play size={18} />
                            Voir la vidéo
                        </Link>
                    </div>
                </motion.div>

                {/* Right Image with rotation & shadow */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9,  }}
                    className="mt-10 lg:mt-0"
                >
                    <Image
                        src="/images/hero1.png"
                        alt="Coffee Shop"
                        width={600}
                        height={400}
                        className="rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}
