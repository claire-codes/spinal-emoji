var app = app || {};

(function() {
  "use strict";

  app.MyModel = Backbone.Model.extend({
    defaults: {
      emoji: ''
    },

    getEmoji: function() {
      var self = this;
      $.get("/emoji", function(data) {
        self.set('emoji', data);
      })
    }
  });
})();
