'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="bg-[#0b0122] text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center mb-6">
                    About <span className="text-purple-400">Us</span>
                </h2>

                <p className="text-center text-lg text-gray-300 mb-12">
                    Learn more about who we are, our mission, and what we strive to achieve.
                </p>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Section - Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-md w-full md:w-1/2 max-h-[400px]">
                        <Image
                            src="/about-image.jpg" // Replace this with the actual image path you want to use
                            alt="About Us"
                            layout="fill"
                            objectFit="cover"
                            quality={85}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Who We Are
                        </h3>
                        <p className="text-gray-300 mb-4">
                            We are a passionate team dedicated to delivering innovative solutions that make life better for the people we serve. Our vision is to create a future where technology brings communities closer together.
                        </p>
                        <p className="text-gray-300">
                            At the heart of everything we do is our commitment to excellence, innovation, and integrity. Join us as we continue to grow and make a lasting impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}