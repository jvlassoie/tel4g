app.controller("authCtrl", function ($scope,$rootScope,$http,authFactory,$stateParams,$window,$document,$q,lodash,$window) {
/**************************************
Ressources
***************************************/
/* access*/
if($rootScope.isAuth){return $window.location.href = '/index';}
$scope.loader = true

/* init var*/

$scope.initVerifMail = function(){
	$scope.emailVerif = true
}
$scope.initVerifPass = function(){
	$scope.verifPass = true
}


$scope.loginUser = function(formUser){
	$scope.loader = false
	var user = {
		email: formUser.email,
		password: formUser.password
	}
	authFactory.verifEmail(user.email)
	.then(function(res){
		$scope.verifPass = true
		$scope.emailVerif = res.data.result;
		if ($scope.emailVerif == true) {
			authFactory.login(user)
			.then(function(data){
				$scope.loader = true
				$window.localStorage.setItem('secretTokenAuth',data.data.token);
				$window.location.href = '/index';
			},function(msg){
				$scope.loader = true
				$scope.verifPass = false
			})
		}else{
			$scope.loader = true
		}

	},function(){
		$scope.loader = true

	})	
}

})
