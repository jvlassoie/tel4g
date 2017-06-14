app.controller("homeCtrl", function ($scope,$state,subscriptionFactory,optionFactory,$window,$document,$q,lodash) {
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


$scope.abonnementActive = function(sub,index,aboID){
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
		$window.localStorage.removeItem('aboID');


	}else{
		$scope.subSelected[index] = "abonnement-active"
		$scope.btnValide = true;
		$scope.aboID = aboID
		$window.localStorage.setItem('aboID', $scope.aboID);
	}
}
console.log($scope.subSelected)	
}

$scope.optActive = function(opt,index,optID){
if ($scope.subSelected.length >= 1) {

	var found  = lodash.find($scope.optSelected,"option-active")
	var key; 
	angular.forEach($scope.optSelected,function(v,k){
		key = k
	})	
	if(!found && $scope.optSelected.length < 1 || key == index){	
		if($scope.optSelected[index] == "option-active"){
			$scope.optSelected = []
		$window.localStorage.removeItem('optionId');

		}else{
			$scope.optSelected[index] = "option-active"
			$scope.optID = optID
			$window.localStorage.setItem('optionId', $scope.optID);

		}
		}
	}else{
		$scope.optSelected = []

	}
}

$scope.submit = function(){
	$state.transitionTo('subscription')
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