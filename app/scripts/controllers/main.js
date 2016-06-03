'use strict';

/**
 * @ngdoc function
 * @name instaGithupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instaGithupApp
 */
angular.module('instaGithupApp')
  .controller('MainCtrl', function($scope, User) {

    var init = function() {
      $scope.states = {};
      $scope.selectedUser = null;
      // //list users
      User.list(function(data) {
        $scope.users = data;
        $scope.states.activeItem = $scope.users[0].id;
        $scope.selectedUser = $scope.users[0];
      });
    }

    //for the left side menu
    $scope.ChangeActiveUser = function(user) {

      $scope.states.activeItem = user.id;
      // $scope.selectedUser = user;
    }
    init();
  });
