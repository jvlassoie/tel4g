app.controller("registerCtrl", function ($scope,registerFactory,$stateParams,$window,$document,$q,lodash,$window) {
/**************************************
Ressources
***************************************/
/* init var*/

$scope.loader = false
$scope.addUser = function(formUser){
	$scope.loader = true
	console.log(formUser)
	var user = {
		email: formUser.email,
		firstname: formUser.firstName,
		lastname: formUser.lastName,
		birthdate: formUser.birthDate,
		plainPassword: formUser.password
	}
	registerFactory.registerUser(user)
	.then(function(msg){
		$scope.loader = false
		$window.alert("un nouvel inscrit !")
		console.log("adding user successfully")
		$window.location.href = '/index';
	},function(msg){
		console.log("failure")

	})
	console.log(user)
}

})
