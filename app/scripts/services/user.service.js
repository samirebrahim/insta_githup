'use strict';

instaGithupApp.factory('User',
  function($http, $state) {
    var User = {};
    User.goToDefaultPage = function() {

      $state.go('users.user');
      return;
    }

    User.list = function() {
      return $http.get('//api.github.com/users?page=1&per_page=10');
    };



    User.get = function(userId) {
      return $http.get('//api.github.com/user/' + userId);
    }


    return User;
  });
