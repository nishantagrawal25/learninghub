var app = angular.module('app', [ 'services', 'ui.bootstrap']);

app.controller('AppCtrl', [ '$scope', 'AdminSvc', function($scope, AdminSvc) {

  getData();
  
  //Function to get data of websites
  
  function getData() {
    AdminSvc.getData().then(function(data) {
      $scope.paths = data.paths;
      angular.forEach($scope.paths, function(itm) {
        itm.votes = localStorage.getItem(itm.name);
        if (itm.votes == null) {
          itm.votes = 0;
        }
      })
    })
  }
  
  //Function to vote respective paths
  
  $scope.vote = function(type, path) {
    path.votes = 0;
    path.votes = localStorage.getItem(path.name);
    if (path.votes == null) {
      path.votes = 0;
    }
    if (type == 'up') {
      path.votes = parseInt(path.votes) + 1;
      localStorage.setItem(path.name, path.votes);
    } else if (type == 'down') {
      path.votes = parseInt(path.votes) - 1;
      localStorage.setItem(path.name, path.votes);
    }
    
  }

} ]);
