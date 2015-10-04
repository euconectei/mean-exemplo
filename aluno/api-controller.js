var Aluno = require('./api-model'),
  query = '',
  msg = '',
  retorno = function (err, data) {
    if (err){
      console.log('Erro: ', err);
      msg = err;
    }
    else{
      console.log('Sucesso:', data);
      msg = data;
    }
    return msg;
  },
  Controller = {
    create: function (req, res) {

      var dados = {
        "nome" : req.body.nome,
        "email" : req.body.email,
        "turma" : req.body.turma
      },
        model = new Aluno(dados);
      model.save(function (err, data) {
        res.send('Obrigado por se cadastrar.');
      });

    },
    retrieve: function (req, res) {

      Aluno.find(query, function (err, data) {
        res.send(retorno(err, data));
      });

    },
    update: function (req, res) {
      res.end('req: ', res.params);
    },
    delete: function (req, res) {

      console.log(req.query.id);
      Aluno.remove({
        _id: req.query.id
      }, function (err, data) {
        res.send(retorno(err, data));
      });

    }
  };

module.exports = Controller;
