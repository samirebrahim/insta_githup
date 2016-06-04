'use strict';

/**
 * @ngdoc function
 * @name instaGithupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instaGithupApp
 */
angular.module('instaGithupApp')
  .controller('MainCtrl', function($scope, User, $http) {


    var init = function() {
      $scope.states = {};
      User.next()
        .then(function(data) {
          $scope.users = data;
        });
    }
    $scope.loadMore = function() {
      User.next().then(function(data) {
        $scope.users = $scope.users.concat(data);
      })
    }

    //for the left side menu
    $scope.ChangeActiveUser = function(id) {
      $scope.states.activeItem = id;
    }


    init();
  });
