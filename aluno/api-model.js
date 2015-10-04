var mongoose = require('mongoose'),
  banco = 'mean-teste';
mongoose.connect('mongodb://localhost/' + banco);

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao com ' + banco + ': ', err);
});
db.on('open', function () {
  console.log('Conexão aberta com ' + banco + '.');
});
db.on('connected', function(err){
    console.log('Conectado a ' + banco + '.');
});
db.on('disconnected', function(err){
    console.log('Desconectado de ' + banco + '.');
});

var Schema = mongoose.Schema,
  _schema = {
    nome: { type: String, default: '' },
    turma: { type: String, default: '' },
    email: { type: String, default: '' },
    created_at: { type: Date, default: Date.now() }
    },
  ModelSchema = new Schema(_schema),
  Model = mongoose.model('alunos', ModelSchema);

module.exports = Model;
