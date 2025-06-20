'use client';

import {motion} from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative bg-white text-[#6F4E37] min-h-screen flex items-center px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
                {/* Left Text Content */}
                <motion.div
                    initial={{x: -80, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8}}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        <span className="block">Café frais,</span>
                        <span className="text-[#d7b899]">Grains torréfiés,</span>
                        <span className="block mt-2">Ambiance café</span>
                    </h1>
                    <p className="text-sm md:text-base text-[#8d735a] mt-6 mb-8">
                        Découvrez des Cafés d'Exception Torréfiés avec Passion
                    </p>
                    <Link href="/shop"
                        className=" px-6 py-3 bg-[#6F4E37] hover:bg-[#b08b5c] transition rounded-full font-semibold text-white shadow-lg">
                        Découvrir nos cafés
                    </Link>
                </motion.div>

                {/* Right Image & Tag */}
                <motion.div
                    initial={{x: 80, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="relative"
                >
                    <Image
                        src="/images/hero1.png"
                        alt="Hero"
                        width={700}
                        height={700}
                        className="rounded-3xl shadow-2xl mt-9"
                    />
                </motion.div>
            </div>
        </section>
    );
}