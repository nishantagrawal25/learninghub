var svc = angular.module('services', []);

svc.service('AdminSvc', [ '$http', '$q', function($http, $q) {
  return {
    
    getData : function() {
      return this.get('https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths')
    },
    
    //generic services of get and post which can be used again

    get : function(url, params) {
      var deferred = $q.defer();
      $http.get(url, {
        params : params
      }).then(function(response) {
        if (response.status == 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.data);
        }
      });
      return deferred.promise;
    },

  }

} ])