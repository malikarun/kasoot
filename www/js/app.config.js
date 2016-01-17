// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'kasoot' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'kasoot.services' is found in services.js
// 'kasoot.controllers' is found in controllers.js
angular.module('kasoot')

.config(function($logProvider){
  $logProvider.debugEnabled(false);
});