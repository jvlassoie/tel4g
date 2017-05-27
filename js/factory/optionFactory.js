app.factory('optionFactory',function($http,baseFactory) {
	var factory = {
		getOption: function () {
			return $http({ method : "GET", url : baseFactory.baseURL + "/option_subs.json"})
		}
	}
	return factory
})