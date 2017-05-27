app.factory('brandFactory', function($http,baseFactory){
	var factory = {
		getBrandById: function (id) {
			return $http({ method : "GET", url : baseFactory.baseURL + "/brands/"+ id +".json"})
		},
		getBrandByUrl: function (url) {
			return $http({ method : "GET", url : baseFactory.baseURL + url +".json"})
		}
	}
	return factory
})