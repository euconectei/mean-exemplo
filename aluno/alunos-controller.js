app.controller('AlunosController', function ($scope, $http) {
  'use strict';

  var url = 'http://localhost:3000/api/aluno';

  $http.get(url)
    .success(function (data) {
      console.log(data);
      $scope.alunos = data;
    })
    .error(function (msg) {
      console.log(msg);
    });

});
