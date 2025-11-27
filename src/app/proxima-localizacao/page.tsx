import Image from 'next/image';

export default function ProximaLocalizacaoPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className="text-5xl font-bold text-glitch text-red-500 mb-8" data-text="Próxima Localização">
        Próxima Localização
      </h1>
      <h2 className="text-2xl text-foreground/80 mb-12">
        esteja aqui amanhã
      </h2>
      <Image
        src="/caraio.png"
        width={500}
        height={500}
        alt="Próxima Localização"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
