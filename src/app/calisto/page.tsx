"use client";

import Image from "next/image";

export default function CalistoPage() {
  return (
    <div className="container mx-auto px-4 py-4 md:px-6 font-mono text-center">
      <div className="mb-8">
        <h1 className="text-4xl text-glitch font-bold font-sans text-white my-8">
          Contratados Fundadores
        </h1>
        <div className="flex justify-center gap-8">
          <Image src="/Sergio.png" width={200} height={300} alt="Fundador 1" />
          <Image src="/Maria.png" width={200} height={300} alt="Fundador 2" />
          <Image src="/Cleide.png" width={200} height={300} alt="Fundador 3" />
        </div>

        <h1 className="text-4xl text-glitch font-bold font-sans text-yellow-400 my-8">
          Contratados Premium
        </h1>
        <div className="flex justify-center gap-8">
          <Image src="/Sergio.png" width={200} height={300} alt="Fundador 1" />
          <Image src="/Maria.png" width={200} height={300} alt="Fundador 2" />
          <Image src="/Cleide.png" width={200} height={300} alt="Fundador 3" />
        </div>

        <h1 className="text-4xl font-bold font-sans text-blue-400 text-glitch my-8">
          Contratados Prime
        </h1>
        <div className="flex justify-center gap-8">
          <Image src="/Sergio.png" width={200} height={300} alt="Fundador 1" />
          <Image src="/Maria.png" width={200} height={300} alt="Fundador 2" />
          <Image src="/Cleide.png" width={200} height={300} alt="Fundador 3" />
        </div>
      </div>
    </div>
  );
}
