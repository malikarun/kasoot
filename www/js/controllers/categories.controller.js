angular
  .module('kasoot')
  .controller("CategoriesController", CategoriesController);

function CategoriesController($scope, $log, CategoriesService) {
  var ctrl = this;

  ctrl.categories = CategoriesService.all();
}