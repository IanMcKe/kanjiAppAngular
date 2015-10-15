var kanjiApp = angular.module('kanjiApp', ['ui.router', 'ngMock']);

kanjiApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "QuestionsCtrl",
    controllerAs: "vm"
  });
});
