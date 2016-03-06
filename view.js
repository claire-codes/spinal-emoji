window.MyView = Backbone.View.extend( {
    el: '#myView',

    events: {
      'click .btn': 'toggle'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      var that = this;
      $.get('template.html', function(template) {
        this.template = Mustache.render(template, {foo: 'Bob'});
        that.$el.html(this.template);
      });
      return this;
    },
    toggle: function() {
      console.log('floop');
    }
});
