'use client';
import React, { useEffect, useState } from 'react';
import HeroSection from "@/presentation/components/HeroSection";
import Navbar from "@/presentation/components/NavBar";
import Products from "@/presentation/components/Products";
import About from "@/presentation/components/About";
import CustomerReviews from "@/presentation/components/CustomerReviews";
import PromoGrid from "@/presentation/components/PromoGrid";
import ProductCategories from "@/presentation/components/ProductCategories";

export default function HomeView() {

    return (
        <>
            <Navbar/>
            <HeroSection />
            <About/>
            <ProductCategories/>
            <Products/>
            <PromoGrid/>
            <CustomerReviews/>
        </>
    );
}
