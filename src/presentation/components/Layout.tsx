'use client';

import React, {ReactNode} from 'react';
import Navbar from "@/presentation/components/NavBar";


type LayoutProps = {
    children: ReactNode; // Allows the Layout to wrap other components
};

export default function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-white text-[#6F4E37]">
            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="py-4 bg-[#6F4E37] text-center text-sm text-white">
                © 2025 PayetonKawa. All Rights Reserved.
            </footer>
        </div>
    );
}