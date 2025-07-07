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
}

export default function BannerWithBreadcrumb({ title, breadcrumbs }: Props) {
    return (
        <div className="bg-[#f7efe6] py-10 px-6 border-b border-[#d7b899] mt-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#6F4E37]">{title}</h1>

                {/* Breadcrumbs */}
                <nav className="mt-4 flex items-center text-sm text-[#4b3621] space-x-2">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            {crumb.href ? (
                                <Link href={crumb.href} className="hover:underline text-[#8d735a]">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-[#4b3621] font-medium">{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && <FaChevronRight className="text-xs" />}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}
