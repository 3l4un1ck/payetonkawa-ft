'use client';

import React from 'react';
import Layout from "@/presentation/components/Layout";
import About from "@/presentation/components/About";


export default function AboutPage() {
    return (
        <Layout>
            {/* Add any additional content/components here */}
            <section className="py-12 text-center">
                <h1 className="text-5xl font-bold text-purple-400">
                    Welcome to PayetonKawa
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                    Discover. Connect. Grow with us.
                </p>
            </section>

            {/* Example of using the About component */}
            <About />
        </Layout>
    );
}