import React, { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false)
  
  const go = (p) => {
    setPage(p)
    history.pushState({}, '', p === 'projects' ? '/projetos' : '/')
    setOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button onClick={() => go('home')} className="font-display text-lg font-bold text-white">
          MARCO<span className="text-cyan-400">.DEV</span>
        </button>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
          <button onClick={() => go('home')} className="hover:text-cyan-400">Início</button>
          <button onClick={() => go('home')} className="hover:text-cyan-400">Sobre</button>
          <button onClick={() => go('projects')} className="hover:text-cyan-400">Projetos</button>
        </nav>
        <a href="mailto:Masfgroove2012@gmail.com" className="hidden items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:flex">
          Contato <ArrowUpRight size={16}/>
        </a>
        <button onClick={() => setOpen(!open)} className="text-slate-200 md:hidden">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-slate-200">
            <button className="text-left" onClick={() => go('home')}>Início</button>
            <button className="text-left" onClick={() => go('projects')}>Projetos</button>
            <a href="mailto:Masfgroove2012@gmail.com">Contato</a>
          </div>
        </nav>
      )}
    </header>
  )
}