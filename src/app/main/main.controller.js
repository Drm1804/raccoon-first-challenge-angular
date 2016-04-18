(function () {
  'use strict';

  angular.module('raccoon')
    .controller('MainController', MainController);


  MainController.$inject = ['$main', '$rootScope'];

  function MainController($main, $rootScope) {

    var vm = this;
    vm.data = [];
    vm.sort = '';
    vm.sortDesc = false;
    vm.checkPeople = {};
    vm.changeMainPeople = changeMainPeople;
    vm.balanceSortFunc = balanceSortFunc;
    vm.getData = getData;
    vm.getData();

    $rootScope.$on('fistElement', function(ev, data){
      vm.checkPeople = data;
    });


    function getData() {
      $main.getData()
        .then(
          function (resp) {
            vm.data = resp;
            vm.checkPeople = vm.data[0]
          }
        )
    }

    function balanceSortFunc(typeSort) {

      if (vm.sort !== typeSort) {
        vm.sortDesc = false;
        vm.sort = typeSort;
      } else {

        if (!vm.sortDesc) {
          vm.sortDesc = true;
        } else {
          vm.sort = '';
          vm.sortDesc = false;
        }
      }

    }

    function changeMainPeople(item) {
      vm.checkPeople = item
    }

  }
})();
