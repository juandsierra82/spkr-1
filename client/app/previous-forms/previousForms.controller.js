angular.module('spkr.previous-forms', [])
  .controller('PrevFormsController', function($scope, $window, $location, Auth) {

    $scope.$watch(Auth.isAuth, function(authed) {
      if (authed) {
        $location.path('/presentations/history');
      } else {
        $location.path('/')
      }
    }, true);

    Auth.getAllData()
      .then(function(data){
        $scope.presentations = data.slice(1);
      })
      .catch(function(error){
        console.err(error)
      })
    
  })
  