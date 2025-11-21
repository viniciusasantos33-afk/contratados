'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function IntroducaoPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 font-mono text-glitch flex flex-col items-center">
      <div className="flex justify-center mb-8 align-center">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="my-4"
        />
      </div>

      <h1 className="text-4xl text-sans font-bold my-8">Introdução</h1>

      {/* Video Player */}
      <div className="my-8 aspect-w-16 aspect-h-9 w-full max-w-4xl">
        <iframe
          className="w-full h-full aspect-video border-t border-gray-600 bg-gradient-to-b from-gray-800 to-black"
          src="https://www.youtube.com/embed/DFq12_G8pGg" // Vídeo de introdução
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={() => router.push('/ajuda')}
        className="font-mono font-bold text-white text-green-400 hover:bg-green-700 border-2 border-green-400 rounded-none py-2 px-6 shadow-[0_0_15px_#98FB98] hover:shadow-[0_0_25px_#98FB98] transition-all duration-300 mt-8"
      >
        Voltar
      </button>
    </div>
  );
}
