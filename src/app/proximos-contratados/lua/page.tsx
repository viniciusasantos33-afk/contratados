'use client';

import Image from "next/image";
import { useProfileClick } from "@/contexts/ProfileClickContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const profile = {
  name: "A Lua",
  slug: "lua",
  age: " ",
  role: "Supervisora",
  description:
    '<p><a class="text-green-400 underline text-bold" href="#">A</a> nossa querida supervisora, está disposta a tirar dúvidas em tempo real para ajudar novos e velhos integrantes! Uma alma doce e carismática que  <span class="bg-white text-white select-none"> se salvou dos pensamentos desgraçados de nos expor, na verdade, ela devia estar morta, foi salva por causa do Lucas, outro traidor, </span> é <span class="bg-white text-white select-none"> um absurdo como ela não entendia a </span> verdadeira <span class="bg-white text-white select-none"> forma de se conduzir a sociedade, </span> seu nome <span class="bg-white text-white select-none"> foi trocado por algo que </span> é <span class="bg-white text-white select-none"> mais </span> belo, por representar nossa verdadeira função: Enxergar de cima o que não era visto antes.</p>',
  status: "ATIVO",
  image: "/Lua.png",
};

export default function ProfilePage() {
  const { addClickedProfile } = useProfileClick();
  const router = useRouter();

  const handleDescriptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
      addClickedProfile(profile.slug);
      // Forçar a navegação para a página de ajuda com a lógica de "finished"
      router.push('/ajuda?finished=true');
    }
  };

  const handleEyeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      addClickedProfile(profile.slug);
      router.push('/ajuda?finished=true');
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 font-mono text-glitch">
      <div className="flex justify-center mb-8 align-center">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="my-4"
        />
      </div>

      <div className="text-center my-8">
        <h1 className="text-4xl text-sans font-bold text-glitch" data-text={profile.name.toUpperCase()}>
          {profile.name.toUpperCase()}
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="p-0.5 bg-gradient-to-b from-gray-300 to-gray-600">
          <Image
            src={profile.image}
            width={250}
            height={150}
            alt={profile.name}
            className="bg-black"
          />
        </div>

        <div className="my-1">
          <Link href="/ajuda" onClick={handleEyeClick}>
            <Image
              src="/eye.png"
              width={200}
              height={100}
              alt="Small Logo"
            />
          </Link>
        </div>

        <div
          className="my-4 text-justify max-w-xl mx-auto text-sm"
          onClick={handleDescriptionClick}
          dangerouslySetInnerHTML={{ __html: profile.description }}
        />

        <div className="my-4 flex justify-center">
           <iframe
              className="w-full h-full aspect-video border-t border-gray-600 bg-gradient-to-b from-gray-800 to-black"
              src="https://www.youtube.com/embed/L92LxPJpUK0?si=GV-K_szEf_XWkivk"
              title="YouTube video player"
              width="560"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>

        <h2 className="text-4xl font-sans my-8 font-bold text-glitch" data-text="PRECISA DE AJUDA?">PRECISA DE AJUDA?</h2>

        <Image src="/help.png" width={400} height={100} alt="Small Logo" />

        <a href="/ajuda" onClick={handleEyeClick} className="my-4 text-center text-foreground/80 max-w-xl mx-auto text-xl cursor-pointer">
          Entre em contato com a nossa supervisora clicando na lua acima ou na
          do canto superior direito!
        </a>
      </div>
    </div>
  );
}
