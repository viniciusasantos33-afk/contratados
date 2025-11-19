import Image from 'next/image';
import { notFound } from 'next/navigation';

const profiles = [
  {
    name: 'Sérgio Intéli',
    slug: 'sergio-inteli',
    age: 19,
    role: 'Testemunha',
    description: 'Além de um ótimo estudante e muito dedicado, Sérgio garante um ambiente educativo seguro e honesto para ele e seus colegas! Observando injustiças, ele, assim como outros de nossa rede, consegue assegurar que trapaças, infrações e desonestidade não perdurem, mantendo, assim, a paz escolar.',
    status: 'Ativo',
    image: '/correct.png'
  },
  {
    name: 'Maria Joaquina Santos',
    slug: 'maria-santos',
    age: 18,
    role: 'Delatora',
    description: 'Um estudante extrovertido, sempre em busca de novas sensações!, esse é Lucas! E como intermediário responsável pela comunicação extra oficial, Lucas garante que os relatos sejam autênticos e cheguem ao time superiores, mentiras não serão toleradas.',
    status: 'Inativo',
    image: '/bahia.png'
  },
  {
    name: 'Cleide Leite',
    slug: 'cleide-leite',
    age: 58,
    role: 'Testemunha',
    description: 'Somos uma rede que tem como lema a proteção máxima de qualquer ambiente por meio da simples OBSERVAÇÃO! Temos olhos em todos os lugares e garantimos uma testemunha para lugares onde não há nenhuma! Agora você faz parte disso, a mínima atenção aos detalhes pode SALVAR VIDAS!',
    status: 'Ativo',
    image: '/contract.png'
  },
  {
    name: 'Lucas Fonseca',
    slug: 'lucas-fonseca',
    age: 19,
    role: 'Delator',
    description: 'Um estudante extrovertido, sempre em busca de novas sensações!, esse é Lucas! E como intermediário responsável pela comunicação extra oficial, Lucas garante que os relatos sejam autênticos e cheguem ao time superiores, mentiras não serão toleradas.',
    status: 'Ativo',
    image: '/contract.png'
  },
  {
    name: 'A Lua',
    slug: 'lua',
    age: ' ',
    role: 'Supervisora',
    description: 'A nossa querida supervisora, está disposta a tirar dúvidas em tempo real para ajudar novos e velhos integrantes! Uma alma doce e carismática que  <span class="bg-white text-white select-none"> se salvou dos pensamentos desgraçados de nos expor, na verdade, ela devia estar morta, foi salva por causa do Lucas, outro traidor, </span> é <span class="bg-white text-white select-none"> um absurdo como ela não entendia a </span> verdadeira <span class="bg-white text-white select-none"> forma de se conduzir a sociedade, </span> seu nome <span class="bg-white text-white select-none"> foi trocado por algo que </span> é <span class="bg-white text-white select-none"> mais </span> belo, por representar nossa verdadeira função: Enxergar de cima o que não era visto antes.',
    status: 'ATIVO',
    image: '/phone.png'
  }
];

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const profile = profiles.find(p => p.slug === params.slug);

  if (!profile) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      {/* Top Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="Logo"
        />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column (1/3) */}
        <div className="md:w-1/3 flex flex-col items-center text-center">
          <Image
            src={profile.image}
            width={300}
            height={300}
            alt={profile.name}
            className="rounded-full shadow-lg"
          />
          <div className="my-6">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Small Logo"
            />
          </div>
          <div className="leading-relaxed text-foreground/80" dangerouslySetInnerHTML={{ __html: profile.description }} />
        </div>

        {/* Right Column (2/3) */}
        <div className="md:w-2/3 mt-8 md:mt-0">
          <h1 className="text-5xl font-bold text-glitch" data-text={profile.name}>{profile.name}</h1>
          <p className="text-xl text-foreground/80 mt-2">Função: {profile.role}</p>
          <p className="text-xl text-foreground/80 mt-2">Idade: {profile.age}</p>
          
          {/* Video Player */}
          <div className="my-8 aspect-w-16 aspect-h-9">
             <iframe 
              className="w-full h-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <h2 className="text-3xl font-bold text-red-500 text-glitch" data-text="Resumo da Semana">Resumo da Semana</h2>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foreground/80">
            <li>Monitorou o alvo <span className="bg-white text-white select-none">Operação Corvo</span> por 72 horas contínuas.</li>
            <li>Identificou e reportou 3 novas atividades suspeitas.</li>
            <li>Evitou uma <span className="bg-white text-white select-none">violação de segurança</span> no setor 4.</li>
            <li>Coletou inteligência crucial para a próxima fase da missão.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
