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
		},
		getSubscriptionInfoLastId: function () {
			return $http({ 
				method : "GET",
				url : baseFactory.baseURL + "/subinfoid"
			})
		},
		putSubUser: function (id,idUser) {
			return $http({ 
				method : "PUT",
				data: {"subscriptionInfo":{"id" : id}},
				url : baseFactory.baseURL + '/users/'+ idUser
			})
		}
	}
	return factory
})