'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import {Menu, X, ShoppingCart, User} from 'lucide-react';
import {useCartStore} from "@/store/cartStore";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Shop', href: '/shop'},
    {label: 'Contact', href: '/contact'},
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const {items} = useCartStore();
    const total = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="w-full bg-[#6F4E37] text-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-wide">
                    <span className="text-[#6F4E37] bg-white px-1 rounded">Paye</span>ton<span
                    className="text-[#6F4E37] bg-white px-1 rounded">Kawa</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className="hover:text-[#d7b899]">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Icons and CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/cart" className="hover:text-[#d7b899] relative">
                        <ShoppingCart size={20}/>
                        {total > 0 && (
                            <span
                                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                                    {total}
                                </span>
                        )}
                    </Link>
                    <Link href="/auth" className="hover:text-[#d7b899]">
                        <User size={20}/>
                    </Link>
                    <button
                        className="bg-[#d7b899] hover:bg-[#b08b5c] px-4 py-2 rounded-full text-sm text-[#6F4E37] font-semibold">
                        Join Now
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-4">
                    <Link href="/cart" className="relative">
                        <ShoppingCart size={20} className="w-6 h-6"/>
                        {total > 0 && (
                            <span
                                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                                    {total}
                                </span>
                        )}
                    </Link>
                    <Link href="/auth" className="hover:text-[#d7b899]">
                        <User size={20}/>
                    </Link>
                    <button onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{height: 0}}
                    animate={{height: 'auto'}}
                    transition={{duration: 0.3}}
                    className="md:hidden bg-[#6F4E37] flex flex-col gap-4 px-4 py-6"
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
                    <button
                        className="bg-[#d7b899] hover:bg-[#b08b5c] px-4 py-2 rounded-full text-sm text-[#6F4E37] font-semibold mt-4">
                        Join Now
                    </button>
                </motion.div>
            )}
        </nav>
    );
}