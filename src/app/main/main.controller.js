(function () {
  'use strict';

  angular.module('raccoon')
    .controller('MainController', MainController);


  MainController.$inject = ['$main'];

  function MainController($main){

    var vm = this;
    vm.data = [];
    vm.sort = '';
    vm.sortDesc = false;
    vm.balanceSortFunc = balanceSortFunc;
    vm.getData = getData;

    vm.getData();



    function getData(){
      $main.getData()
        .then(
          function(resp){
            vm.data = resp;
          }
        )
    }

    function balanceSortFunc(typeSort){

      if(vm.sort !== typeSort){
        vm.sortDesc = false;
        vm.sort = typeSort;
      } else{

        if(!vm.sortDesc){
          vm.sortDesc = true;
        } else {
          vm.sort = '';
          vm.sortDesc = false;
        }
      }

    }

  }
})();
