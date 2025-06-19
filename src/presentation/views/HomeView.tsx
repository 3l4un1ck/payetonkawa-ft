'use client';
import React, { useEffect, useState } from 'react';
import { Product } from '@/domain/entities/Product';
import { ProductService } from '@/application/services/ProductService';
import {mockProducts} from "@/shared/mocks/products";
import HeroSection from "@/presentation/components/HeroSection";
import Navbar from "@/presentation/components/NavBar";
import Products from "@/presentation/components/Products";
import About from "@/presentation/components/About";

export default function HomeView() {
    // const [products, setProducts] = useState<Product[]>([]);
    //
    // useEffect(() => {
    //     ProductService.getAll().then(setProducts);
    // }, []);

    return (
        <>
            <Navbar/>
            <HeroSection />
            <About/>
            <Products/>
        </>
    );
}
