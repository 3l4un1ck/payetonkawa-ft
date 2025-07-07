'use client';

import React from 'react';
import Layout from "@/presentation/components/Layout";
import About from "@/presentation/components/About";
import PourquoiNousChoisir from "@/presentation/components/Wcu";
import Newsletter from "@/presentation/components/Newsletter";


export default function AboutPage() {
    return (
        <Layout>
            <About />
            <PourquoiNousChoisir />
            <Newsletter/>
        </Layout>
    );
}