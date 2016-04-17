(function () {
  'use strict';

  angular.module('raccoon')
    .provider('$main', $main);


  function $main(){
    return{
      $get: function($q, $http){
        return{
          getData: function(){
            var dfd = $q.defer();

            $http.get('./data.json')
              .then(
                function(resp){
                  dfd.resolve(resp.data);
                },
                function(resp){
                  dfd.reject(resp);
                }
              );

            return dfd.promise;

          }

        }
      }
    }
  }


})();
