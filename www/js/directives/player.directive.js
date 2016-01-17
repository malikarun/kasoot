// common Player directive

angular
  .module('kasoot')
  .directive('player', Player);

function Player() {
  return {
    restrict: 'E',
    scope: {
      src: '='
    },
    templateUrl: "templates/player.html",
    controller: "PlayerController as player"
  };
}