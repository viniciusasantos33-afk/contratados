'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import React from 'react';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogPage = pathname === '/proximos-contratados/blog-da-lua';

  return (
    <>
      {!isBlogPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isBlogPage && <Footer />}
      <Toaster />
    </>
  );
}
