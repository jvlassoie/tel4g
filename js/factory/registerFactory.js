app.factory('registerFactory', function($http,baseFactory){
	var factory = {
		registerUser: function (user) {
			return $http({
			 method : "POST", 
			 url : baseFactory.baseURL + "/users",
			 data : user
			})
		}

	}
	return factory
})