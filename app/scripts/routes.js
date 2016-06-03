'use strict';
angular.module('instaGithupApp').config([
  '$stateProvider',
  function($stateProvider) {


    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: '/views/main_layout.html',
        controller: 'MainCtrl'
      })
      .state('users.user', {
        url: '/:userId',
        templateUrl: '/views/user_info.html',

        resolve : {
          user: function(User) {
            return User.get($stateParams["userId"]);
          }
        }
      })

  }
]);
