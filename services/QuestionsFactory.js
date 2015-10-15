kanjiApp.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ beforeAns: factory.questionBefore, answer: factory.questionAnswer, afterAns: factory.questionAfter, level: questionLevel, id: factory.questions.length + 1 });
    factory.questionBefore = null;
    factory.questionAnswer = null;
    factory.questionAfter = null;
    factory.questionLevel = null;
  }
  return factory;
});
