var app = angular.module("app",['ui.router','ngLodash','720kb.datepicker'])
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
	.state('register', {
		url: "/user/new",
		templateUrl : "templates/register.html",
		controller: "registerCtrl",
		data: { pageTitle: "Tel4g : Inscription" }
		
	}).state('authentication', {
		url: "/authentification",
		templateUrl : "templates/auth.html",
		controller: "authCtrl",
		data: { pageTitle: "Tel4g : authentification" }
		
	}).state('subscription', {
		url: "/subscription/new",
		templateUrl : "templates/subscription.html",
		controller: "subscriptionCtrl",
		data: { pageTitle: "Tel4g : Souscription" }
		
	})
	$urlRouterProvider.otherwise('/index');

	$locationProvider.html5Mode(true);


});

app.run(function ($rootScope, $http, $window, $state, authFactory,$stateParams, $transitions) {
	$transitions.onStart({}, function(trans){
		if ($window.localStorage.getItem('secretTokenAuth') != null) {	
			$http.defaults.headers.common['Authorization'] ='Bearer ' + $window.localStorage.getItem('secretTokenAuth');
		}

		$rootScope.isAuth = authFactory.isAuth()
	})
	$rootScope.logout = function(){return authFactory.logout()};
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})