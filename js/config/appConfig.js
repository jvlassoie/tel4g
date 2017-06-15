var app = angular.module("app",['ui.router','ngLodash','720kb.datepicker','angularFileUpload'])
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
		
	}).state('subscriptionValidate', {
		url: "/subscription/validate",
		templateUrl : "templates/subscriptionValidate.html",
		controller: "subscriptionValidateCtrl",
		data: { pageTitle: "Tel4g : Validation de la souscription" }
		
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

//Directive API Google Maps
app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});