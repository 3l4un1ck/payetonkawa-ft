'use client';

import React, {ReactNode} from 'react';
import Navbar from "@/presentation/components/NavBar";
import Footer from "@/presentation/components/Footer";


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

            <Footer/>
        </div>
    );
}