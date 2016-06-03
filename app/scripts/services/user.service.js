'use strict';

instaGithupApp.factory('User',
  function($http) {
    var User = {};

    User.all = function(filter, page, range) {
      var params = {
        page: page,
        per_page: range
      };
      angular.extend(params, filter);
      return $http.get('/api/users', {
        params: params
      });
    }

    User.list = function(callback) {
      $http.get('//api.github.com/users').success(callback);
    };
    User.get = function(userId) {
      return $http.get('//api.github.com/users' + userId);
    }


    return User;
  });
