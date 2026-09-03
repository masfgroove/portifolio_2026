import { useState } from 'react'

export function CvChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou a IA assistente do currículo do Marco Antônio. Pergunte o que quiser sobre a minha carreira, tecnologias (Java, Cloud, IA) ou experiências!' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

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
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '1.5rem', background: '#0b0f19', borderRadius: '12px', border: '1px solid #1e293b' }}>
      <h3 style={{ marginBottom: '1rem', textAlign: 'center', color: '#38bdf8', fontSize: '1.25rem', fontWeight: '600' }}>Converse com o meu Currículo (IA)</h3>
      
      <div style={{ height: '320px', overflowY: 'auto', border: '1px solid #1e293b', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', background: '#020617' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ 
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            background: msg.role === 'user' ? '#0284c7' : '#1e293b',
            color: '#fff',
            padding: '10px 14px',
            borderRadius: '8px',
            maxWidth: '80%',
            wordBreak: 'break-word',
            fontSize: '0.9rem'
          }}>
            <strong>{msg.role === 'user' ? 'Você: ' : 'Assistente: '}</strong>
            {msg.content}
          </div>
        ))}
        {loading && <div style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '0.85rem' }}>Assistente está digitando...</div>}
      </div>

      <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Quais tecnologias o Marco domina?" 
          style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid #334155', background: '#020617', color: '#fff', outline: 'none' }}
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
    </div>
  )
}