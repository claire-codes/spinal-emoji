"use strict";

describe("view", function() {

  var view, mySpy;

  beforeEach(function() {
    $('body').append('<div id="myView"></div>');
    view = new MyView();
  });

  it("should be a Backbone View object", function() {
    expect(view).to.be.an('object');
    expect(view).to.be.an.instanceof(Backbone.View);
  });

  it("should have an el", function() {
    expect(view.el).to.equal('#blah');
  });

  it("should have default div tagname", function() {
    expect(view.tagName.toLowerCase()).to.equal('div');
  });

  it("should render alright", function() {
    expect(view.$el.find('.btn').length).to.eq(1);
  });

  it("should have a model associated with it", function() {
    expect(view.model).to.be.an.instanceof(Backbone.Model);
  });

  it("should call randomise on button click only", function() {
    mySpy = sinon.spy(MyView.prototype,'randomise');
    var rando = sinon.spy(MyView.prototype,'render');
    expect(rando.calledOnce).not.to.be.ok;
    var testView = new MyView();
    expect(mySpy.calledOnce).not.to.be.ok;
    testView.render();
    testView.$el.find('.btn').trigger('click');
    // expect(mySpy.calledOnce).to.be.ok;
    expect(rando.calledOnce).to.be.ok;
    MyView.prototype.randomise.restore();
    MyView.prototype.render.restore();
  });
});
