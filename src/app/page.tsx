import { LeftFigure, RightFigure } from '@/components/figures';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="relative mb-8 flex w-full max-w-4xl items-end justify-between">
          <LeftFigure />
          <RightFigure />
        </div>

        <div className="w-full max-w-2xl space-y-6">
          <p className="leading-relaxed text-foreground/80 md:text-lg">
            Em um mundo assombrado por ecos digitais e sussurros estáticos, uma agência clandestina recruta indivíduos para tarefas que desafiam a lógica e a sanidade. Eles são os Contratados, agentes do impossível.
          </p>
          <p className="leading-relaxed text-foreground/80 md:text-lg">
            Cada missão é um mergulho no abismo, uma dança com o paranormal em paisagens de dados corrompidos e realidades fraturadas. O fracasso não é uma opção. É um apagamento.
          </p>
        </div>
        
        <div className="my-12 h-px w-full max-w-sm bg-accent" />

        <div className="text-center">
          <h2 className="text-glitch text-xl font-bold uppercase tracking-widest" data-text="ACOMPANHE O CASO">
            ACOMPANHE O CASO
          </h2>
        </div>
      </div>
    </div>
  );
}
