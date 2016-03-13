"use strict";

describe("view", function() {

  var view, mySpy;

  beforeEach(function() {
    view = new MyView();
    mySpy = sinon.spy(view,'randomise');
  });

  it("should be a Backbone View object", function() {
    expect(view).to.be.an('object');
    expect(view).to.be.an.instanceof(Backbone.View);
  });

  it("should have an el", function() {
    expect(view.$el).to.equal('#blah');
  });

  it("should have default div tagname", function() {
    expect(view.$el.tagname.toLowerCase()).to.equal('div');
  });

  it("should call randomise on button click only", function() {
    expect(mySpy.calledOnce).not.to.be.ok;
    view.render();
    view.$el.find('.btn').trigger('click');
    expect(mySpy.calledOnce).to.be.ok;
  });
});
