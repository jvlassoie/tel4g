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

	authFactory.verifEmail(user.email).then(function(res){
		$scope.verifPass = true
		$scope.emailVerif = res.data.result;
		if ($scope.emailVerif == true) {
			authFactory.login(user)
			.then(function(data){
				$window.localStorage.setItem('secretTokenAuth',data.data.token);
				$window.location.href = '/index';
			},function(msg){
				console.log('error')
				$scope.verifPass = false
			})
		}

	},function(){

	})
	
}




})
