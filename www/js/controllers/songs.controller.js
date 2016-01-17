angular
  .module('kasoot')
  .controller("SongsController", SongsController);

function SongsController($scope, $log, SongsService) {
  var ctrl = this;

  ctrl.songs = SongsService.all()
}