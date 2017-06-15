app.factory('subscriptionFactory',function($http,baseFactory) {
	var factory = {
		getSubscription: function () {
			return $http({ method : "GET", url : baseFactory.baseURL + "/subscriptions.json"})
		},
		getSubscriptionById: function (id) {
			return $http({ method : "GET", url : baseFactory.baseURL + '/subscriptions/'+ id +'.json'})
		}
	}
	return factory
})