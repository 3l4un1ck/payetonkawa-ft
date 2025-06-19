'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-[#0f0120] to-[#1c0633] text-white min-h-screen flex items-center px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
                {/* Left Text Content */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        <span className="block">Collect Next</span>
                        <span className="text-purple-400">Generation Products</span>
                        <span className="block mt-2">Today</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-300 mt-6">
                        Discover exclusive tech products and futuristic gadgets that you can truly call yours.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-full font-semibold text-white shadow-lg">
                        Shop Now
                    </button>
                </motion.div>

                {/* Right Image & Tag */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <Image
                        src="/images/project03.png"
                        alt="Hero"
                        width={700}
                        height={700}
                        className="rounded-3xl shadow-2xl mt-9"/>

                    {/*/!* Floating Badge *!/*/}
                    {/*<motion.div*/}
                    {/*    initial={{ scale: 0.8, opacity: 0 }}*/}
                    {/*    animate={{ scale: 1, opacity: 1 }}*/}
                    {/*    transition={{ duration: 0.5, delay: 0.6 }}*/}
                    {/*    className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm"*/}
                    {/*>*/}
                    {/*    🚀 Current Deal: <strong>$199</strong>*/}
                    {/*</motion.div>*/}
                </motion.div>
            </div>
        </section>
    );
}
