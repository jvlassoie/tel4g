app.controller("listPhoneCtrl", function ($scope,phoneFactory,brandFactory,operatingSystemFactory,$window,$document,$q,lodash) {
/**************************************
Ressources
***************************************/
/* init var*/

$scope.loader = false


$q.all([
	phoneFactory.getPhones()
	.then(function(obj){
		return $scope.phones = obj.data; 
	},function(msg) {
	})

	]).then(
	/* execution après tout les appels ajax */
	function(){
		$scope.loader = true
	},function(){
	})



})
