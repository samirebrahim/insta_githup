'use strict';

instaGithupApp.factory('User',
  function($http, $state) {
    var User = {};
    User.goToDefaultPage = function() {

      $state.go('users');
      return;
    }


    User.list = function(page, since) {
      return $http.get('//api.github.com/users?page=' + page + '&per_page=10&since=' + since);
    };



    User.get = function(userId) {
      return $http.get('//api.github.com/users/' + userId);
    }


    return User;
  });
// return $http.get(');
