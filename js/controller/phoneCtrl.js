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
		console.log("un problème est survenu "+ msg)
	})

	]).then(
	/* execution après tout les appels ajax */
	function(){
		$scope.loader = true
		console.log("each call ajax has success")
	},function(){
		console.log("oups")
	})



})
