(function () {
  'use strict';

  angular.module('raccoon')
    .filter('getSortedData', getSortedData);

  getSortedData.$inject = ['$rootScope'];
  function getSortedData($rootScope){
    return function(items){
      $rootScope.$emit('fistElement', items[0]);
      return items
    }

  }
})();
