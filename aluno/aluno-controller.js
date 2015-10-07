app.controller('AlunoController', function ($scope, $http) {

  var url = '../api/aluno';

  $scope.aluno = function () {

    $http.get(url)
      .success(function (data) {
        return data;
      })
      .error(function (msg) {
        console.log(msg);
      });

  };

  $scope.cadastraAluno = function () {
    var url = '../api/aluno',
      data = {
        nome: $scope.nome,
        email: $scope.email,
        turma: $scope.turma
      };

    $http.post(url, data)
      .success(function (data, status) {
        $scope.msg = {
          'data': data,
          'status': status
        };
      })
      .error(function (err) {
        $scope.msg = {
          'data': err
        };
      });
  };

});
