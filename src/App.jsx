import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou a IA assistente do currículo do Marco Antônio. Pergunte o que quiser sobre a minha carreira, tecnologias (Java, Cloud, IA) ou experiências!' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // Função que envia a pergunta para a API do Pinecone Assistant
  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch('https://prod-1-data.ke.pinecone.io/assistant/chat/cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Key': 'pcsk_5SBCRY_3tJJBb4ze4BYmNF6vjYPQaihJyd2s8d81AawH2tadZ5uLzJytPc6AN5xCCTPkz6'
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: userMessage }
          ]
        })
      })

      const data = await response.json()
      const assistantReply = data.message?.content || data.choices?.[0]?.message?.content || "Desculpe, não consegui processar a resposta no momento."

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantReply }])
    } catch (error) {
      console.error("Erro ao falar com o assistente:", error)
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Ocorreu um erro ao conectar com o assistente. Tente novamente mais tarde.' }])
    } finally {
      setLoading(false)
    }
  }

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

      {/* Seção do Chat com o Currículo (IA) */}
      <section id="cv-chat" style={{ maxWidth: '700px', margin: '1rem auto 2rem auto', padding: '1.5rem', background: '#1a1a1a', borderRadius: '12px', border: '1px solid #333' }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center', color: '#61dafb', fontSize: '1.2rem' }}>Converse com o meu Currículo (IA)</h2>
        
        <div style={{ height: '320px', overflowY: 'auto', border: '1px solid #444', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', background: '#121212' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              background: msg.role === 'user' ? '#007acc' : '#2d2d2d',
              color: '#fff',
              padding: '10px 14px',
              borderRadius: '8px',
              maxWidth: '80%',
              wordBreak: 'break-word',
              fontSize: '0.95rem'
            }}>
              <strong>{msg.role === 'user' ? 'Você: ' : 'Assistente: '}</strong>
              {msg.content}
            </div>
          ))}
          {loading && <div style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>Assistente está digitando...</div>}
        </div>

        <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: Quais tecnologias o Marco domina?" 
            style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #555', background: '#222', color: '#fff' }}
          />
          <button type="submit" style={{ padding: '10px 20px', background: '#61dafb', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            Enviar
          </button>
        </form>
      </section>

      <div className="ticks"></div>

      {/* Seção de Experiências / Histórico */}
      <section style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Experiência Profissional</h2>
        
        <div style={{ marginBottom: '1.5rem', background: '#141414', padding: '1.2rem', borderRadius: '8px', border: '1px solid #262626' }}>
          <span style={{ color: '#61dafb', fontSize: '0.85rem' }}>2024 — 2025</span>
          <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0.3rem 0' }}>Consultor / Programador Java Pleno</h3>
          <p style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>NTL Nova Tecnologia · Plataforma IBGE</p>
          <p style={{ color: '#d4d4d4', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Atuação na plataforma do IBGE com arquitetura Java legada, RichFaces e Oracle SQL. Manipulação de arquivos JAR no Eclipse, criação de novas páginas, manutenção de tabelas e melhorias contínuas.
          </p>
        </div>

        <div style={{ background: '#141414', padding: '1.2rem', borderRadius: '8px', border: '1px solid #262626' }}>
          <span style={{ color: '#61dafb', fontSize: '0.85rem' }}>2011 — 2023</span>
          <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0.3rem 0' }}>Analista de Sistemas / Programador Java</h3>
          <p style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Telefônica Brasil</p>
          <p style={{ color: '#d4d4d4', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Sustentação de portais internos para ~500 colaboradores. Em 2014, liderança e participação na migração de 3 plataformas para Java (Hibernate, Spring MVC, Bootstrap, Tomcat), gerenciamento de bases SQL Server e integração com Oracle via LinkedServer.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      {/* Redes Sociais e Contato */}
      <section id="next-steps" style={{ textAlign: 'center', padding: '2rem' }}>
        <div id="social">
          <h2>Conecte-se comigo</h2>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0, marginTop: '10px' }}>
            <li>
              <a href="https://github.com/masfgroove" target="_blank" rel="noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marco-antonio-da-silva-ferreira-ab86572a3/" target="_blank" rel="noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>LinkedIn</a>
            </li>
            <li>
              <a href="https://wa.me/5511987052920" target="_blank" rel="noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App