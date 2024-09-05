const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/reservasDb';

// Conectar ao MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Middleware
app.use(bodyParser.json());
app.use('/api/reservas', reservaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
