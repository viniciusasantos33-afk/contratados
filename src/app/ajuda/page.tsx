import Image from 'next/image'

export default function help() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
        src="/phone.png"
        width={200}
        height={200}
        alt="No service"
      />
      <h1 className="text-4xl text-crt font-bold mt-8 text-glitch" data-text="Estamos sem serviço no momento">Estamos sem serviço no momento</h1>
      <p className="text-lg text-crt text-foreground/80 mt-2">Tente novamente mais tarde</p>
    </div>
  );
}
