var app = app || {};

(function($) {
  "use strict";

  app.MyView = Backbone.View.extend( {
    el: '#myView',

    events: {
      'click .btn': 'randomise'
    },

    template: Handlebars.compile($("#view-template").html()),

    initialize: function () {
      this.model = new app.MyModel();
      this.model.on('change', this.render, this);
      this.render();
    },

    render: function () {
      var data =  {name: this.model.get('emoji')};
      var html = this.template(data);
      this.$el.html(html);
    //   $.get('template/template.html', function(template) {
    //     this.template = Mustache.render(template, {name: self.model.get('emoji')});
    //     self.$el.html(this.template);
    //   });
      return this;
    },

    randomise: function() {
      this.model.getEmoji();
    }
  });
})(jQuery);
