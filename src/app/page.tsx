'use client'
import HomeView from '@/presentation/views/HomeView';
import Layout from "@/presentation/components/Layout";
import React from "react";
import {Toaster} from "sonner";

export default function HomePage() {

  return(
      <Layout>
          <Toaster richColors />
          <HomeView />
      </Layout>
  );
}
