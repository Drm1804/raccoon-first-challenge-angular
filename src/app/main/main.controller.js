(function () {
  'use strict';

  angular.module('raccoon')
    .controller('MainController', MainController);


  MainController.$inject = ['$main'];

  function MainController($main){

    var vm = this;
    vm.data = [];
    vm.getData = getData;

    vm.getData();



    function getData(){
      $main.getData()
        .then(
          function(resp){
            console.log(resp)
            vm.data = resp;
          }
        )
    }

  }
})();
