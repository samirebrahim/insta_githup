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


    var parse_link_header = function(header) {
      if (header.length === 0) {
        throw new Error("input must not be of zero length");
      }

      // Split parts by comma
      var parts = header.split(',');
      var links = {};
      // Parse each part into a named link
      for (var i = 0; i < parts.length; i++) {
        var section = parts[i].split(';');
        if (section.length !== 2) {
          throw new Error("section could not be split on ';'");
        }
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;
      }
      return links;
    }

    var init = function() {
      $scope.states = {};
      $scope.perPage = 10;; // since The integer ID of the last User that you've seen.  params for githup apis
      $scope.page = 1; // page params for githup apis

      User.list($scope.page)
        .success(function(data) {
          $scope.users = data;
        });
    }
    $scope.loadMore = function() {;
        User.list($scope.page)
          .then(function(response) {
            console.log(response.headers.get("Link"));
            $scope.users = response.data;
            $scope.nextPage = parse_link_header(response.headers);
          });
      }
      //for the left side menu
    $scope.ChangeActiveUser = function(id) {
      $scope.states.activeItem = id;
    }

    init();
  });
