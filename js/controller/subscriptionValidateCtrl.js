app.controller("subscriptionValidateCtrl", function ($scope,$http,subscriptionInfoFactory,authFactory,$rootScope,fileUpload,$state,baseFactory,$window,$document,$q,lodash) {
/**************************************
Ressources
***************************************/
/* access*/
if($rootScope.isAuth == false){return $state.transitionTo('authentication')}

	/* init var*/

$scope.loader = false
$scope.canceled = function (){
	$state.transitionTo('home')
}

$scope.validFile = false
$scope.goForm = function(formSub){
	$scope.validFile = true
	var file = $scope.myFile;
	$scope.idUs = null;
	var uploadUrl = baseFactory.baseURL + '/upload';
	authFactory.getUserIdCurrent().then(
		function(res){
			$scope.idUs = res.data.id
		},function(){

		})
	authFactory.getUserIdCurrent()
	.then(function(res){
		$scope.idUs = res.data.id

		fileUpload.uploadFileToUrl(file, uploadUrl)
		.then(function(res){
			subscriptionInfoFactory.postSubscriptionInfo(formSub.iban,formSub.bic,formSub.nom,formSub.prenom,formSub.adresse,res.data.nameImg)
			.then(function(res){
				var ob = angular.fromJson(angular.fromJson(res.data))
				subscriptionInfoFactory.postSubscriptionInfoApi(ob)
				.then(function(res){
					subscriptionInfoFactory.getSubscriptionInfoLastId().then(function(res){
						var id = res.data.id
						subscriptionInfoFactory.putSubUser(id,$scope.idUs)
					})
					
				},function(){

				})

			},function(){

			})
		},function(){

		})
	},function(){

	})
}
})
