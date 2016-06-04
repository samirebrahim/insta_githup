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
      User.list()
        .then(function(response) {
          $scope.users = response.data;
          $scope.nextPage = parse_link_header(response.headers("Link"));
        });
    }
    $scope.loadMore = function() {;
        $http.get($scope.nextPage["next"]).then(function(response) {
          $scope.nextPage = parse_link_header(response.headers("Link"));
            $scope.users = $scope.users.concat(response.data);
          }

        );
      }
      //for the left side menu
    $scope.ChangeActiveUser = function(id) {
      $scope.states.activeItem = id;
    }
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

    init();
  });
