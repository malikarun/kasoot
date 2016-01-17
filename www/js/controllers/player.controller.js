angular
  .module('kasoot')
  .controller("PlayerController", PlayerController);

function PlayerController($scope, $log, $ionicModal) {

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/player.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.close = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.open = function() {
    $scope.modal.show();
  };
}
