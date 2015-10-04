app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'AlunoController'
    })
    .when('/alunos', {
      templateUrl: 'views/alunos.html',
      controller: 'AlunosController'
    })
    .when('/alunos/:id', {
      templateUrl: 'views/aluno.html',
      controller: 'AlunoController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
