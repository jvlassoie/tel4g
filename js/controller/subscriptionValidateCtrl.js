app.controller("subscriptionValidateCtrl", function ($scope,$rootScope,FileUploader,$state,baseFactory,$window,$document,$q,lodash) {
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
$scope.uploader = new FileUploader();
$scope.uploader.url = baseFactory.baseURL+'/image/'
console.log($scope.uploader)
})
