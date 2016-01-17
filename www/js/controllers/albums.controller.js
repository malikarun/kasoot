angular
  .module('kasoot')
  .controller("AlbumsController", AlbumsController);

function AlbumsController($scope, $log, AlbumsService) {
  var ctrl = this;

  ctrl.albums = AlbumsService.all();
}