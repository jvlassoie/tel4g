app.controller("phoneCtrl", function ($scope,phoneFactory,brandFactory,$stateParams,operatingSystemFactory,$window,$document,$q,lodash) {
/**************************************
Ressources
***************************************/
/* init var*/
$scope.loader = false

$q.all([
	phoneFactory.getPhoneById($stateParams.idPhone)
	.then(function(obj){
		return $scope.phone = obj.data; 

	},function(msg) {
	})

	]).then(
	/* execution après tout les appels ajax */
	function(){
		$scope.loader = true
	},function(){
	})



})
