app.factory('optionFactory',function($http,baseFactory) {
	var factory = {
		getOption: function () {
			return $http({ method : "GET", url : baseFactory.baseURL + "/option_subs.json"})
		},
		getOptionById: function (id) {
			return $http({ method : "GET", url : baseFactory.baseURL + '/option_subs/'+ id +'.json'})
		}
	}
	return factory
})