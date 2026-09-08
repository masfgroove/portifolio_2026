import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const clientIp = 
      req.headers['x-forwarded-for'] || 
      req.socket.remoteAddress || 
      'Desconhecido'

    const userAgent = req.headers['user-agent'] || 'Desconhecido'

    const { error } = await supabase
      .from('portfolio_visits')
      .insert([{ ip: clientIp, user_agent: userAgent }])

    if (error) {
      console.error('Erro ao salvar no Supabase:', error)
      return res.status(500).json({ error: 'Erro ao registrar visita' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Erro interno:', err)
    return res.status(500).json({ error: 'Erro interno no servidor' })
  }
}