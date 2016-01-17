angular
  .module('kasoot')
  .controller("RadioController", RadioController);

function RadioController($scope, $log, $ionicPlatform, $ionicLoading, angularPlayer) {
  var ctrl = this;

  ctrl.radio = {
    id: "live-radio",
    title: 'Live Radio',
    artist: 'Arun Malik',
    url: 'http://101.165.108.71:8000/listen'
  }
}
