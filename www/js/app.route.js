// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'kasoot' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'kasoot.services' is found in services.js
// 'kasoot.controllers' is found in controllers.js
angular.module('kasoot')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.radio', {
    url: '/radio',
    views: {
      'menuContent': {
        templateUrl: 'templates/radio.html',
        controller: 'RadioController as ctrl'
      }
    }
  })

  .state('app.categories', {
    url: '/categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/categories.html',
        controller: 'CategoriesController as ctrl'
      }
    }
  })

  .state('app.albums', {
    url: '/categories/:categoryId/albums',
    views: {
      'menuContent': {
        templateUrl: 'templates/albums.html',
        controller: 'AlbumsController as ctrl'
      }
    }
  })

  .state('app.songs', {
    url: '/categories/:categoryId/albums/:albumId/songs',
    views: {
      'menuContent': {
        templateUrl: 'templates/songs.html',
        controller: 'SongsController as ctrl'
      }
    }
  })

  .state('app.downloads', {
    url: '/downloads',
    views: {
      'menuContent': {
        templateUrl: 'templates/downloads.html',
        controller: 'DownloadsCtrl as ctrl'
      }
    }
  })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  // .state('app.single', {
  //   url: '/downloads/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'DownloadCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/radio');
});
