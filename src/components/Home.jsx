import React from 'react'
import { ArrowUpRight, Server, Code2, BriefcaseBusiness, Download, Globe } from 'lucide-react'

export function Home({ go }) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-800 pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,#0e749055,transparent_28%),radial-gradient(circle_at_25%_75%,#1d4ed844,transparent_30%)]"/>
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <p className="mb-6 flex items-center gap-2 font-mono text-xs tracking-[.2em] text-cyan-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"/> DISPONÍVEL PARA NOVOS DESAFIOS
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Construo sistemas<br/>que <span className="text-cyan-400">resolvem.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Sou Marco Antonio da Silva Ferreira, Desenvolvedor Java Pleno e Full Stack com ampla bagagem em sistemas corporativos robustos, migração de plataformas de grande porte e integração com tecnologias modernas, Inteligência Artificial e automações.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => go('projects')} className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300">
                Ver projetos <ArrowUpRight size={18}/>
              </button>
              <a 
                href="/CV Marco Antonio 04022026.docx" 
                download="CV_Marco_Antonio.docx"
                className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/80 px-5 py-3.5 font-bold text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
              >
                <Download size={18}/> Baixar Currículo
              </a>
              <a href="mailto:Masfgroove2012@gmail.com" className="rounded-xl border border-slate-700 px-5 py-3.5 font-bold text-white hover:border-cyan-400">
                Falar comigo
              </a>
            </div>
            
            {/* Redes Sociais */}
            <div className="mt-8 flex items-center gap-4 text-slate-400">
              <a href="https://www.linkedin.com/in/marco-antonio-da-silva-ferreira-ab86572a3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition text-sm font-mono">
                <Globe size={18} /> LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/masfgroove" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition text-sm font-mono">
                <Code2 size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/65 p-7 shadow-2xl shadow-cyan-950/30">
            <p className="font-mono text-xs text-cyan-400">// stack completa & tecnologias</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                'Java', 'Spring Boot', 'React', 'JSF / PrimeFaces', 
                'RichFaces', 'PHP', 'Oracle SQL', 'SQL Server', 
                'MySQL', 'Hibernate', 'Docker', 'RabbitMQ', 
                'n8n & IA (RAG)', 'Pinecone', 'Git / GitHub', 'Bootstrap'
              ].map(x => (
                <div key={x} className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-300">{x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[.2em] text-cyan-400">01 / SOBRE MIM</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">Trajetória sólida transformando complexidade em eficiência.</h2>
          </div>
          <p className="max-w-xl leading-8 text-slate-400">
            Com mais de uma década de experiência em tecnologia — passando por grandes corporações como a Telefônica Brasil, NTL Nova Tecnologia (projeto IBGE) e RESOURCE Tecnologia —, destaco-me pela capacidade de desenvolver, sustentar e migrar aplicações críticas de backend e frontend, unindo sistemas legados a ecossistemas modernos e inteligência artificial.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            [Server, 'Sistemas Corporativos', 'Atuação sólida com Java, JSF, PrimeFaces, RichFaces, Hibernate e bancos de dados relacionais de grande porte (Oracle e SQL Server).'],
            [Code2, 'Arquitetura Full Stack', 'Desenvolvimento de portais e APIs modernas utilizando Spring Boot, React, PHP, Bootstrap, além de mensageria assíncrona com RabbitMQ e Docker.'],
            [BriefcaseBusiness, 'Inovação & IA (RAG)', 'Evolução constante aplicando Inteligência Artificial, fluxos de automação com n8n, bancos vetoriais (Pinecone) e arquiteturas descentralizadas.']
          ].map(([Icon, title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <Icon className="text-cyan-400"/>
              <h3 className="mt-7 font-display text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-mono text-xs tracking-[.2em] text-cyan-400">02 / EXPERIÊNCIA PROFISSIONAL</p>
          <div className="mt-10 space-y-10">
            {[
              ['2025', 'Programador Java Pleno', 'RESOURCE Tecnologia e Informática', 'Desenvolvimento e manutenção de sistemas corporativos em JSF, PrimeFaces e Oracle. Foco em componentização, criação de DTOs, serviços REST simulados, code review e refatoração de módulos legados com Git/GitHub.'],
              ['2024 — 2025', 'Consultor / Programador Java Pleno', 'NTL Nova Tecnologia · Plataforma IBGE', 'Atuação na plataforma do IBGE com arquitetura Java legada, RichFaces e Oracle SQL. Manipulação de arquivos JAR no Eclipse, criação de novas páginas, manutenção de tabelas e melhorias contínuas.'],
              ['2011 — 2023', 'Analista de Sistemas / Programador Java', 'Telefônica Brasil', 'Sustentação de portais internos para ~500 colaboradores. Em 2014, liderança e participação na migração de 3 plataformas para Java (Hibernate, Spring MVC, Bootstrap, Tomcat), gerenciamento de bases SQL Server e integração com Oracle via LinkedServer.']
            ].map(([year, role, company, desc]) => (
              <div key={role} className="grid gap-4 border-b border-slate-800 pb-8 md:grid-cols-[200px_1fr]">
                <span className="font-mono text-sm text-cyan-400">{year}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{role}</h3>
                  <p className="text-sm font-semibold text-cyan-500/90 mt-1">{company}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}