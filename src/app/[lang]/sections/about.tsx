export default function About() {
  return (
    <section>
      <div className="flex flex-col text-center">
        <h3 className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white ">
          Sobre mim
        </h3>
        <p className="text-sm text-gray-400">A minha trajetória, até o momento. 😅</p>
      </div>

      <div className="mt-12">
        <p
          className="text-sm text-center text-gray-80000 
          dark:text-gray-100 md:text-base lg:text-md 
          "
        >
          Olá! Me chamo <strong>Pedro Leal</strong>, tenho 24 anos, e nos últimos 4 anos da minha vida venho
          focando minhas energias em me tornar um Engenheiro de Software do Brasil.
          <br />
          Iniciei minha jornada na programação em 2019 durante o curso de Matemática Computacional na UFPB,
          onde adquiri uma base sólida em lógica, algoritmos e linguagens como C e Python. Atualmente, foco no
          ecossistema JavaScript, dedicando-me diariamente a novos projetos para aprofundar meus
          conhecimentos. Tenho experiência em diversos projetos web, entregando resultados que superam as
          expectativas dos clientes.
        </p>
      </div>
    </section>
  );
}
