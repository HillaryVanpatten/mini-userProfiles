angular.module('userProfiles').controller('mainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";

    function getUsers () {
      $scope.users = mainService.getUsers()
    }

    getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite

})
