window.MyView = Backbone.View.extend( {
    el: '#myView',

    events: {
      'click .btn': 'randomise'
    },

    initialize: function () {
      this.model = new MyModel();
      this.model.on('change', this.render, this);
      this.render();
    },

    render: function () {
      var self = this;
      $.get('template/template.html', function(template) {
        this.template = Mustache.render(template, {name: self.model.get('emoji')});
        self.$el.html(this.template);
      });
      return this;
    },

    randomise: function() {
      this.model.getEmoji();
    }
});
