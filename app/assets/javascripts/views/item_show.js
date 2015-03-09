TrelloClone.Views.ItemShow = Backbone.View.extend({
  template: JST['item_show'],

  events: {
    "click input": "checkItem"
  },

  tagName: 'li',

  render: function () {
    this.$el.html(this.template({item: this.model}));
    return this;
  },

  checkItem: function (event) {
    event.preventDefault();
    debugger
  }
});
