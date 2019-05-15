var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http, $filter) {
  $scope.days = function(date) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '/' + mm + '/' + dd;
    $scope.today = today;
    var date2 = new Date(today);
    var date1 = new Date(date);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return $scope.dayDifference;
  }
});
