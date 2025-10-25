const { Schema, model } = require('mongoose');

const departamentoSchema = new Schema({
  nombre: { type: String, required: true },
  slogan: { type: String, required: false }
}, {
  timestamps: true
});

module.exports = model('Departamento', departamentoSchema);
