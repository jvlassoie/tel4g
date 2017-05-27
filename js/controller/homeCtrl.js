app.controller("homeCtrl", function ($scope,subscriptionFactory,optionFactory,$window,$document,$q,lodash) {
/**************************************
		Ressources
***************************************/
/* init var*/
$scope.loader = false
$scope.btnValide = false
$scope.subSelected = []
$scope.optSelected = []

$q.all([
		subscriptionFactory.getSubscription()
		.then(function(obj){
			return $scope.subscriptions = obj.data; 
		},function(msg) {
			console.log("un problème est survenu "+ msg)
		}),
		
		optionFactory.getOption()
		.then(function(obj){
			return $scope.options = obj.data; 
		},function(msg) {
			console.log("un problème est survenu "+ msg)
		})
	]).then(
		/* execution après tout les appels ajax */
		function(){
			$scope.loader = true
			console.log("each call ajax has success")
		},function () {
			console.log("error")
		}
	)

/* function */


$scope.abonnementActive = function(sub,index){
var found  = lodash.find($scope.subSelected,"abonnement-active")
var key; 
angular.forEach($scope.subSelected,function(v,k){
	key = k
})	
if(!found && $scope.subSelected.length < 1 || key == index){	
	if($scope.subSelected[index] == "abonnement-active"){
		$scope.subSelected = []
		$scope.optSelected = []
		$scope.btnValide = false;

	}else{
		$scope.subSelected[index] = "abonnement-active"
		$scope.btnValide = true;
	}
}
	console.log($scope.subSelected.length)
}

$scope.optActive = function(opt,index){
if ($scope.subSelected.length >= 1) {

	var found  = lodash.find($scope.optSelected,"option-active")
	var key; 
	angular.forEach($scope.optSelected,function(v,k){
		key = k
	})	
	if(!found && $scope.optSelected.length < 1 || key == index){	
		if($scope.optSelected[index] == "option-active"){
			$scope.optSelected = []

		}else{
			$scope.optSelected[index] = "option-active"
		}
		}
	}else{
		$scope.optSelected = []

	}
}

/**************************************
		Animation
***************************************/
	$scope.navanime = "animated fadeInDown"
	$scope.navcolor = "nav-trans"
	$document.on('scroll', function() {
		if($window.scrollY > window.innerHeight){
			if ($scope.animated != "animated fadeInDown") {	
				$scope.navanime = "animated fadeInDown"
				$scope.$apply();
			}
			if ($scope.navcolor != "nav-color") {	
				$scope.navcolor = "nav-color"
				$scope.$apply();
			}
		}else{
			if ($scope.navanime != "animated fadeInUp") {	
				$scope.navanime = "animated fadeInUp"
			}
			if ($scope.navcolor != "nav-trans") {	
				$scope.navcolor = "nav-trans"
				$scope.$apply();

			}
		}
	});
});