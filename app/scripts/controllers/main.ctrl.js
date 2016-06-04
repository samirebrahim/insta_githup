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
      $scope.since = 0; // since params for githup apis
      $scope.page = 0; // page params for githup apis

      User.list($scope.page, $scope.since)
        .success(function(data) {
          $scope.users = data;
        });
    }
    $scope.loadMore = function() {;
        $scope.since += 1;
        $scope.page += 1;
        User.list($scope.page, $scope.since)
          .success(function(data) {
            console.log(data);
            $scope.users = $scope.users.concat(data);

          });
      }
      //for the left side menu
    $scope.ChangeActiveUser = function(id) {
      $scope.states.activeItem = id;
    }
    init();
  });
