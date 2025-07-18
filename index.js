const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ GET para validação do token
app.get('/webhook-huggy', (req, res) => {
  const token = req.query.token;
  console.log('🔐 Validação recebida. Token:', token);
  res.send(token);
});

// ✅ POST para eventos
app.post('/webhook-huggy', (req, res) => {
  console.log('📩 Evento recebido:', req.body);
  res.status(200).send({ status: 'ok' });
});

// ✅ PUT para Huggy salvar/editar webhook
app.put('/webhook-huggy', (req, res) => {
  console.log('🛠️ PUT recebido da Huggy:', req.body);
  res.status(200).send({ status: 'put ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
