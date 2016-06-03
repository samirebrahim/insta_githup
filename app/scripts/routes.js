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
        controller: 'UserCtrl',
        resolve : {
          userResolve: function(User,$stateParams) {
            return User.get($stateParams["userId"]);
          }
        }
      })

  }
]);
