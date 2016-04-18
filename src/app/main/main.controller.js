(function () {
  'use strict';

  angular.module('raccoon')
    .controller('MainController', MainController);


  MainController.$inject = ['$main', '$scope', '$timeout'];

  function MainController($main, $scope, $timeout) {

    var vm = this;
    vm.data = [];
    vm.sort = '';
    vm.sortDesc = false;
    vm.checkPeople = {};
    vm.changeMainPeople = changeMainPeople;
    vm.balanceSortFunc = balanceSortFunc;
    vm.getData = getData;
    vm.getData();



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

    $scope.$watch('sortedResult', function() {
      vm.checkPeople = $scope.sortedResult[0];
    });

  }
})();
