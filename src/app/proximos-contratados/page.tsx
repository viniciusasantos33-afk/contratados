import Image from 'next/image'
import Link from 'next/link'

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

export default function NextEmployees() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-glitch text-red-500" data-text="Parabéns!">Parabéns!</h1>
        <h2 className="text-2xl mb-8 text-foreground/80 text-glitch" data-text="Contratado do Mês">Contratado do Mês</h2>

        {/* Images Section */}
        <div className="flex items-end justify-center space-x-4 my-8">
          <Image
            src="/correct.png"
            width={200}
            height={200}
            alt="Contratado"
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/contract.png"
            width={300}
            height={300}
            alt="Contratado do Mês"
            className="rounded-lg shadow-2xl z-10"
          />
          <Image
            src="/bahia.png"
            width={200}
            height={200}
            alt="Contratado"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-glitch" data-text="NOME DO CONTRATADO">NOME DO CONTRATADO</h3>
          <h4 className="text-xl text-foreground/80 mt-2 text-glitch" data-text="SUBTÍTULO">SUBTÍTULO</h4>
          <p className="max-w-2xl mx-auto mt-4 leading-relaxed text-foreground/80">
            Este é o parágrafo descrevendo as conquistas e qualidades do contratado do mês. Ele demonstrou um empenho excepcional e uma dedicação que inspira a todos nós.
          </p>
        </div>
      </div>

      <div className="my-16 h-px w-full max-w-5xl bg-white mx-auto" />

      {/* Nearby Contractors Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-8 text-glitch text-red-500" data-text="Contratados nas Proximidades">Contratados nas Proximidades</h2>
        <div className="w-full max-w-4xl space-y-8">
          {profiles.map((profile, index) => (
            <Link key={index} href={`/proximos-contratados/${profile.slug}`}>
              <div className="flex flex-col md:flex-row items-center bg-background/5 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-background/10 transition-colors">
                <Image
                  src={profile.image}
                  width={150}
                  height={150}
                  alt={profile.name}
                  className="rounded-full mr-0 md:mr-6 mb-4 md:mb-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-glitch" data-text={profile.name}>{profile.name}</h3>
                  <p className="text-foreground/80">{profile.age} | {profile.role}</p>
                  <p
                    className="mt-2 leading-relaxed text-foreground/80"
                    dangerouslySetInnerHTML={{ __html: profile.description }}
                  />
                  <p className="mt-4 font-bold text-lg">{profile.status}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
