'use strict';

instaGithupApp.factory('User',
  function($http, $state,$q) {
    var User = {};
    var nextPageLink = null;
    User.next = function() {
      if (nextPageLink == null) {
        nextPageLink = '//api.github.com/users?page=1&per_page=10';
      }
      var deffered = $q.defer();
      $http.get(nextPageLink).then(function(response) {
        nextPageLink = parse_link_header(response.headers("Link"))["next"];
        deffered.resolve(response.data);
      }, function(response) {
        deffered.reject(response.data);
      });
      return deffered.promise;
    };



    User.get = function(userId) {
      return $http.get('//api.github.com/user/' + userId);
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

    return User;
  });
