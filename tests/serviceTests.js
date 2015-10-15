describe('UtilitiesFactory test', function() {
  beforeEach(module('kanjiApp'));

  var UtilitiesFactory;

  beforeEach(inject(function(_UtilitiesFactory_) {
    UtilitiesFactory = _UtilitiesFactory_;
  }));

  it('has a findById function', function() {
    expect(angular.isFunction(UtilitiesFactory.findById)).toBe(true);
  });

  it('can find a specific question based on its id', function() {
    var questions = [{ beforeAns: "日本人は年末年始を家族や友人と", answer: "思いっ切り", afterAns: "楽しむようです。", level: "N3", id: 1 }, { beforeAns: "あの", answer: "背", afterAns: "の高い女の人は誰ですか。", level: "N5", id: 2 }, { beforeAns: "彼は迫害者を懲らしめて人民たちのあだを", answer: "討つ", afterAns: "だろう。", level: "N3", id: 3  }];
    var question = UtilitiesFactory.findById(questions, 2);

    expect(question.beforeAns).toBe("あの");
    expect(question.answer).toBe("背");
    expect(question.afterAns).toBe("の高い女の人は誰ですか。")
    expect(question.level).toBe("N5");
  });
});
