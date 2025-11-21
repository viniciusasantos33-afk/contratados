import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="relative mt-8 mb-8 flex w-full max-w-5xl justify-center items-center">
          <Image
            src="/contract.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>

        <div className="my-16 mb-8 h-px w-full max-w-5xl bg-white" />

        <p className="text-4xl text-glitch text-red-500" data-text="TEMOS OLHOS EM TODO LUGAR">
          TEMOS OLHOS EM TODO LUGAR
        </p>

        <div className="my-16 mt-8 h-px w-full max-w-5xl  bg-white" />

        <h1 className="text-4xl mb-8 text-glitch text-red-500" data-text="DENUNCIE!">DENUNCIE!</h1>

        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/correct-contract.png"
              width={100}
              height={82}
              alt="Contract image"
            />
          </div>
          <div className="md:w-2/3 space-y-6 text-center md:text-left">
            <p className="leading-relaxed text-foreground/80 md:text-lg text-justify">
              Somos uma rede que tem como lema a proteção máxima de qualquer
              ambiente por meio da simples OBSERVAÇÃO! Temos olhos em todos os
              lugares e garantimos uma testemunha para lugares onde não há
              nenhuma! Agora você faz parte disso, a mínima atenção aos detalhes
              pode SALVAR VIDAS!
            </p>
          </div>
        </div>

        <div className="my-16 h-px w-full max-w-5xl bg-white" />

        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl md:space-x-8 mb-16 space-y-8 md:space-y-0">
          {/* Left Column */}
          <div className="flex ml-0 flex-col md:w-1/2 space-y-6 items-start text-left">
            <Image
              src="/title.png" // Title Image
              width={300}
              height={200}
              alt="Denuncie"
            />
            <p className="leading-relaxed text-foreground/80 md:text-lg">
              Descubra o amigo secreto de outros CONTRATADOS e ganhe todos os presentes!
            </p>
            <button className="bg-transparent rounded-xl border-4 border-red-900 text-accent-foreground px-6 py-2 rounded-xl font-bold uppercase tracking-widest hover:bg-accent/90">
              PARTICIPE!
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/natal.png" // Large Image Placeholder
              width={500}
              height={500}
              alt="Imagem da denúncia"
            />
          </div>
        </div>

        <div className="my-16 mt-8 h-px w-full max-w-5xl bg-white" />

      <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl mb-8 text-glitch text-red-500" data-text="CONTRATADO DO MES">CONTRATADO DO MES</h1>
      <h2 className="text-2xl mb-8 text-foreground/80 text-glitch" data-text="PARABÉNS!">PARABÉNS!</h2>
        {/* Images Section */}
        <div className="flex items-end justify-center  my-8">
          <Image
            src="/404_versed.png"
            width={400}
            height={400}
            alt="Contratado"
            className="rounded-lg shadow-lg mr-[-100px]"
          />
          <Image
            src="/sergio.png"
            width={600}
            height={600}
            alt="Contratado do Mês"
            className="rounded-lg shadow-2xl z-10"
          />
          <Image
            src="/404.png"
            width={400}
            height={400}
            alt="Contratado"
            className="rounded-lg shadow-lg ml-[-100px]"
          />
        </div>
        {/* Text Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-glitch" data-text="SÉRGIO INTÉLI">SÉRGIO INTÉLI</h3>
          <h4 className="text-xl text-foreground/90 mt-2 text-glitch" data-text="MAIS DE 69 INFRAÇÕES EVITADAS!">MAIS DE 69 INFRAÇÕES EVITADAS!</h4>
          <p className="max-w-2xl mx-auto mt-4 leading-relaxed text-foreground/80">
          <ul className="list-disc text-center list-inside space-y-2 text-left text-foreground/80 md:text-lg">
              <li>Seja um CONTRATADO DO MÊS superando seus colegas de trabalho na quantidade de infrações evitadas!</li>
              <li>Por meio de denuncias, punições ou tomada de medidas!</li>
              <li>Sua foto vai ser mostrada na nossa página de início!</li>
            </ul>          
            </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
