'use client';

import React, { ReactNode } from 'react';
import Navbar from "@/presentation/components/NavBar";


type LayoutProps = {
    children: ReactNode; // Allows the Layout to wrap other components
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-[#0b0122] text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer (Optional, if needed later) */}
            <footer className="py-4 bg-[#12032c] text-center text-sm text-gray-400">
                © 2025 PayetonKawa. All Rights Reserved.
            </footer>
        </div>
    );
}