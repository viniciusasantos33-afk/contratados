'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LulusWorldPage() {
  const [isBlocked, setIsBlocked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica se a página deve ser bloqueada ao carregar
    if (sessionStorage.getItem('isBlogBlocked') === 'true') {
      router.replace('/calisto');
    }
  }, [router]);

  const handleBlockClick = () => {
    sessionStorage.setItem('isBlogBlocked', 'true');
    router.push('/calisto'); // Redireciona para a página dos contratados
  };
  
  return (
    <div className="min-h-screen font-mono" style={{ backgroundImage: "url('/heart-bg.png')", backgroundRepeat: 'repeat' }}>
      <header className="bg-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-center">
          <Image
            src="/logo-blog.png"
            alt="Logo do Blog da Lua"
            width={300}
            height={100}
          />
        </div>
      </header>
      <main className="container mx-auto my-8 max-w-3xl rounded-lg border-4 border-pink-300 bg-white bg-opacity-70 p-6 shadow-lg">
          {/* Post 1 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">02/02</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">1° POST!!!</h2>
            <div className="mb-4 flex">
               <Image src="/Luana.png" alt="Foto da Lulu" width={200} height={200} className="border-4 border-pink-300 my-8" />
            </div>
            <p className="text-pink-600">
              Oiiieh!!! Eu sou a Lu! ^-^ Esperei muito pra fazer esse blog ;-;. srrr<br />
              Gosto muito de:
            </p>
            <ul className="ml-6 list-disc text-pink-500">
              <li>questionar a existência do ser humano em toda a sua complexidade e sentimentalismo</li>
              <li>gatos brancos &apos;fofos&apos;</li>
              <li>estéticas 2010&apos;s</li>
            </ul>
            <p className="mt-2 text-pink-600">
              tenho 19 years old<br />
              Vou falar do meu dia a dia ak, espero que gostem!!! ;)
            </p>
          </div>

          {/* Post 2 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">02/02</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">ÓDIOOOOOOO</h2>
            <p className="text-pink-600">
              Nossa, que ódio--;--.<br />
              Fui pega hoje colando umas anotações pra banda de meu amigo na faculdade e me deram uma SEVERA ADVERTÊNCIA :(<br />
              ai que raiva, pior que eu não sei como isso aconteceu, pq eu tinha ninguém aonde eu tava colando!<br />
              fez ter que ficar mais esperta rsrsrsksks
            </p>
            <p className="mt-2 text-sm text-pink-400">#istoic</p>
          </div>

          {/* Post 3 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">11/02</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">Vcs já se sentiram observados?</h2>
            <p className="text-pink-600">
              Tava pensando no incidente das cartazes. é assustador pensar que alguém pode ter me visto sem eu perceber, bizarro O_o<br />
              Tipo, vcs já perceberam aquelas pessoas que parecem estar nos lugares só pra observar os outros? Essas ser umas isso isso kkkkkkkkkk esquisitas
            </p>
          </div>

          {/* Post 4 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">20/02</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">ESPIÕES???</h2>
            <p className="text-pink-600">EU VI UM DELES!!! OLHA ONDE UNS MORAM PRA OBSERVAR!!!</p>
          </div>

          {/* Post 5 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">28/02</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">A vida é injusta.</h2>
            <p className="text-pink-600">
              Vcs acham justo eu sofrer tanto por causa de acabar com a própria vida? Eu odeio a minha faculdade sim. Porque não importa de quem é a culpa, eles sempre saem ilesos, tenho certeza que a faculdade também sabe da existência desses espiões, eu só não tenho como provar.
            </p>
          </div>

          {/* Post 6 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">01/03</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">SAIA DA MINHA CABEÇA</h2>
            <p className="text-pink-600">
              Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.
            </p>
          </div>

          {/* Post 7 */}
          <div className="mb-8 border-b-2 border-dashed border-pink-300 pb-4">
            <p className="text-sm text-pink-400">04/03</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">EU DESCOBRI!!!</h2>
            <p className="text-pink-600">ENTREM E DIVULGUEM RÁPIDO ANTES QUE ELES ME ENCONTREMMMMMM</p>
            <Link href="/ajuda" className="text-blue-500 underline">(site)</Link>
          </div>

          {/* Post 8 */}
          <div className="pb-4 border-b-2 border-dashed border-pink-300 mb-8">
            <p className="text-sm text-pink-400">05/03</p>
            <h2 className="mb-2 text-2xl font-bold text-pink-500">Adeus</h2>
            <p className="text-pink-600">
              Eu nunca concordei e nunca vou concordar com o voyeurismo sem sentido desses doentes que não conseguem enxergar a diferença entre privacidade, crimes e justiça real. Estou registrando pela última vez minha opinião. Jamais concordarei com isso. Jamais.
            </p>
          </div>

          {/* Botão de Erro Fatal */}
          <div className="flex justify-center mt-8">
              <button
                onClick={handleBlockClick}
                className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 border-2 border-pink-700"
              >
                NÃO CLIQUE AQUI
              </button>
          </div>
        </main>
    </div>
  );
}
