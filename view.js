window.MyView = Backbone.View.extend( {
    el: '#myView',

    events: {
      'click .btn': 'toggle'
    },

    initialize: function () {
      this.model = new MyModel();
      var that = this;
      this.model.on('change', this.render, this);
      this.render();
    },

    render: function () {
      var that = this;
      $.get('template.html', function(template) {
        this.template = Mustache.render(template, {name: that.model.get('name')});
        that.$el.html(this.template);
      });
      return this;
    },
    toggle: function() {
      if (this.model.get('name') === 'Eric') {
        this.model.set('name', 'Alice');
      } else {
        this.model.set('name', 'Eric');
      }
    }
});
