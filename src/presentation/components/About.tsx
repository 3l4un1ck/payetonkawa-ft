'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="bg-gray-50 text-[#6F4E37] py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center mb-6">
                    About <span className="text-[#d7b899]">Us</span>
                </h2>

                <p className="text-center text-lg text-[#8d735a] mb-12">
                    Learn more about who we are, our mission, and what we strive to achieve.
                </p>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Section - Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-md w-full md:w-1/2 max-h-[400px]">
                        <Image
                            src="/images/coffee.png"
                            alt="About Us"
                            width={700}
                            height={700}
                            className=""
                        />
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Who We Are
                        </h3>
                        <p className="text-[#8d735a] mb-4">
                            We are a passionate team dedicated to delivering innovative solutions that make life better
                            for the people we serve. Our vision is to create a future where technology brings
                            communities closer together.
                        </p>
                        <p className="text-[#8d735a]">
                            At the heart of everything we do is our commitment to excellence, innovation, and integrity.
                            Join us as we continue to grow and make a lasting impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}