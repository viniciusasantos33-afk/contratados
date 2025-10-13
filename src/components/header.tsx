'use client';

import Link from 'next/link';
import { Eye, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/services', label: 'Serviços' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
];

const Logo = () => (
    <div className="flex items-center gap-4">
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-white"
      >
        <path
          d="M24 38C15.1634 38 8 30.8366 8 22C8 13.1634 15.1634 6 24 6C32.8366 6 40 13.1634 40 22C40 30.8366 32.8366 38 24 38ZM24 42C35.0457 42 44 33.0457 44 22C44 10.9543 35.0457 2 24 2C12.9543 2 4 10.9543 4 22C4 33.0457 12.9543 42 24 42Z"
        />
        <path d="M24 32C29.5228 32 34 27.5228 34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22C14 27.5228 18.4772 32 24 32Z" />
      </svg>
      <span className="text-xl font-bold uppercase tracking-widest text-glitch" data-text="CONTRATADOS">
        CONTRATADOS
      </span>
    </div>
  );

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Acompanhe">
            <Eye className="h-5 w-5" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-accent/50 bg-background">
              <div className="grid gap-6 py-6">
                <Link href="/" onClick={() => setOpen(false)} className="mb-4">
                  <Logo />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-lg text-foreground/80 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
