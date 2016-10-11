'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express();

app.use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded( { extended: true }));

app.use('/assets', express.static('assets'));

var Controller = require('./aluno/api-controller'),
  server = app.listen(3000, '0.0.0.0', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });

app
  .get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  })
  // .get('/alunos', function (req, res) {
  //   res.sendFile(__dirname + '/views/alunos.html');
  // })
  // .get('/alunos/:id', function (req, res) {
  //   res.sendFile(__dirname + '/views/aluno.html');
  // })
  .get('/:file', function (req, res) {
    res.sendFile(__dirname + '/' + req.params.file);
  })
  .get('/assets/:path/:file', function (req, res) {
    res.sendFile(__dirname + '/assets/' + req.params.path + '/' + req.params.file);
  })
  .get('/views/:file', function (req, res) {
    res.sendFile(__dirname + '/views/' + req.params.file);
  })
  .get('/aluno/:file', function (req, res) {
    res.sendFile(__dirname + '/aluno/' + req.params.file);
  });

app.route('/api/aluno')
  .get(function (req, res) {
    Controller.retrieve(req, res);
  })
  .post(function (req, res) {
    Controller.create(req, res);
  })
  .put(function (req, res) {
    Controller.update(req, res);
  })
  .delete(function (req, res) {
    Controller.delete(req, res);
  });
