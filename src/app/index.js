(function () {
  'use strict';

  angular.module('raccoon', ['ui.router', 'ui.bootstrap']);

  angular.module('raccoon')
    .config(config);


  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider){

    $urlRouterProvider.otherwise('/main');

  }

})();
