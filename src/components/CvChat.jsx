import { CvChat } from './components/CvChat'
import './App.css'

function App() {
  return (
    <>
      {/* Cabeçalho do Perfil */}
      <section id="center" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div>
          <h1>Marco Antônio da Silva Ferreira</h1>
          <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>
            Desenvolvedor Java | Automação | IA & Cloud | Sistemas Corporativos
          </p>
        </div>
      </section>

      {/* AQUI O CHAT APARECE PUXANDO O COMPONENTE SEPARADO */}
      <CvChat />

      {/* Seção de Experiências / Histórico */}
      <section style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Experiência Profissional</h2>
        
        <div style={{ marginBottom: '1.5rem', background: '#141414', padding: '1.2rem', borderRadius: '8px', border: '1px solid #262626' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.85rem' }}>2024 — 2025</span>
          <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0.3rem 0' }}>Consultor / Programador Java Pleno</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>NTL Nova Tecnologia · Plataforma IBGE</p>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Atuação na plataforma do IBGE com arquitetura Java legada, RichFaces e Oracle SQL. Manipulação de arquivos JAR no Eclipse, criação de novas páginas, manutenção de tabelas e melhorias contínuas.
          </p>
        </div>

        <div style={{ background: '#141414', padding: '1.2rem', borderRadius: '8px', border: '1px solid #262626' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.85rem' }}>2011 — 2023</span>
          <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0.3rem 0' }}>Analista de Sistemas / Programador Java</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Telefônica Brasil</p>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Sustentação de portais internos para ~500 colaboradores. Em 2014, liderança e participação na migração de 3 plataformas para Java (Hibernate, Spring MVC, Bootstrap, Tomcat), gerenciamento de bases SQL Server e integração com Oracle via LinkedServer.
          </p>
        </div>
      </section>

      {/* Redes Sociais e Contato */}
      <section id="next-steps" style={{ textAlign: 'center', padding: '2rem' }}>
        <div id="social">
          <h2>Conecte-se comigo</h2>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0, marginTop: '10px' }}>
            <li>
              <a href="https://github.com/masfgroove" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marco-antonio-da-silva-ferreira-ab86572a3/" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>LinkedIn</a>
            </li>
            <li>
              <a href="https://wa.me/5511987052920" target="_blank" rel="noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App