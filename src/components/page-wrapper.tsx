'use client';

import { usePathname, useRouter } from 'next/navigation';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import React, { useEffect, useState } from 'react';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro && pathname !== '/introducao') {
      router.replace('/introducao');
    } else {
      setIsReady(true);
    }
  }, [pathname, router]);

  const isBlogPage = pathname === '/proximos-contratados/blog-da-lua';
  const isIntroPage = pathname === '/introducao';

  if (!isReady) {
    return null; // ou um componente de loading
  }

  return (
    <>
      {!isBlogPage && !isIntroPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isBlogPage && !isIntroPage && <Footer />}
      <Toaster />
    </>
  );
}
