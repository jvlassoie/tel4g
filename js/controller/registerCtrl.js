app.controller("registerCtrl", function ($rootScope,$ngBootbox,$scope,authFactory,registerFactory,$stateParams,$window,$document,$q,lodash,$window) {
/**************************************
Ressources
***************************************/
/* access*/
if($rootScope.isAuth){return $window.location.href = '/index';}

/* init var*/
$scope.loader = false
$scope.verifForm = function($form){
	if($form.$valid){
		$scope.loader = true
	}
}
$scope.addUser = function(formUser){
	var user = {
		email: formUser.email,
		firstname: formUser.firstName,
		lastname: formUser.lastName,
		birthdate: formUser.birthDate,
		plainPassword: formUser.password
	}
	var userCo = {
		email: user.email,
		password: user.plainPassword
	}
	registerFactory.registerUser(user)
	.then(function(msg){
		$scope.loader = false
		authFactory.login(userCo)
		.then(function(data){
			$ngBootbox.alert("un nouvel inscrit !").then(function(){	
				$scope.loader = false
				$window.localStorage.setItem('secretTokenAuth',data.data.token);
				$window.location.href = '/index';
			})
		},function(msg){
		})
		$scope.loader = true
	},function(msg){
		$scope.loader = false
		$ngBootbox.alert("une erreur est survenue !")
		$window.location.href = '/index';

	})
}

})
