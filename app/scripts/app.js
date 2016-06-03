'use strict';

/**
 * @ngdoc overview
 * @name instaGithupApp
 * @description
 * # instaGithupApp
 *
 * Main module of the application.
 */
var instaGithupApp = angular.module('instaGithupApp', [
  'ui.router',
]);

instaGithupApp.config(['$compileProvider', function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
