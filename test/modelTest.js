"use strict";

describe("model", function() {
  var model;

  beforeEach(function() {
    model = new MyModel();
  });

  it("should be a Backbone Model", function() {
    expect(model).to.be.an('object');
    expect(model).to.be.an.instanceof(Backbone.Model);
  });

  it("should have a blank emoji set as default", function() {
    expect(model.get("emoji")).to.eq("");
  });

  it("should return a string when getEmoji() is called", function() {
    sinon.stub($, 'get', function() {
      return "foo";
    });
    var testModel = new MyModel();
    testModel.getEmoji();
    expect(testModel.get("emoji")).to.eq("foo");
    $.get.restore();
  });
});
