const express = require('express');
const app = express();

app.use(express.json());

// ✅ Rota de verificação da Huggy (quando você configura a URL no painel)
app.get('/webhook-huggy', (req, res) => {
  const token = req.query.token;
  console.log('🔐 Validação da Huggy recebida. Token:', token);
  res.send(token); // Devolvendo exatamente o token puro
});

// ✅ Rota POST para receber eventos de fato
app.post('/webhook-huggy', (req, res) => {
  console.log('📩 Evento da Huggy recebido:', req.body);
  res.status(200).send({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
