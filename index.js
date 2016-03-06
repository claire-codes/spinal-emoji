window.MyView = Backbone.View.extend( {
     el: '#myView',
     initialize: function () {
          this.template = Mustache.render($('#myViewContents').html(), {foo: 'Bob'});
          this.render();
     },
     render: function () {
          this.$el.html(this.template); // this.$el is a jQuery wrapped el var
          return this;
     }
});
$(function () {
    window.myView = new MyView();
});
