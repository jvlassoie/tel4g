var app = angular.module("app",['ui.router','ngLodash'])
app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$stateProvider
	.state('home', {	
		url: "/index",
		templateUrl : "templates/home.html",
		controller : "homeCtrl",
		data: { pageTitle: "Tel4g : Accueil" }
	})
	.state('listPhoneCtrl', {
		url: "/phones",
		templateUrl : "templates/listPhones.html",
		title:"phone",
		controller : "listPhoneCtrl",
		data: { pageTitle: "Tel4g : Liste de téléphone" }
	})
	.state('phone', {
		url: "/phones/:idPhone",
		templateUrl : "templates/phone.html",
		controller: "phoneCtrl",
		data: { pageTitle: "Tel4g : Téléphone description" }
		
	})
	$urlRouterProvider.otherwise('/index');

	$locationProvider.html5Mode(true);


});

app.run(['$rootScope', '$state', '$stateParams',
	function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}])