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
	console.log(1)
	authFactory.verifEmail(user.email)
	.then(function(res){
		console.log(2)
		$scope.verifPass = true
		$scope.emailVerif = res.data.result;
		if ($scope.emailVerif == true) {
			authFactory.login(user)
			.then(function(data){
				console.log(3)
				$scope.loader = true
				$window.localStorage.setItem('secretTokenAuth',data.data.token);
				$window.location.href = '/index';
			},function(msg){
				console.log(4)
				$scope.loader = true
				console.log('error')
				$scope.verifPass = false
			})
		}else{
			$scope.loader = true
		}

	},function(){
		console.log(5)
		$scope.loader = true

	})
	
}




})
