app.factory('phoneFactory', function($http,baseFactory){
	var factory = {
		getPhones: function () {
			return $http({ method : "GET", url : baseFactory.baseURL + "/phones.json"})
		},

		getPhoneById: function (id) {
			return $http({ method : "GET", url : baseFactory.baseURL + "/phones/"+ id +".json"})
		}

	}
	return factory
})