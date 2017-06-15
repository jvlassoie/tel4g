app.controller("subscriptionCtrl", function ($scope,$rootScope,optionFactory,$state,subscriptionFactory,operatingSystemFactory,$window,$document,$q,lodash) {
/**************************************
Ressources
***************************************/
/* access*/
if($rootScope.isAuth == false){return $state.transitionTo('authentication')}

	/* init var*/

$scope.loader = false
if ($window.localStorage.getItem('abonnementId')) {
	var abonnementId = $window.localStorage.getItem('abonnementId')
	var optionId = ($window.localStorage.getItem('optionId') != undefined || $window.localStorage.getItem('optionId') != null)? $window.localStorage.getItem('optionId') : null	
	$scope.total = 0
	subscriptionFactory.getSubscriptionById(abonnementId).
	then(function(res){
		$scope.myAbonnement = res.data
		$scope.total += res.data.price
		$scope.loader = true
	},function(msg){
		console.log('problem')
	})
	if (optionId != null) {
		optionFactory.getOptionById(optionId).
		then(function(res){
			$scope.myOption = res.data
			$scope.total += res.data.price
		},function(){
			console.log('problem')
		})
	}
}

$scope.canceled = function (){
	$state.transitionTo('home')
}

$scope.subscriptionValidate = function (){
	$state.transitionTo('subscriptionValidate')
}


})
