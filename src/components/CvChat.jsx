import React, { useState } from 'react';
import { Pinecone } from '@pinecone-database/pinecone';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Inicializa o cliente do Pinecone com a sua chave
      const pc = new Pinecone({ 
        apiKey: 'pcsk_5SBCRY_3tJJBb4ze4BYmNF6vjYPQaihJyd2s8d81AawH2tadZ5uLzJytPc6AN5xCCTPkz6',
        dangerouslyAllowBrowser: true // Permite rodar no navegador para testes locais
      });

      const assistant = pc.assistant('cv');

      const response = await assistant.chat({
        messages: [{ role: 'user', content: userMessage.content }]
      });

      const botMessage = { role: 'assistant', content: response.message.content };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao falar com o Pinecone:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Ops, ocorreu um erro ao consultar o assistente.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', fontFamily: 'sans-serif' }}>
      <h3>Assistente Virtual (CV)</h3>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #eee', padding: '8px', marginBottom: '12px', background: '#f9f9f9' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '8px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '8px 12px', 
              borderRadius: '8px', 
              background: msg.role === 'user' ? '#007bff' : '#e2e2e2', 
              color: msg.role === 'user' ? '#fff' : '#000' 
            }}>
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <div style={{ fontSize: '12px', color: '#666' }}>Pensando...</div>}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Digite sua pergunta..." 
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enviar</button>
      </form>
    </div>
  );
}