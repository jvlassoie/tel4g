app.factory('operatingSystemFactory', function($http,baseFactory){
	var factory = {
		getOperatingSystemById: function (id) {
			return $http({ method : "GET", url : baseFactory.baseURL + "/operating__systems/"+ id +".json"})
		},
		getOperatingSystemByUrl: function (url) {
			return $http({ method : "GET", url : baseFactory.baseURL + url +".json"})
		}
	}
	return factory
})