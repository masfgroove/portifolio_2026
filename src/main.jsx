import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  const initial = location.pathname.includes('projetos') ? 'projects' : 'home'
  const [page, setPage] = useState(initial)

  useEffect(() => {
    const f = () => setPage(location.pathname.includes('projetos') ? 'projects' : 'home')
    addEventListener('popstate', f)
    return () => removeEventListener('popstate', f)
  }, [])

  const go = (p) => {
    setPage(p)
    history.pushState({}, '', p === 'projects' ? '/projetos' : '/')
    scrollTo(0, 0)
  }

  return (
    <>
      <Nav page={page} setPage={go} />
      {page === 'projects' ? <Projects /> : <Home go={go} />}
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)