app.controller("subscriptionValidateCtrl", function ($scope,$http,subscriptionInfoFactory,$rootScope,fileUpload,$state,baseFactory,$window,$document,$q,lodash) {
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
	var uploadUrl = baseFactory.baseURL + '/upload';
	fileUpload.uploadFileToUrl(file, uploadUrl);
	console.log(formSub)
	subscriptionInfoFactory.postSubscriptionInfo(formSub.iban,formSub.bic,formSub.nom,formSub.prenom,formSub.adresse)
	.then(function(){
		
	},function(){

	})
}




})
