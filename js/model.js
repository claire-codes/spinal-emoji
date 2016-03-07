window.MyModel = Backbone.Model.extend({
  defaults: {
    emoji: 'default'
  },

  getEmoji: function() {
    var self = this;
    $.get("/emoji", function(data) {
      self.set('emoji', data);
    })
  }
});
