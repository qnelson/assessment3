myApp.controller('ListController', ['$scope', '$http', function($scope, $http)

    {
        $scope.heroes = [];
        $scope.sortBy = '';
        $scope.powers = [];


        getHeroes();

        $scope.getPowers = function() {
          $http.get('/powers')
            .then(function (response) {

              $scope.powers = response.data;

            });
        };


            function getHeroes() {
              $http.get('/heroes')
                .then(function (response) {
                  response.data.forEach(function (hero) {

                  });

                  $scope.heroes = response.data;
                  console.log('GET /heroes ', response.data);

                });
        }


            $scope.deleteHero = function (id) {
              $http.delete('/heroes/' + id)
                .then(function (response) {
                  console.log('DELETED HERO');
                  getHeroes();
                });
            };
    }

]);
