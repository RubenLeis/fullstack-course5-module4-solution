(function () {

angular.module('MenuApp',['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');


  // Set up UI states
  
  $stateProvider
	// Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
	})
  
    .state('tab1', {
      url: '/tab1',
      templateUrl: 'src/tab1.html'
    })

    .state('tab2', {
      url: '/tab2',
      templateUrl: 'src/tab2.html'
    })
	
	.state('categoriesList', {
      url: '/categories-list',
      templateUrl: 'src/menuapp/templates/categories.template.html'
    });
}


})();
