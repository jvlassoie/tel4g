app.factory('authFactory', function($http,baseFactory,$httpParamSerializer, $window){
	var factory = {
		getUserIdCurrent: function(){
			return $http({
				method : "GET", 
				url : baseFactory.baseURL + "/getuserid",
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
		},
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

		verifEmail: function (email){
			return $http({
				method : "GET", 
				url : baseFactory.baseURL + '/checkmailexist/' + email
			})

		},

		isAuth: function(){
			if ($window.localStorage.getItem('secretTokenAuth') != null) {
				return true
			}else{
				return false
			}
		}

	}
	return factory
})