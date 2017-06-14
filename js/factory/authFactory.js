app.factory('authFactory', function($http,baseFactory,$httpParamSerializer, $window){
	var factory = {
		login: function (user) {
			return $http({
				method : "POST", 
				url : baseFactory.baseURL + "/login_check",
				data : $httpParamSerializer(user),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
		},

		logout: function(){
			if ($window.localStorage.getItem('secretTokenAuth') != null  || $window.localStorage.getItem('secretTokenAuth') != '') {
				$window.localStorage.setItem('secretTokenAuth',"");
				$window.localStorage.removeItem('secretTokenAuth');
				$window.location.href = '/index';
			}else{
				$window.location.href = '/index';
			}
		},

		isAuth: function(){
			if ($window.localStorage.getItem('secretTokenAuth') != null) {
				console.log('authentifié')
				return true
			}else{
				console.log('pas authentifié')
				return false
			}
		}

	}
	return factory
})