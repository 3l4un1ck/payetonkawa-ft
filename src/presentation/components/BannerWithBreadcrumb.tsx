"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface Props {
    title: string;
    breadcrumbs: Breadcrumb[];
    backgroundImage?: string; // Prop optionnelle pour l'image personnelle
}

export default function BannerWithBreadcrumb({
                                                 title,
                                                 breadcrumbs,
                                                 backgroundImage = "/images/360_F_302513691_zrN6dkSX9cptX3XHzjAzauyLxAzKWI7L.jpg", // Image par défaut
                                             }: Props) {
    return (
        <div
            className="relative py-10 px-6 border-b border-[#d7b899] bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/30"></div> {/* Overlay pour un meilleur contraste */}
            <div className="relative max-w-7xl  mt-16 text-white z-10">
                {/* Titre du banner */}
                <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                    {title}
                </h1>

                {/* Breadcrumbs */}
                <nav className="mt-4 flex items-center text-sm space-x-2">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            {crumb.href ? (
                                <Link href={crumb.href} className="hover:underline">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="font-medium">{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <FaChevronRight className="text-xs" />
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}