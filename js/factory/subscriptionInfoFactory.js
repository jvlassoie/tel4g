app.factory('subscriptionInfoFactory',function($http,baseFactory) {
	var factory = {
		postSubscriptionInfo: function (iban,bic,name,prenom,place,identityCard) {
			return $http({ 
				method : "POST",
				data :{
					"iban": iban,
					"bic": bic,
					"name": name,
					"prenom": prenom,
					"place": place,
					"identityCard": identityCard
				},
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				url : baseFactory.baseURL + "/upload"
			})
		},
		postSubscriptionInfoApi: function (sub) {
			return $http({ 
				method : "POST",
				data : sub,
				url : baseFactory.baseURL + "/subscription_infos"
			})
		}
	}
	return factory
})