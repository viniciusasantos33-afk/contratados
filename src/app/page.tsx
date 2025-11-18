import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="relative mt-16 flex w-full max-w-4xl justify-center items-center">
        <Image
          src="/contract.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
        </div>

        <div className="my-16 h-px w-full max-w-xl bg-white" />

          <p className="text-2xl text-glitch text-foreground/80 ">
            TEMOS OLHOS EM TODO LUGAR
          </p>

        <div className="my-16 h-px w-full max-w-xl  bg-white" />

        <div className="flex items-center w-full max-w-2xl space-x-8">
          <Image
            src="/correct.png"
            width={200}
            height={200}
            alt="Contract image"
          />
          <div className="space-y-6">
            <p className="leading-relaxed text-foreground/80 md:text-lg">
            Somos uma rede que tem como lema a proteção máxima de qualquer ambiente por meio da simples OBSERVAÇÃO! Temos olhos em todos os lugares e garantimos uma testemunha para lugares onde não há nenhuma! Agora você faz parte disso, a mínima atenção aos detalhes pode SALVAR VIDAS!
            </p>
          </div>
        </div>
        
        <div className="my-16 h-px w-full max-w-xl bg-white" />

        <div className="flex mb-16 items-center w-full max-w-2xl space-x-8">
          <div className="space-y-6">
            <p className="leading-relaxed text-foreground/80 md:text-lg">
            Somos uma rede que tem como lema a proteção máxima de qualquer ambiente por meio da simples OBSERVAÇÃO! Temos olhos em todos os lugares e garantimos uma testemunha para lugares onde não há nenhuma! Agora você faz parte disso, a mínima atenção aos detalhes pode SALVAR VIDAS!
            </p>
          </div>

          <Image
            src="/bahia.png"
            width={200}
            height={200}
            alt="Contract image"
          />
        </div>
      </div>
    </div>
  );
}
