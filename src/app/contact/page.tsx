'use client';

import React from 'react';
import Layout from "@/presentation/components/Layout";
import ContactSection from "@/presentation/components/ContactSection";
import BannerWithBreadcrumb from "@/presentation/components/BannerWithBreadcrumb";


export default function AboutPage() {
    return (
        <Layout>
            <BannerWithBreadcrumb
                title="Contact"
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Contact" }
                ]}
            />
            <ContactSection/>
        </Layout>
    );
}