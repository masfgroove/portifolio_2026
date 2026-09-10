import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e E-mail são obrigatórios' })
  }

  try {
    const { data, error } = await supabase
      .from('portfolio_visits') // Usa a tabela que já existe no seu projeto
      .insert([{ name, email, created_at: new Date() }])

    if (error) {
      console.error('Erro ao salvar no Supabase:', error)
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true, data })
  } catch (err) {
    console.error('Erro interno:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}