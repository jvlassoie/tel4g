app.factory('subscriptionFactory',function($http,baseFactory) {
	var factory = {
		getSubscription: function () {
			return $http({ method : "GET", url : baseFactory.baseURL + "/subscriptions.json"})
		}
	}
	return factory
})