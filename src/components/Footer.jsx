import React from 'react'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Marco Antonio da Silva Ferreira</span>
        <div className="flex gap-4">
          <a href="https://github.com/masfgroove" target="_blank" className="font-semibold hover:text-cyan-400">GitHub</a>
          <a href="https://www.linkedin.com/in/marco-antonio-da-silva-ferreira-ab86572a3/" target="_blank" className="font-semibold hover:text-cyan-400">LinkedIn</a>
          <a href="mailto:Masfgroove2012@gmail.com" className="hover:text-cyan-400"><Mail size={19}/></a>
        </div>
      </div>
    </footer>
  )
}