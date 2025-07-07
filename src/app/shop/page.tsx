'use client';

import React from 'react';
import Layout from "@/presentation/components/Layout";
import Newsletter from "@/presentation/components/Newsletter";
import BannerWithBreadcrumb from "@/presentation/components/BannerWithBreadcrumb";
import ProductCategories from "@/presentation/components/ProductCategories";
import AllProducts from "@/presentation/components/AllProducts";


export default function ShopPage() {
    return (
        <Layout>
            <BannerWithBreadcrumb
                title="Shop"
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Shop" }
                ]}
            />
            <ProductCategories/>
            <AllProducts/>
            <Newsletter/>
        </Layout>
    );
}