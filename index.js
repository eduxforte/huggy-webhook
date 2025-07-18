const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota para testes no navegador
app.get('/', (req, res) => {
  res.send('Servidor da Huggy está rodando!');
});

// Rota para receber eventos da Huggy
app.post('/webhook-huggy', (req, res) => {
  console.log('📥 Webhook da Huggy recebido:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200); // Huggy precisa receber um OK
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
