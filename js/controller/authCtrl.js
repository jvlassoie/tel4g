app.controller("authCtrl", function ($scope,$rootScope,$http,authFactory,$stateParams,$window,$document,$q,lodash,$window) {
/**************************************
Ressources
***************************************/
/* access*/
if($rootScope.isAuth){return $window.location.href = '/index';}

/* init var*/

$scope.loginUser = function(formUser){
	var user = {
		email: formUser.email,
		password: formUser.password
	}
	authFactory.login(user)
	.then(function(data){
		console.log(data)
		console.log(data.data.token)
		$window.localStorage.setItem('secretTokenAuth',data.data.token);
		$window.location.href = '/index';
	},function(msg){
		console.log('error')
		$window.location.href = '/index';
	})
}




})
