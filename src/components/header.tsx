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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-glitch text-2xl font-bold uppercase tracking-wider" data-text="CONTRATADOS">
            CONTRATADOS
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
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
                  <span className="text-glitch text-xl font-bold uppercase tracking-wider" data-text="CONTRATADOS">
                    CONTRATADOS
                  </span>
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
