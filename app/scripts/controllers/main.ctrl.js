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
      // //list users
      // User.list(function(data,2,5) {
      //   $scope.users = data;
      //   $scope.states.activeItem = $scope.users[0].id;
      //   $scope.selectedUser = $scope.users[0];
      // });
      //


      User.list($scope.page, $scope.pageLimit)
        .success(function(data) {
          $scope.users = data;
        });
    }
    $scope.loadMore = function() {;
        $scope.pageLimit += 10;
        User.list($scope.page, $scope.pageLimit)
          .success(function(data) {

            $scope.users = $scope.users.concat(data);
          });
      }
      //for the left side menu
    $scope.ChangeActiveUser = function(user) {

      $scope.states.activeItem = user.id;
      // $scope.selectedUser = user;
    }
    init();
  });
