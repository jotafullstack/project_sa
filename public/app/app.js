/*var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   //$locationProvider.html5Mode(true);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : 'app/views/sobre.html',
      controller  : 'SobreCtrl',
   })

   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});
*/

var app2 = angular.module('testemunhosApp', ["ui.router"])
app2.config(function($stateProvider){
$stateProvider
  .state('index', {
      url: "",
      views: {
          "viewA": {
              templateUrl: "app/views/areas.html"
          },
          "viewB": {
              template: "<h2>Podemos estar ao seu lado de três formas</h2>"
          }
      }
  })
  .state('route1', {
      url: "/route1",
      views: {
          "viewA": {
              templateUrl: "app/views/treinos.html"
          },
          "viewB": {
              template: "<h2>Treinos</h2>"
          }
      }
  })
  .state('route2', {
      url: "/route2",
      views: {
          "viewA": {
              templateUrl: "app/views/consultoria.html"
          },
          "viewB": {
              template: "<h2>Consultoria</h2>"
          }
      }
  })
  .state('route3', {
      url: "/route3",
      views: {
          "viewA": {
              templateUrl: "app/views/retiros.html"
          },
          "viewB": {
              template: "<h2>Retiros</h2>"
          }
      }
  })
})
