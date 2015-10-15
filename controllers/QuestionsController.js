kanjiApp.controller('QuestionsCtrl', function QuestionsCtrl(QuestionsFactory) {
  var vm = this;
  vm.questions = QuestionsFactory.questions;
  vm.QuestionsFactory = QuestionsFactory;
});
