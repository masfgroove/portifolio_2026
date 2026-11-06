import React from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  { 
    name: 'ASCLogística - Sistema Full Stack & IA (RAG)', 
    tag: 'Node.js · React · MySQL · HostGator · n8n · Pinecone', 
    desc: 'Aplicação corporativa completa para gestão e logística hospedada na HostGator, integrada com Inteligência Artificial via n8n e arquitetura RAG com Pinecone para buscas semânticas contextuais.', 
    url: 'https://asclogistica.com.br/', 
    github: 'https://github.com/masfgroove/asclogistica' 
  },
  { 
    name: 'TrustBridge Portal - Global Intermediation & Compliance', 
    tag: 'React · Vite · Node.js · Express · MongoDB · Ethers.js · Vercel · Render', 
    desc: 'Ecossistema web avançado para tokenização segura de ativos, verificação de documentos via blockchain, gestão de conformidade em comércio internacional (LOI/ICPO) e painel administrativo (Admin Hub).', 
    url: 'https://trust-bridge-frontend.vercel.app/', 
    github: 'https://github.com/masfgroove/trust-bridge-portal' 
  },
  { 
    name: 'Vitrine Delas (LojaBrás) - E-commerce & IA Assistant', 
    tag: 'Java · Spring Boot · React · Vite · Vercel · n8n · Google AdSense', 
    desc: 'Plataforma completa de e-commerce inspirada no polo de moda do Brás, com back-end em Java (Spring Boot), painel administrativo de controle de estoque/vendas, integração monetizada com Google AdSense e assistente virtual inteligente de pré-atendimento com automação n8n e WhatsApp.', 
    url: 'https://lojabras.vercel.app/', 
    githubFront: 'https://github.com/masfgroove/lojabras',
    githubBack: 'https://github.com/masfgroove/lojabras_backend_of' 
  },
  { 
    name: 'Meu Site AWS - Painel Administrativo Full Stack (Angular & Spring Boot)', 
    tag: 'Angular · Bootstrap · Java · Spring Boot · AWS EC2 · Supabase', 
    desc: 'Painel administrativo corporativo desenvolvido com Angular e Bootstrap no front-end, integrado a uma API RESTful em Java (Spring Boot) hospedada em nuvem na AWS EC2 e persistência de dados em PostgreSQL (Supabase) com CRUD completo.', 
    url: 'http://3.129.44.20:8081/cadastros', 
    githubFront: 'https://github.com/masfgroove/meu-site-aws',
    githubBack: 'https://github.com/masfgroove/meu-site-aws' // Podes atualizar para o repositório específico do backend se separado
  },
  { 
    name: 'ONG Ação & Integração - Plataforma Social', 
    tag: 'React · Vite · Tailwind CSS · Vercel', 
    desc: 'Portal institucional voltado para impacto social, facilitando a divulgação de projetos comunitários, campanhas de engajamento, doações e conexão entre voluntários e assistidos.', 
    url: 'https://ong-acao-integracao.vercel.app/', 
    github: 'https://github.com/masfgroove/ong_acao_integracao' 
  },
  { 
    name: 'Dashboard Web3 - Crypto & Assets Tracker', 
    tag: 'React · Vite · Web3 · Vercel', 
    desc: 'Painel interativo para monitoramento de ativos descentralizados, criptomoedas e métricas de mercado em tempo real.', 
    url: 'https://meu-dashboard-web3.vercel.app/', 
    github: 'https://github.com/masfgroove/meu-dashboard-web3' 
  }
]

export function Projects() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36">
      <p className="font-mono text-xs tracking-[.2em] text-cyan-400">PORTFÓLIO / PROJETOS</p>
      <h1 className="mt-5 font-display text-5xl font-bold text-white">Projetos em <span className="text-cyan-400">destaque.</span></h1>
      <p className="mt-5 max-w-2xl leading-7 text-slate-400">Aqui estão alguns projetos que representam meu trabalho.</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.name} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-cyan-400/60 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-cyan-400">0{i+1} / {p.tag}</p>
              <h2 className="mt-8 font-display text-2xl font-bold text-white">{p.name}</h2>
              <p className="mt-4 min-h-14 text-sm leading-6 text-slate-400">{p.desc}</p>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300">
                  Ver Projeto <ExternalLink size={16}/>
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg> 
                  GitHub
                </a>
              )}
              {p.githubFront && (
                <a href={p.githubFront} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg> 
                  GitHub Front-end
                </a>
              )}
              {p.githubBack && (
                <a href={p.githubBack} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg> 
                  GitHub Back-end (Java)
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}