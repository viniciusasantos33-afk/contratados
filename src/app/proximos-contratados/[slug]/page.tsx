'use client';

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useProfileClick } from "@/contexts/ProfileClickContext";

const profiles = [
  {
    name: "Sérgio Intéli",
    slug: "sergio-inteli",
    age: 19,
    role: "Testemunha",
    videoUrl: "https://www.youtube.com/embed/DFq12_G8pGg",
    description:
      '<ul class="list-disc list-inside space-y-2"><li class="text-left"><a class="text-green-400 underline text-bold" href="#">L</a>ocais inapropriados tiveram posters colados em sua faculdade por uma colega de classe.</li><li class="text-left">Foram tomadas providências, Sérgio contatou a diretoria da instituição de ensino.</li></ul>',
    subtitle:
      "Além de um ótimo estudante e muito dedicado, Sérgio garante um ambiente educativo seguro e honesto para ele e seus colegas! Observando injustiças, ele, assim como outros de nossa rede, consegue assegurar que trapaças, infrações e desonestidade não perdurem, mantendo, assim, a paz escolar.",
    status: "Ativo",
    image: "/Sergio.png",
  },
  {
    name: "Maria Joaquina Santos",
    slug: "maria-santos",
    age: 18,
    role: "Delatora",
    videoUrl: "https://www.youtube.com/embed/m5r_S-p-u5M",
    subtitle:
      "Um estudante extrovertido, sempre em busca de novas sensações!, esse é Lucas! E como intermediário responsável pela comunicação extra oficial, Lucas garante que os relatos sejam autênticos e cheguem ao time superiores, mentiras não serão toleradas.",
    description:
      '<ul class="list-disc list-inside space-y-2"><li class="text-left"><a class="text-green-400 underline text-bold" href="#">U</a>ma de suas missões quase falhou e pois em risco a identidade de nossa rede.</li><li class="text-left">Padrões de comportamento anormais foram notados de uma colega de classe.</li><li class="text-left">Foram tomadas providências, sem efeito.</li></ul>',
    status: "Inativo",
    image: "/Maria.png",
  },
  {
    name: "Cleide Leite",
    slug: "cleide-leite",
    age: 58,
    role: "Testemunha",
    videoUrl: "https://www.youtube.com/embed/eL1R_15E0x4",
    subtitle:
      "Somos uma rede que tem como lema a proteção máxima de qualquer ambiente por meio da simples OBSERVAÇÃO! Temos olhos em todos os lugares e garantimos uma testemunha para lugares onde não há nenhuma! Agora você faz parte disso, a mínima atenção aos detalhes pode SALVAR VIDAS!",
    description:
      '<ul class="list-disc list-inside space-y-2"><li class="text-left"><a class="text-green-400 underline text-bold" href="#">A</a> vizinha de sua residência foi vista com outro homem que não era o marido</li><li class="text-left">Foram tomadas providências, Cleide contou o ocorrido ao marido de sua vizinha</li><li class="text-left text-red-500 font-bold">ALERTA DE AMEAÇA: Suspeita de perseguição aos CONTRATADOS!</li><li class="text-left">Ainda não foram tomadas providências.</li></ul>',
    status: "Ativo",
    image: "/Cleide.png",
  },
  {
    name: "Lucas Fonseca",
    slug: "lucas-fonseca",
    age: 19,
    role: "Delator",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    subtitle:
      "Um estudante extrovertido, sempre em busca de novas sensações!, esse é Lucas! E como intermediário responsável pela comunicação extra oficial, Lucas garante que os relatos sejam autênticos e cheguem ao time superiores, mentiras não serão toleradas.",
    description:
      '<ul class="list-disc list-inside space-y-2"><li class="text-left text-red-500 font-bold"><a class="text-green-400 underline text-bold" href="#">N</a>ÍVEL EXTREMO DE AMEAÇA! INTRUSÃO NO SITE DOS CONTRATADOS!</li><li class="text-left">Medidas extremas foram tomadas, ameaça neutralizada.</li></ul>',
    status: "Ativo",
    image: "/Lucas.png",
  },
];

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const profile = profiles.find((p) => p.slug === params.slug);
  const { addClickedProfile } = useProfileClick();

  if (!profile) {
    notFound();
  }

  const handleDescriptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
      addClickedProfile(profile.slug);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 font-mono">
      {/* Top Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="my-4"
        />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column (1/2) */}
        <div className="md:w-1/2 flex flex-col items-center text-center">
          <Image
            src={profile.image}
            width={250}
            height={400}
            alt={profile.name}
            className="shadow-lg"
          />
          <div className="my-1">
            <Image
              src="/eye.png"
              width={200}
              height={100}
              alt="Small Logo"
            />
          </div>
          <div
            className="w-80 text-justify text-glitch text-md text-foreground/80"
            data-text={profile.subtitle}
            dangerouslySetInnerHTML={{ __html: profile.subtitle }}
          />
        </div>

        {/* Right Column (1/2) */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-5xl font-bold font-sans text-glitch mb-2" data-text={profile.name.toUpperCase()}>{profile.name.toUpperCase()}</h1>
          <p className="text-xl my-2">Função: {profile.role}</p>
          <p className="text-xl my-2">Idade: {profile.age}</p>

          {/* Video Player Dinâmico */}
          <div className="my-8 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full aspect-video border-t border-gray-600 bg-gradient-to-b from-gray-800 to-black"
              // AQUI ESTÁ A MUDANÇA: Usa o link do perfil atual
              src={profile.videoUrl} 
              title={`Vídeo de ${profile.name}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-2xl text-glitch font-sans mb-4 font-bold text-red-500" data-text="Resumo da Semana">
            Resumo da Semana
          </h2>
          <div
            className="text-xl"
            onClick={handleDescriptionClick}
            dangerouslySetInnerHTML={{ __html: profile.description }}
          />
        </div>
      </div>
    </div>
  );
}
