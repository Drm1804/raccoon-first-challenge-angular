(function () {
  'use strict';

  angular.module('raccoon')
    .config(config);


  config.$inject = ['$stateProvider'];

  function config($stateProvider){

    $stateProvider
      .state('main',{
        url: '/main',
        templateUrl: 'app/main/main.html'
      });

  }

})();
