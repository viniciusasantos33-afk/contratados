import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import StarryBackground from '@/components/starry-background';
import Footer from '@/components/footer';
import { ProfileClickProvider } from '@/contexts/ProfileClickContext';

export const metadata: Metadata = {
  title: 'Contratados',
  description: 'Um site de terror sobre uma agência clandestina.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head />
      <body className="font-body antialiased">
        <ProfileClickProvider>
          <StarryBackground />
          <div className="crt-effect relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ProfileClickProvider>
      </body>
    </html>
  );
}
