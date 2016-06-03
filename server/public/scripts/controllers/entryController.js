myApp.controller('EntryController', ['$scope', '$http', function($scope, $http) {

    $scope.powers = [];
    $scope.heroes = [];



    $scope.getPowers = function() {
      $http.get('/powers')
        .then(function (response) {

          $scope.powers = response.data;

        });
    };

    $scope.submitHero = function () {
      var data = $scope.hero;
      $http.post('/heroes', data)
        .then(function () {
          console.log('POST /heroes');
        });
    };

    $scope.getPowers();

}]);
