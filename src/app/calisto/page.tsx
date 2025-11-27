'use client';

// Refatorado para usar tags <img> padrão HTML.
// Isso elimina dependências do servidor Next.js e evita erros no Firebase/Hospedagem Estática.

export default function CalistoPage() {
  return (
    <div className="container mx-auto px-4 py-4 md:px-6 font-mono text-center bg-black min-h-screen">
      <div className="flex flex-col mb-8 justify-center">
        
        {/* --- SEÇÃO FUNDADORES --- */}
        <h1 className="text-4xl text-glitch font-bold font-sans text-white my-8">
         Contratados Fundadores
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
          
          {/* Eric Rodrigues - COM BRILHO BRANCO E BORDA MAIS GROSSA */}
          <div className="flex flex-col w-full">
            <img 
              src="/eric.png" 
              alt="Eric Rodrigues" 
              className="object-cover w-full h-96 border-4 border-white shadow-xl shadow-white/40" 
            />
            <div className="bg-neutral-900 border-4 border-t-0 border-white p-3 text-white font-bold text-lg">
              Eric Rodrigues
            </div>
          </div>

          {/* Morgana - COM BRILHO BRANCO E BORDA MAIS GROSSA */}
          <div className="flex flex-col w-full">
            <img 
              src="/morgana.jpg" 
              alt="Morgana" 
              className="object-cover w-full h-96 border-4 border-white shadow-xl shadow-white/40" 
            />
            <div className="bg-neutral-900 border-4 border-t-0 border-white p-3 text-white font-bold text-lg">
              Morgana
            </div>
          </div>

          {/* Mariana - COM BRILHO BRANCO E BORDA MAIS GROSSA */}
          <div className="flex flex-col w-full">
            <img 
              src="/mariana.jpg" 
              alt="Mariana" 
              className="object-cover w-full h-96 border-4 border-white shadow-xl shadow-white/40" 
            />
            <div className="bg-neutral-900 border-4 border-t-0 border-white p-3 text-white font-bold text-lg">
              Mariana
            </div>
          </div>

          {/* Vinicius Santos - COM BRILHO BRANCO E BORDA MAIS GROSSA */}
          <div className="flex flex-col w-full">
            <img 
              src="/vinicius.png" 
              alt="Vinicius Santos" 
              className="object-cover w-full h-96 border-4 border-white shadow-xl shadow-white/40" 
            />
            <div className="bg-neutral-900 border-4 border-t-0 border-white p-3 text-white font-bold text-lg">
              Vinicius Santos
            </div>
          </div>
        </div>

        {/* --- SEÇÃO PREMIUM (Com brilho dourado e borda amarela) --- */}
        <h1 className="text-4xl text-glitch font-bold font-sans text-yellow-400 my-8">
          Contratados Premium
        </h1>
        
        {/* Alterado de md:grid-cols-4 para md:grid-cols-5 para acomodar os 5 itens na mesma linha */}
        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Eugenio */}
          <div className="flex flex-col w-full">
            <img 
              src="/eugenio.jpg" 
              alt="Eugenio" 
              className="object-cover w-full h-96 border-2 border-yellow-400 shadow-xl shadow-yellow-400/50" 
            />
            <div className="bg-neutral-900 border-2 border-t-0 border-white p-3 text-white font-bold text-lg">
              Eugenio
            </div>
          </div>

          {/* Rob Naveya */}
          <div className="flex flex-col w-full">
            <img 
              src="/rob2.jpg" 
              alt="Rob Naveya" 
              className="object-cover w-full h-96 border-2 border-yellow-400 shadow-xl shadow-yellow-400/50" 
            />
            <div className="bg-neutral-900 border-2 border-t-0 border-white p-3 text-white font-bold text-lg">
              Rob Naveya
            </div>
          </div>
          
          {/* Henrique R. Ramos */}
          <div className="flex flex-col w-full">
            <img 
              src="/henrique.png" 
              alt="Henrique R. Ramos" 
              className="object-cover w-full h-96 border-2 border-yellow-400 shadow-xl shadow-yellow-400/50" 
            />
            <div className="bg-neutral-900 border-2 border-t-0 border-white p-3 text-white font-bold text-lg">
            Henrique R. Ramos
            </div>
          </div>

          {/* Hanny Rodriguez */}
          <div className="flex flex-col w-full">
            <img 
              src="/hanny.jpg" 
              alt="Hanny Rodriguez" 
              className="object-cover w-full h-96 border-2 border-yellow-400 shadow-xl shadow-yellow-400/50" 
            />
            <div className="bg-neutral-900 border-2 border-t-0 border-white p-3 text-white font-bold text-lg">
              Hanny Rodriguez
            </div>
          </div>

          {/* Emanuel Freitas */}
          <div className="flex flex-col w-full">
            <img 
              src="/emanuel.jpg" 
              alt="Emanuel Freitas" 
              className="object-cover w-full h-96 border-2 border-yellow-400 shadow-xl shadow-yellow-400/50" 
            />
            <div className="bg-neutral-900 border-2 border-t-0 border-white p-3 text-white font-bold text-lg">
              Emanuel Freitas
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}