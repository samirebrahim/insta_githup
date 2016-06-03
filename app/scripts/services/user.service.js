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

    User.list = function(page,range) {
    return   $http.get('//api.github.com/users?page='+page + '&per_page=' + range);
    };



    User.get = function(userId) {
      return $http.get('//api.github.com/users/' + userId);
    }


    return User;
  });
  // return $http.get(');
