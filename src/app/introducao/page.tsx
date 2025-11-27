'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IntroducaoPage() {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.setItem('hasSeenIntro', 'true');
  }, []);

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full aspect-video"
          src="https://www.youtube.com/embed/HL860YvwcI0?si=3DrMjgB-8jDiCoBU&autoplay=1&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={goToHome}
        className="mt-8 font-mono font-bold text-red-500 hover:bg-red-700 border-2 border-red-500 rounded-none py-2 px-6 shadow-[0_0_15px_#f56565] hover:shadow-[0_0_25px_#f56565] transition-all duration-300"
      >
        Entrar no Site
      </button>
    </div>
  );
}
