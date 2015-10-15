describe('QuestionsController tests', function() {
  beforeEach(module('kanjiApp'));

  var $controller;
  var QuestionsFactory;

  beforeEach(inject(function(_$controller_, _QuestionsFactory_) {
    $controller = _$controller_;
    QuestionsFactory = _QuestionsFactory_;
  }));

  it('can pull questions from the QuestionsFactory', function() {
    QuestionsFactory.questionBefore = "あの";
    QuestionsFactory.questionAnswer = "背";
    QuestionsFactory.questionAfter = "の高い女の人は誰ですか。";
    QuestionsFactory.questionLevel = "N5";
    QuestionsFactory.addQuestion();

    var controller = $controller('QuestionsCtrl', {});

    expect(controller.questions[0].beforeAns).toBe("あの");
    expect(controller.questions[0].answer).toBe("背");
    expect(controller.questions[0].afterAns).toBe("の高い女の人は誰ですか。");
    expect(controller.questions[0].level).toBe("N5");
  });
});
