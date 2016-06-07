"use strict";

describe("model", function() {
  var model;

  beforeEach(function() {
    model = new app.MyModel();
  });

  it("should be a Backbone Model", function() {
    expect(model).to.be.an('object');
    expect(model).to.be.an.instanceof(Backbone.Model);
  });

  it("should have a blank emoji set as default", function() {
    expect(model.get("emoji")).to.eq("");
  });

  it("#getEmoji should set a string to the emoji property on the model", function() {
    // sinon.stub($, 'get').yieldsTo("success", "foo");
    $.ajax({success: function(data) {console.log('***' + data);}});
    var testModel = new app.MyModel();
    expect(testModel.get("emoji")).to.eq("");
    testModel.getEmoji();
    // expect(testModel.get("emoji")).to.eq("foo");
    $.get.restore();
  });
});
