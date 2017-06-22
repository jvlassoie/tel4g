app.factory('subscriptionInfoFactory',function($http,baseFactory) {
	var factory = {
		postSubscriptionInfo: function (iban,bic,name,prenom,place) {
			return $http({ 
				method : "POST",
				data :{
					"iban": iban,
					"bic": bic,
					"name": name,
					"prenom": prenom,
					"place": place
				},
				url : baseFactory.baseURL + "/upload"
			})
		}
	}
	return factory
})