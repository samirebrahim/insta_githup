'use strict';
angular.module('instaGithupApp').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/users/1');
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
        resolve: {
          userResolve: function(User, $stateParams) {
            if (isNaN($stateParams["userId"])) {
              $stateParams["userId"] = 1;
              }
            return User.get($stateParams["userId"]);
          }
        }
      })

  }
]);
