TrelloClone.Views.ItemShow = Backbone.View.extend({
  template: JST['item_show'],

  tagName: 'li',

  render: function () {
    this.$el.html(this.template({item: this.model}));
    return this;
  }
});
