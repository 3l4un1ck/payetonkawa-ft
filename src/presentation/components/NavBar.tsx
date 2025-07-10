'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Coffee } from 'lucide-react';
import { useCartStore } from "@/store/cartStore";

const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'A propos', href: '/about' },
    { label: 'Nos produits', href: '/shop' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80); // à ajuster selon la hauteur de ta HeroSection
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [open, setOpen] = useState(false);
    const { items } = useCartStore();
    const total = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
            scrolled ? 'bg-white text-[#2e1e12] shadow-md' : 'bg-black/20 text-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-[#6F4E37] p-2 rounded-md">
                        <Coffee className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold text-[#6F4E37]">Payeton Kawa</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 font-medium text-2xl ${scrolled ? 'text-[#2e1e12]' : 'text-white' }">
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className="hover:text-[#d7b899]">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right: Cart + Join Now */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/cart" className="relative ${scrolled ? 'text-[#2e1e12]' : 'text-white' } opacity-70 hover:opacity-100">
                        <ShoppingCart size={20} />
                        {total > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {total}
              </span>
                        )}
                    </Link>
                    <Link
                        href="/login"
                        className="bg-[#6F4E37] hover:bg-[#8d6140] text-white px-4 py-2 rounded-md text-sm font-semibold"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <Link href="/cart" className="relative opacity-70 hover:opacity-100">
                        <ShoppingCart size={20} />
                        {total > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {total}
              </span>
                        )}
                    </Link>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-[#6F4E37] text-white flex flex-col gap-4 px-4 py-6"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="hover:text-[#d7b899]"
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="bg-[#d7b899] hover:bg-[#b08b5c] px-4 py-2 rounded-full text-sm text-[#6F4E37] font-semibold mt-4"
                    >
                        Join Now
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
