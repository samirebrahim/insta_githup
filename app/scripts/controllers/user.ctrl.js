'use strict';

/**
 * @ngdoc function
 * @name instaGithupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instaGithupApp
 */
angular.module('instaGithupApp')
  .controller('UserCtrl', function($scope, userResolve) {

    var init = function() {
      $scope.user = userResolve.data;

       $scope.ChangeActiveUser($scope.user["id"]);
    }

    init();
  });
