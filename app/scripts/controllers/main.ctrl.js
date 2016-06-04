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
      $scope.page = 1;
      $scope.pageLimit = 10;

      User.list($scope.page, $scope.pageLimit)
        .success(function(data) {
          $scope.users = data;
        });
    }
    $scope.loadMore = function() {;
        $scope.pageLimit += 10;
        User.list($scope.page, $scope.pageLimit)
          .success(function(data) {
            $scope.users = data;

          });
      }
      //for the left side menu
    $scope.ChangeActiveUser = function(user) {

      $scope.states.activeItem = user.id;
      // $scope.selectedUser = user;
    }
    init();
  });
