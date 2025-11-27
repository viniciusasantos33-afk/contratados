'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/proximos-contratados', label: 'Contratados Próximos' },
  { href: '/proxima-localizacao', label: 'Próxima Localização' },
  { href: '/ajuda', label: 'AJUDA' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-l-accent/50 bg-background">
              <div className="grid gap-6 py-6">
                <Link href="/" onClick={() => setOpen(false)} className="mb-4">
                  <Image
                    src="/logo.png"
                    width={200}
                    height={200}
                    alt="Logo"
                    className="my-4"
                  />
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

        <div className="flex items-center gap-2">
        <Link href="/ajuda" passHref>
          <Button variant="ghost" size="icon" aria-label="Acompanhe">
            <Image 
            width={48}
            height={48}
            alt='phone'
            src="/phone.png"
            />
          </Button>
          </Link>


        </div>
      </div>
    </header>
  );
}
