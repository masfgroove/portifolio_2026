import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
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
      // ATENÇÃO: Substitua 'SUA_API_KEY_DO_PINECONE' pela sua chave real 
      // e verifique o host correto do seu assistente no painel do Pinecone
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
      <section id="center" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Marco Antônio da Silva Ferreira</h1>
          <p>
            Desenvolvedor Java | Automação | IA & Cloud | Sistemas Corporativos
          </p>
        </div>
      </section>

      {/* Seção do Chat com o Currículo */}
      <section id="cv-chat" style={{ maxWidth: '700px', margin: '2rem auto', padding: '1.5rem', background: '#1a1a1a', borderRadius: '12px', border: '1px solid #333' }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center', color: '#61dafb' }}>Converse com o meu Currículo (IA)</h2>
        
        <div style={{ height: '350px', overflowY: 'auto', border: '1px solid #444', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', background: '#121212' }}>
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
          {loading && <div style={{ color: '#888', fontStyle: 'italic' }}>Assistente está digitando...</div>}
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

      <section id="next-steps" style={{ textAlign: 'center', padding: '2rem' }}>
        <div id="social">
          <h2>Conecte-se comigo</h2>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0, marginTop: '10px' }}>
            <li>
              <a href="https://github.com/masfgroove" target="_blank" style={{ color: '#61dafb', textDecoration: 'none' }}>GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marco-antonio-da-silva-ferreira-ab86572a3/" target="_blank" style={{ color: '#61dafb', textDecoration: 'none' }}>LinkedIn</a>
            </li>
            <li>
              <a href="https://wa.me/5511987052920" target="_blank" style={{ color: '#25D366', textDecoration: 'none' }}>WhatsApp</a>
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