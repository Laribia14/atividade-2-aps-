const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  pessoas: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Reserva', reservaSchema);
