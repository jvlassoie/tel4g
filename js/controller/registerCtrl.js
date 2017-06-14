app.controller("registerCtrl", function ($rootScope,$scope,authFactory,registerFactory,$stateParams,$window,$document,$q,lodash,$window) {
/**************************************
Ressources
***************************************/
/* access*/
if($rootScope.isAuth){return $window.location.href = '/index';}

/* init var*/

$scope.loader = false
$scope.addUser = function(formUser){
	$scope.loader = true
	
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
		console.log("test")
		console.log(userCo)
		$scope.loader = false
		$window.alert("un nouvel inscrit !")
		authFactory.login(userCo)
		.then(function(data){
		$window.localStorage.setItem('secretTokenAuth',data.data.token);
		$window.location.href = '/index';
		},function(msg){
		console.log("auth error")
		})
		console.log("adding user successfully")
	},function(msg){
		$scope.loader = false
		$window.alert("une erreur est survenue !")
		console.log("failure")
		$window.location.href = '/index';

	})

}

})
