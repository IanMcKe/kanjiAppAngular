var kanjiApp = angular.module('kanjiApp', ['ui.router']);

kanjiApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "QuestionsCtrl",
    controllerAs: "vm"
  });
});
