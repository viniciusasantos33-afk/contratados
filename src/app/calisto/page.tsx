'use client';

import Image from "next/image";

export default function CalistoPage() {
  return (
    <div className="container mx-auto px-4 py-4 md:px-6 font-mono text-center">
      <div className="mb-8">
        <h1 className="text-4xl text-glitch font-bold font-sans text-white my-8">
         Contratados Fundadores
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Image src="/eric.png" width={200} height={300} alt="Fundador 1" className="object-cover w-full h-96 border-2 border-white" />
          <Image src="/morgana.jpg" width={200} height={300} alt="Fundador 2" className="object-cover w-full h-96 border-2 border-white" />
          <Image src="/mariana.jpg" width={200} height={300} alt="Fundador 3" className="object-cover w-full h-96 border-2 border-white" />
           <Image src="/vinicius.png" width={200} height={300} alt="Fundador 4" className="object-cover w-full h-96 border-2 border-white" />
        </div>

        <h1 className="text-4xl text-glitch font-bold font-sans text-yellow-400 my-8">
          Contratados Premium
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/eugenio.jpg" width={200} height={300} alt="Fundador 1" className="object-cover w-full h-96 border-2 border-white" />
          <Image src="/rob.jpg" width={200} height={300} alt="Fundador 2" className="object-cover w-full h-96 border-2 border-white" />
        </div>
      </div>
    </div>
  );
}
